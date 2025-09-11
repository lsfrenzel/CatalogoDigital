import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <i className="fas fa-code text-primary-foreground text-xl"></i>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground playfair" data-testid="company-name">TechSolutions</h1>
              <p className="text-sm text-muted-foreground lato">Catálogo de Soluções Digitais</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
