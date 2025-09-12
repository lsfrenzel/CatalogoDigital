import { Link } from "wouter";
import { useLayoutEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomSystemsMessage from "@/components/CustomSystemsMessage";

export default function EcommerceDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [cartItems, setCartItems] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', name: 'Todos os Produtos', icon: 'fas fa-th-large' },
    { id: 'eletronicos', name: 'Eletrônicos', icon: 'fas fa-mobile-alt' },
    { id: 'moda', name: 'Moda & Acessórios', icon: 'fas fa-tshirt' },
    { id: 'casa', name: 'Casa & Decoração', icon: 'fas fa-home' },
    { id: 'esportes', name: 'Esportes & Lazer', icon: 'fas fa-dumbbell' }
  ];

  const products = [
    {
      id: 1,
      name: 'Smartphone Samsung Galaxy A54',
      price: 'R$ 1.299,90',
      oldPrice: 'R$ 1.599,90',
      discount: '19%',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      category: 'eletronicos',
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: 'Tênis Nike Air Max Revolution',
      price: 'R$ 289,90',
      oldPrice: 'R$ 349,90',
      discount: '17%',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      category: 'moda',
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: 'Smart TV LG 55" 4K UHD',
      price: 'R$ 2.199,90',
      oldPrice: 'R$ 2.799,90',
      discount: '21%',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      category: 'eletronicos',
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: 'Sofá 3 Lugares Reclinável',
      price: 'R$ 1.899,90',
      oldPrice: 'R$ 2.399,90',
      discount: '21%',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      category: 'casa',
      rating: 4.6,
      inStock: true
    },
    {
      id: 5,
      name: 'Camiseta Polo Lacoste',
      price: 'R$ 259,90',
      oldPrice: 'R$ 319,90',
      discount: '19%',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      category: 'moda',
      rating: 4.4,
      inStock: true
    },
    {
      id: 6,
      name: 'Bicicleta Mountain Bike 21V',
      price: 'R$ 899,90',
      oldPrice: 'R$ 1.199,90',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      category: 'esportes',
      rating: 4.3,
      inStock: false
    },
    {
      id: 7,
      name: 'Mesa de Jantar 6 Lugares',
      price: 'R$ 1.599,90',
      oldPrice: 'R$ 1.999,90',
      discount: '20%',
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      category: 'casa',
      rating: 4.5,
      inStock: true
    },
    {
      id: 8,
      name: 'Notebook Lenovo IdeaPad 3',
      price: 'R$ 2.499,90',
      oldPrice: 'R$ 2.999,90',
      discount: '17%',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      category: 'eletronicos',
      rating: 4.2,
      inStock: true
    }
  ];

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-gray-300"></i>);
    }

    return stars;
  };

  return (
    <>
      <Header />
      <main className="pt-0 bg-white min-h-screen">
        {/* Navigation Bar */}
        <div className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-6">
                <Link 
                  href="/sistema-ecommerce" 
                  className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
                  data-testid="back-to-system"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Voltar ao Sistema
                </Link>
                
                <div className="hidden md:flex items-center space-x-1">
                  <h1 className="text-xl font-bold text-blue-600">Moda & Estilo</h1>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">DEMO</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <i className="fas fa-search text-gray-500 mr-2"></i>
                  <input 
                    type="text" 
                    placeholder="Buscar produtos..." 
                    className="bg-transparent border-none outline-none text-sm w-64"
                    data-testid="search-input"
                  />
                </div>
                
                <button 
                  className="relative p-2 text-blue-600 hover:text-blue-800"
                  data-testid="cart-button"
                >
                  <i className="fas fa-shopping-cart text-xl"></i>
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {cartItems}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-3">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <p className="text-sm md:text-base font-medium">
                <i className="fas fa-info-circle mr-2"></i>
                Esta é uma demonstração do nosso e-commerce para lojas físicas. Todos os produtos são fictícios.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <section className="py-6 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border'
                  }`}
                  data-testid={`category-${category.id}`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900" data-testid="products-title">
                {activeCategory === 'todos' ? 'Todos os Produtos' : categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600 text-sm">
                {filteredProducts.length} produtos encontrados
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg border hover:shadow-lg transition-shadow duration-300 overflow-hidden" data-testid={`product-${product.id}`}>
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Esgotado</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-3 md:p-4">
                    <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2 line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center space-x-1 mr-2">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-xs text-gray-500">({product.rating})</span>
                    </div>
                    
                    <div className="mb-3">
                      {product.oldPrice && (
                        <span className="text-xs text-gray-500 line-through block">{product.oldPrice}</span>
                      )}
                      <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    </div>
                    
                    <button 
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                      className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                        product.inStock
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      data-testid={`add-to-cart-${product.id}`}
                    >
                      <i className="fas fa-shopping-cart mr-2"></i>
                      {product.inStock ? 'Adicionar' : 'Indisponível'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Banner */}
        <section className="py-8 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center" data-testid="feature-shipping">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-shipping-fast text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Frete Grátis</h3>
                <p className="text-sm text-gray-600">Acima de R$ 299 para todo Brasil</p>
              </div>
              
              <div className="text-center" data-testid="feature-payment">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-credit-card text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Parcelamento</h3>
                <p className="text-sm text-gray-600">Em até 12x sem juros no cartão</p>
              </div>
              
              <div className="text-center" data-testid="feature-return">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-undo text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Troca Fácil</h3>
                <p className="text-sm text-gray-600">30 dias para trocas e devoluções</p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Systems Message */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <CustomSystemsMessage variant="banner" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}