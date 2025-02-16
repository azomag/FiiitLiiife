import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Filter, Star, X } from 'lucide-react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Equipment' },
    { id: 'weights', name: 'Weights' },
    { id: 'machines', name: 'Machines' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: 'Adjustable Dumbbell Set',
      price: 299.99,
      category: 'weights',
      image: '/api/placeholder/300/200',
      description: 'Adjustable weights from 5-52.5 lbs',
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: 'Commercial Treadmill',
      price: 1999.99,
      category: 'cardio',
      image: 'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114175.jpg?t=st=1739708703~exp=1739712303~hmac=39ec10f3eacdf14dc64d81b7f708908f1c01db31d34b68bbb7bb9e935e2b07d9&w=360',
      description: 'Professional grade treadmill with 15% incline',
      rating: 4.9,
      inStock: true
    },
    {
      id: 3,
      name: 'Olympic Barbell',
      price: 199.99,
      category: 'weights',
      image: 'https://img.freepik.com/free-vector/sport-metal-barbell-rack_1284-58534.jpg?t=st=1739708757~exp=1739712357~hmac=57cde20c7aa32856113d61f2eb60168b29fde8f70a32ebf6e9676e8ff19204d1&w=740',
      description: '20kg Olympic barbell with knurling',
      rating: 4.7,
      inStock: false
    },
    {
      id: 4,
      name: 'Cable Machine',
      price: 2499.99,
      category: 'machines',
      image: 'https://img.freepik.com/free-photo/man-using-press-machine-fitness-club_155003-14339.jpg?t=st=1739709424~exp=1739713024~hmac=64c5a76d5d41ba69c067ef8c5103c6e30e0fed3dec3c0c8cd7b7879fac3f0c1c&w=360',
      description: 'Multi-functional cable machine for full body workout',
      rating: 4.9,
      inStock: true
    },
    {
      id: 5,
      name: 'Resistance Bands Set',
      price: 29.99,
      category: 'accessories',
      image: '/api/placeholder/300/200',
      description: 'Set of 5 resistance bands with different strengths',
      rating: 4.6,
      inStock: true
    },
    {
      id: 6,
      name: 'Foam Roller',
      price: 24.99,
      category: 'accessories',
      image: '/api/placeholder/300/200',
      description: 'High-density foam roller for muscle recovery',
      rating: 4.5,
      inStock: true
    }
  ];

  // Simulate loading with a timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    : products.filter(product => product.category === selectedCategory && product.price >= priceRange[0] && product.price <= priceRange[1]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen pt-40 bg-black text-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0  backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg bg-black/50 border-2 border-zinc-800 focus:border-[#faa307] focus:outline-none text-white placeholder-zinc-500"
                />
                <Search className="absolute left-3 top-2.5 text-zinc-400 h-5 w-5" />
              </div>
              <button className="relative p-3 rounded-lg bg-black/50 hover:bg-[#faa307]/10 border-2 border-zinc-800 hover:border-[#faa307] transition-all duration-300">
                <ShoppingCart className="h-6 w-6 text-[#faa307]" />
                <span className="absolute -top-2 -right-2 bg-[#faa307] text-black rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Mobile Filter Button */}
        <button 
          className="md:hidden w-full mb-6 flex items-center justify-center gap-2 bg-zinc-900/50 p-3 rounded-lg border-2 border-zinc-800"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-5 w-5 text-[#faa307]" />
          <span>Filter Products</span>
        </button>

        {/* Categories and Price Filter */}
        <div className={`flex flex-wrap gap-3 mb-8 ${showFilters ? 'block' : 'hidden md:flex'}`}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg whitespace-nowrap transition-all duration-300 border-2 ${
                selectedCategory === category.id
                  ? 'bg-[#faa307] text-black font-bold border-[#faa307]'
                  : 'bg-black/50 text-white hover:border-[#faa307] border-zinc-800'
              }`}
            >
              {category.name}
            </button>
          ))}
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-zinc-400 mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse bg-zinc-900/50 rounded-xl border-2 border-zinc-800 h-[400px]"></div>
            ))
          ) : (
            filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="group relative bg-zinc-900/50 rounded-xl border-2 border-zinc-800 hover:border-[#faa307] transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#faa307] truncate">{product.name}</h3>
                    <div className="flex items-center gap-1 text-[#faa307]">
                      <Star className="h-4 w-4 fill-[#faa307]" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      product.inStock 
                        ? 'bg-green-500/20 text-green-500' 
                        : 'bg-red-500/20 text-red-500'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <button 
                    className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                      product.inStock
                        ? 'bg-[#faa307] text-black hover:bg-[#faa307]/90'
                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-zinc-900/90 rounded-xl border-2 border-zinc-800 max-w-2xl w-full p-6 relative">
            <button 
              className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all duration-300"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="h-5 w-5 text-[#faa307]" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#faa307] mb-4">{selectedProduct.name}</h2>
                <p className="text-zinc-400 mb-4">{selectedProduct.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">${selectedProduct.price.toFixed(2)}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    selectedProduct.inStock 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-red-500/20 text-red-500'
                  }`}>
                    {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <button 
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    selectedProduct.inStock
                      ? 'bg-[#faa307] text-black hover:bg-[#faa307]/90'
                      : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                  }`}
                  disabled={!selectedProduct.inStock}
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Cart Button */}
    
    </div>
  );
}