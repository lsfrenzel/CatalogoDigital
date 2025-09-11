import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService } from "./email";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      
      // Send emails asynchronously (don't wait for completion to respond to user)
      Promise.all([
        emailService.sendContactNotification(contact),
        emailService.sendContactConfirmation(contact)
      ]).catch(error => {
        console.error('Error sending emails:', error);
      });
      
      res.json({ 
        success: true, 
        message: "Solicitação enviada com sucesso! Entraremos em contato em breve.",
        id: contact.id 
      });
    } catch (error) {
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
