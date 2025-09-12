import { 
  users, 
  contactSubmissions, 
  suppliers,
  categories,
  products,
  stockMovements,
  type User, 
  type InsertUser, 
  type ContactSubmission, 
  type InsertContact,
  type Supplier,
  type InsertSupplier,
  type Category,
  type InsertCategory,
  type Product,
  type InsertProduct,
  type StockMovement,
  type InsertStockMovement
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, sql } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Suppliers
  getSuppliers(): Promise<Supplier[]>;
  getSupplier(id: string): Promise<Supplier | undefined>;
  createSupplier(supplier: InsertSupplier): Promise<Supplier>;
  updateSupplier(id: string, supplier: Partial<InsertSupplier>): Promise<Supplier | undefined>;
  deleteSupplier(id: string): Promise<boolean>;
  
  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategory(id: string, category: Partial<InsertCategory>): Promise<Category | undefined>;
  deleteCategory(id: string): Promise<boolean>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductByCode(code: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: string, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: string): Promise<boolean>;
  updateProductStock(id: string, newStock: number): Promise<Product | undefined>;
  getLowStockProducts(): Promise<Product[]>;
  
  // Stock Movements
  getStockMovements(): Promise<StockMovement[]>;
  getStockMovement(id: string): Promise<StockMovement | undefined>;
  getProductMovements(productId: string): Promise<StockMovement[]>;
  createStockMovement(movement: InsertStockMovement): Promise<StockMovement>;
  updateStockMovement(id: string, movement: Partial<InsertStockMovement>): Promise<StockMovement | undefined>;
  deleteStockMovement(id: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const [contact] = await db
      .insert(contactSubmissions)
      .values({
        ...insertContact,
        phone: insertContact.phone || "",
        systemOfInterest: insertContact.systemOfInterest || "",
        message: insertContact.message || "",
        acceptsMarketing: insertContact.acceptsMarketing || "false",
      })
      .returning();
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const contacts = await db.select().from(contactSubmissions);
    return contacts.sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  // Suppliers implementation
  async getSuppliers(): Promise<Supplier[]> {
    const allSuppliers = await db.select().from(suppliers).orderBy(suppliers.name);
    return allSuppliers;
  }

  async getSupplier(id: string): Promise<Supplier | undefined> {
    const [supplier] = await db.select().from(suppliers).where(eq(suppliers.id, id));
    return supplier || undefined;
  }

  async createSupplier(insertSupplier: InsertSupplier): Promise<Supplier> {
    const [supplier] = await db
      .insert(suppliers)
      .values({
        ...insertSupplier,
        email: insertSupplier.email || "",
        phone: insertSupplier.phone || "",
        address: insertSupplier.address || "",
        rating: insertSupplier.rating || "0",
        deliveryDays: insertSupplier.deliveryDays || 0,
        isActive: insertSupplier.isActive !== undefined ? insertSupplier.isActive : true,
      })
      .returning();
    return supplier;
  }

  async updateSupplier(id: string, updateData: Partial<InsertSupplier>): Promise<Supplier | undefined> {
    const [supplier] = await db
      .update(suppliers)
      .set(updateData)
      .where(eq(suppliers.id, id))
      .returning();
    return supplier || undefined;
  }

  async deleteSupplier(id: string): Promise<boolean> {
    const [deletedSupplier] = await db.delete(suppliers).where(eq(suppliers.id, id)).returning({ id: suppliers.id });
    return !!deletedSupplier;
  }

  // Categories implementation
  async getCategories(): Promise<Category[]> {
    const allCategories = await db.select().from(categories).orderBy(categories.name);
    return allCategories;
  }

  async getCategory(id: string): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.id, id));
    return category || undefined;
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const [category] = await db
      .insert(categories)
      .values({
        ...insertCategory,
        description: insertCategory.description || "",
      })
      .returning();
    return category;
  }

  async updateCategory(id: string, updateData: Partial<InsertCategory>): Promise<Category | undefined> {
    const [category] = await db
      .update(categories)
      .set(updateData)
      .where(eq(categories.id, id))
      .returning();
    return category || undefined;
  }

  async deleteCategory(id: string): Promise<boolean> {
    const [deletedCategory] = await db.delete(categories).where(eq(categories.id, id)).returning({ id: categories.id });
    return !!deletedCategory;
  }

  // Products implementation
  async getProducts(): Promise<Product[]> {
    const allProducts = await db.select().from(products).orderBy(products.name);
    return allProducts;
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product || undefined;
  }

  async getProductByCode(code: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.code, code));
    return product || undefined;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db
      .insert(products)
      .values({
        ...insertProduct,
        description: insertProduct.description || "",
        categoryId: insertProduct.categoryId || null,
        supplierId: insertProduct.supplierId || null,
        price: insertProduct.price || "0",
        currentStock: insertProduct.currentStock || 0,
        minimumStock: insertProduct.minimumStock || 0,
        unit: insertProduct.unit || "un",
        isActive: insertProduct.isActive !== undefined ? insertProduct.isActive : true,
        updatedAt: new Date(),
      })
      .returning();
    return product;
  }

  async updateProduct(id: string, updateData: Partial<InsertProduct>): Promise<Product | undefined> {
    const [product] = await db
      .update(products)
      .set({
        ...updateData,
        updatedAt: new Date(),
      })
      .where(eq(products.id, id))
      .returning();
    return product || undefined;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const [deletedProduct] = await db.delete(products).where(eq(products.id, id)).returning({ id: products.id });
    return !!deletedProduct;
  }

  async updateProductStock(id: string, newStock: number): Promise<Product | undefined> {
    const [product] = await db
      .update(products)
      .set({
        currentStock: newStock,
        updatedAt: new Date(),
      })
      .where(eq(products.id, id))
      .returning();
    return product || undefined;
  }

  async getLowStockProducts(): Promise<Product[]> {
    const lowStockProducts = await db
      .select()
      .from(products)
      .where(
        and(
          sql`${products.currentStock} <= ${products.minimumStock}`,
          eq(products.isActive, true)
        )
      )
      .orderBy(products.name);
    return lowStockProducts;
  }

  // Stock Movements implementation
  async getStockMovements(): Promise<StockMovement[]> {
    const allMovements = await db
      .select()
      .from(stockMovements)
      .orderBy(desc(stockMovements.createdAt));
    return allMovements;
  }

  async getStockMovement(id: string): Promise<StockMovement | undefined> {
    const [movement] = await db
      .select()
      .from(stockMovements)
      .where(eq(stockMovements.id, id));
    return movement || undefined;
  }

  async getProductMovements(productId: string): Promise<StockMovement[]> {
    const movements = await db
      .select()
      .from(stockMovements)
      .where(eq(stockMovements.productId, productId))
      .orderBy(desc(stockMovements.createdAt));
    return movements;
  }

  async createStockMovement(insertMovement: InsertStockMovement): Promise<StockMovement> {
    // Calculate total value if not provided
    const unitPrice = parseFloat(insertMovement.unitPrice || "0");
    const totalValue = insertMovement.totalValue || (unitPrice * insertMovement.quantity).toString();

    // Get current product to validate stock for outbound movements
    const currentProduct = await this.getProduct(insertMovement.productId);
    if (!currentProduct) {
      throw new Error("Produto não encontrado");
    }

    const currentStock = currentProduct.currentStock || 0;
    const newStock = insertMovement.type === "entrada" 
      ? currentStock + insertMovement.quantity
      : currentStock - insertMovement.quantity;

    // Validate that outbound movements don't result in negative stock
    if (insertMovement.type === "saida" && newStock < 0) {
      throw new Error(`Estoque insuficiente. Estoque atual: ${currentStock}, tentativa de saída: ${insertMovement.quantity}`);
    }

    // Use transaction to ensure atomicity
    return await db.transaction(async (tx) => {
      // Insert the stock movement
      const [movement] = await tx
        .insert(stockMovements)
        .values({
          ...insertMovement,
          unitPrice: insertMovement.unitPrice || "0",
          totalValue,
          reason: insertMovement.reason || "",
          responsible: insertMovement.responsible || "",
          notes: insertMovement.notes || "",
        })
        .returning();

      // Update product stock
      await tx
        .update(products)
        .set({
          currentStock: newStock,
          updatedAt: new Date(),
        })
        .where(eq(products.id, insertMovement.productId));

      return movement;
    });
  }

  async updateStockMovement(id: string, updateData: Partial<InsertStockMovement>): Promise<StockMovement | undefined> {
    // For simplicity, we don't allow updating the core movement data (productId, type, quantity)
    // as this would require complex stock recalculation. Only allow updating metadata.
    const allowedFields = {
      reason: updateData.reason,
      responsible: updateData.responsible,
      notes: updateData.notes,
    };

    const [movement] = await db
      .update(stockMovements)
      .set(allowedFields)
      .where(eq(stockMovements.id, id))
      .returning();
    return movement || undefined;
  }

  async deleteStockMovement(id: string): Promise<boolean> {
    // Get the movement before deleting to reverse stock changes
    const movement = await this.getStockMovement(id);
    if (!movement) {
      return false;
    }

    const currentProduct = await this.getProduct(movement.productId);
    if (!currentProduct) {
      throw new Error("Produto associado não encontrado");
    }

    const currentStock = currentProduct.currentStock || 0;
    // Reverse the stock movement
    const reversedStock = movement.type === "entrada" 
      ? currentStock - movement.quantity
      : currentStock + movement.quantity;

    // Validate that reversing the movement won't result in negative stock
    if (reversedStock < 0) {
      throw new Error(`Não é possível excluir esta movimentação pois resultaria em estoque negativo. Estoque atual: ${currentStock}`);
    }

    // Use transaction to ensure atomicity
    return await db.transaction(async (tx) => {
      // Delete the stock movement
      const [deletedMovement] = await tx
        .delete(stockMovements)
        .where(eq(stockMovements.id, id))
        .returning({ id: stockMovements.id });

      if (!deletedMovement) {
        return false;
      }

      // Update product stock (reverse the movement)
      await tx
        .update(products)
        .set({
          currentStock: reversedStock,
          updatedAt: new Date(),
        })
        .where(eq(products.id, movement.productId));

      return true;
    });
  }
}

export const storage = new DatabaseStorage();
