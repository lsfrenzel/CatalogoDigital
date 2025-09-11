import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService } from "./email";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

// Simple rate limiting store
const rateLimitStore = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, lastReset: now });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Rate limiting check
      const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
      if (!checkRateLimit(clientIP)) {
        return res.status(429).json({
          success: false,
          message: "Muitas solicitações. Tente novamente em alguns minutos."
        });
      }

      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      
      // Send emails and handle results properly
      const emailResults = await Promise.allSettled([
        emailService.sendContactNotification(contact),
        emailService.sendContactConfirmation(contact)
      ]);
      
      // Log email sending results
      const [notificationResult, confirmationResult] = emailResults;
      
      if (notificationResult.status === 'rejected') {
        console.error('Failed to send notification email:', notificationResult.reason);
      } else if (!notificationResult.value) {
        console.warn('Notification email was not sent (likely due to configuration)');
      }
      
      if (confirmationResult.status === 'rejected') {
        console.error('Failed to send confirmation email:', confirmationResult.reason);
      } else if (!confirmationResult.value) {
        console.warn('Confirmation email was not sent (likely due to configuration)');
      }
      
      // Return success to user (contact is saved regardless of email status)
      res.status(202).json({ 
        success: true, 
        message: "Solicitação enviada com sucesso! Entraremos em contato em breve.",
        id: contact.id 
      });
    } catch (error) {
      console.error('Contact submission error:', error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Dados inválidos",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Get contact submissions (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Erro ao buscar contatos" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
