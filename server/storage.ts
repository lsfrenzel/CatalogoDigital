import { 
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

// Database storage implementation removed - using MemStorage for demo
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

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: User[] = [];
  private contacts: ContactSubmission[] = [];
  private suppliersStore: Supplier[] = [];
  private categoriesStore: Category[] = [];
  private productsStore: Product[] = [];
  private movementsStore: StockMovement[] = [];

  // Helper method to generate IDs
  private generateId(): string {
    return crypto.randomUUID();
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      ...insertUser,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const contact: ContactSubmission = {
      ...insertContact,
      id: this.generateId(),
      phone: insertContact.phone || "",
      systemOfInterest: insertContact.systemOfInterest || "",
      message: insertContact.message || "",
      acceptsMarketing: insertContact.acceptsMarketing || "false",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.contacts.push(contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.contacts].sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  // Suppliers
  async getSuppliers(): Promise<Supplier[]> {
    return [...this.suppliersStore].sort((a, b) => a.name.localeCompare(b.name));
  }

  async getSupplier(id: string): Promise<Supplier | undefined> {
    return this.suppliersStore.find(supplier => supplier.id === id);
  }

  async createSupplier(insertSupplier: InsertSupplier): Promise<Supplier> {
    const supplier: Supplier = {
      ...insertSupplier,
      id: this.generateId(),
      email: insertSupplier.email || "",
      phone: insertSupplier.phone || "",
      address: insertSupplier.address || "",
      rating: insertSupplier.rating || "0",
      deliveryDays: insertSupplier.deliveryDays || 0,
      isActive: insertSupplier.isActive !== undefined ? insertSupplier.isActive : true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.suppliersStore.push(supplier);
    return supplier;
  }

  async updateSupplier(id: string, updateData: Partial<InsertSupplier>): Promise<Supplier | undefined> {
    const index = this.suppliersStore.findIndex(supplier => supplier.id === id);
    if (index === -1) return undefined;
    
    this.suppliersStore[index] = {
      ...this.suppliersStore[index],
      ...updateData,
      updatedAt: new Date(),
    };
    return this.suppliersStore[index];
  }

  async deleteSupplier(id: string): Promise<boolean> {
    const index = this.suppliersStore.findIndex(supplier => supplier.id === id);
    if (index === -1) return false;
    this.suppliersStore.splice(index, 1);
    return true;
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return [...this.categoriesStore].sort((a, b) => a.name.localeCompare(b.name));
  }

  async getCategory(id: string): Promise<Category | undefined> {
    return this.categoriesStore.find(category => category.id === id);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const category: Category = {
      ...insertCategory,
      id: this.generateId(),
      description: insertCategory.description || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.categoriesStore.push(category);
    return category;
  }

  async updateCategory(id: string, updateData: Partial<InsertCategory>): Promise<Category | undefined> {
    const index = this.categoriesStore.findIndex(category => category.id === id);
    if (index === -1) return undefined;
    
    this.categoriesStore[index] = {
      ...this.categoriesStore[index],
      ...updateData,
      updatedAt: new Date(),
    };
    return this.categoriesStore[index];
  }

  async deleteCategory(id: string): Promise<boolean> {
    const index = this.categoriesStore.findIndex(category => category.id === id);
    if (index === -1) return false;
    this.categoriesStore.splice(index, 1);
    return true;
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return [...this.productsStore].sort((a, b) => a.name.localeCompare(b.name));
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.productsStore.find(product => product.id === id);
  }

  async getProductByCode(code: string): Promise<Product | undefined> {
    return this.productsStore.find(product => product.code === code);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const product: Product = {
      ...insertProduct,
      id: this.generateId(),
      description: insertProduct.description || "",
      price: insertProduct.price || "0",
      currentStock: insertProduct.currentStock || 0,
      minimumStock: insertProduct.minimumStock || 0,
      unit: insertProduct.unit || "un",
      isActive: insertProduct.isActive !== undefined ? insertProduct.isActive : true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.productsStore.push(product);
    return product;
  }

  async updateProduct(id: string, updateData: Partial<InsertProduct>): Promise<Product | undefined> {
    const index = this.productsStore.findIndex(product => product.id === id);
    if (index === -1) return undefined;
    
    this.productsStore[index] = {
      ...this.productsStore[index],
      ...updateData,
      updatedAt: new Date(),
    };
    return this.productsStore[index];
  }

  async deleteProduct(id: string): Promise<boolean> {
    const index = this.productsStore.findIndex(product => product.id === id);
    if (index === -1) return false;
    this.productsStore.splice(index, 1);
    return true;
  }

  async updateProductStock(id: string, newStock: number): Promise<Product | undefined> {
    const index = this.productsStore.findIndex(product => product.id === id);
    if (index === -1) return undefined;
    
    this.productsStore[index] = {
      ...this.productsStore[index],
      currentStock: newStock,
      updatedAt: new Date(),
    };
    return this.productsStore[index];
  }

  async getLowStockProducts(): Promise<Product[]> {
    return this.productsStore.filter(product => 
      (product.currentStock || 0) <= (product.minimumStock || 0)
    );
  }

  // Stock Movements
  async getStockMovements(): Promise<StockMovement[]> {
    return [...this.movementsStore].sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getStockMovement(id: string): Promise<StockMovement | undefined> {
    return this.movementsStore.find(movement => movement.id === id);
  }

  async getProductMovements(productId: string): Promise<StockMovement[]> {
    return this.movementsStore
      .filter(movement => movement.productId === productId)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async createStockMovement(insertMovement: InsertStockMovement): Promise<StockMovement> {
    const movement: StockMovement = {
      ...insertMovement,
      id: this.generateId(),
      reason: insertMovement.reason || "",
      responsible: insertMovement.responsible || "",
      notes: insertMovement.notes || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    // Update product stock
    const productIndex = this.productsStore.findIndex(p => p.id === insertMovement.productId);
    if (productIndex !== -1) {
      const currentStock = this.productsStore[productIndex].currentStock || 0;
      const newStock = insertMovement.type === 'entrada' 
        ? currentStock + insertMovement.quantity
        : currentStock - insertMovement.quantity;
      
      this.productsStore[productIndex] = {
        ...this.productsStore[productIndex],
        currentStock: Math.max(0, newStock),
        updatedAt: new Date(),
      };
    }
    
    this.movementsStore.push(movement);
    return movement;
  }

  async updateStockMovement(id: string, updateData: Partial<InsertStockMovement>): Promise<StockMovement | undefined> {
    const index = this.movementsStore.findIndex(movement => movement.id === id);
    if (index === -1) return undefined;
    
    this.movementsStore[index] = {
      ...this.movementsStore[index],
      ...updateData,
      updatedAt: new Date(),
    };
    return this.movementsStore[index];
  }

  async deleteStockMovement(id: string): Promise<boolean> {
    const index = this.movementsStore.findIndex(movement => movement.id === id);
    if (index === -1) return false;
    
    const movement = this.movementsStore[index];
    
    // Reverse the stock change
    const productIndex = this.productsStore.findIndex(p => p.id === movement.productId);
    if (productIndex !== -1) {
      const currentStock = this.productsStore[productIndex].currentStock || 0;
      const reversedStock = movement.type === 'entrada' 
        ? currentStock - movement.quantity
        : currentStock + movement.quantity;
      
      if (reversedStock < 0) {
        throw new Error(`Não é possível excluir esta movimentação pois resultaria em estoque negativo. Estoque atual: ${currentStock}`);
      }
      
      this.productsStore[productIndex] = {
        ...this.productsStore[productIndex],
        currentStock: reversedStock,
        updatedAt: new Date(),
      };
    }
    
    this.movementsStore.splice(index, 1);
    return true;
  }
}

// Use MemStorage for the demo as per project guidelines
export const storage = new MemStorage();
