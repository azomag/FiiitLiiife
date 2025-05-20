import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Filter, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import  LandingPageShop  from '../Landing/LandingPageShop';
export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // Added search query state
  const productsPerPage = 8;


  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'supplements', name: 'Supplements' },
    { id: 'health', name: 'Health' },
    { id: 'protein', name: 'Protein' },
    
  ];

  const products = [
    {
        id: 1,
        name: 'Micronized Creatine Powder | Unflavoured | 250 g',
        price: 450.99,
        category: 'supplements',
        image: 'https://cdn.staticans.com/image/tr:e-sharpen-01,h-712,w-712,cm-pad_resize/data/Optimum-Nutrition/8-Feb-2023/1118952_1.jpg',
        description: 'Supports muscle strength, power, and recovery.',
        rating: 4.8,
        inStock: true
    },
    {
        id: 2,
        name: 'Gold Standard 100% Whey Protein | Chocolate | 2 lbs',
        price: 590.99,
        category: 'protein',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02861/l/53.jpg',
        description: '24g of premium whey protein per serving for muscle support.',
        rating: 4.9,
        inStock: true
    },
    {
        id: 3,
        name: 'BCAA Powder | Amino Energy | 30 Servings',
        price: 340.99,
        category: 'supplements',
        image: 'https://i5.walmartimages.com/seo/Evlution-Nutrition-BCAA-Energy-Amino-Acid-Pre-Workout-Powder-30-Servings-Rocket-Pop_173fc204-5493-4c8f-a7f2-1b5fd4795db3.aaf081828225f780040e8dd7a4b6350d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
        description: 'Supports endurance and recovery during workouts.',
        rating: 4.7,
        inStock: true 
    },
    {
        id: 4,
        name: 'Mass Gainer | High Calorie Protein | 6 lbs',
        price: 790.99,
        category: 'protein',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/rul/rul00436/g/24.jpg',
        description: 'High-calorie protein formula for muscle gain.',
        rating: 4.9,
        inStock: true
    },
    {
        id: 5,
        name: 'Pre-Workout Powder | Energy & Focus | 30 Servings',
        price: 390.99,
        category: 'supplements',
        image: 'https://i5.walmartimages.com/seo/Animal-Fury-Pre-Workout-Powder-Supplement-for-Energy-and-Focus-Blue-Raspberry-30-Servings_3f01c940-dfcd-425a-90f5-fcd4c354ba41.bcfe2dcc8c7ce9228f9d501051d573af.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
        description: 'Boosts energy, focus, and endurance for intense workouts.',
        rating: 4.6,
        inStock: true
    },
    {
        id: 6,
        name: 'Multivitamin for Athletes | 120 Capsules',
        price: 290.99,
        category: 'health',
        image: 'https://www.penco.cz/en/upload/1003241-1109566801_v.jpg',
        description: 'Essential vitamins and minerals for overall wellness.',
        rating: 4.5,
        inStock: false 
    },
    {
        id: 7,
        name: 'Fish Oil | Omega-3 Fatty Acids | 200 Softgels',
        price: 240.99,
        category: 'health',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01652/g/68.jpg',
        description: 'Supports heart and joint health.',
        rating: 4.7,
        inStock: true
    },
    {
        id: 8,
        name: 'Casein Protein | Slow-Digesting | 2 lbs',
        price: 640.99,
        category: 'protein',
        image: 'https://drnutrition.com/storage/media/yF9DJUQRLlQkKBAbAlFraWZKZNZnSP2R2HN7vz9p.jpg',
        description: 'Slow-release protein for overnight muscle recovery.',
        rating: 4.8,
        inStock: true
    },
    {
        id: 9,
        name: 'Electrolyte Powder | Hydration & Recovery | 60 Servings',
        price: 320.99,
        category: 'supplements',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/jnp/jnp06231/g/24.jpg',
        description: 'Essential electrolytes to keep you hydrated during workouts.',
        rating: 4.7,
        inStock: true
    },
    {
        id: 10,
        name: 'Collagen Peptides | Skin & Joint Health | 1 lb',
        price: 440.99,
        category: 'health',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/swv/swv11657/g/32.jpg',
        description: 'Promotes healthy skin, hair, nails, and joint support.',
        rating: 4.8,
        inStock: true
    },
    {
        id: 11,
        name: 'L-Carnitine Liquid | Fat Metabolism Support | 16 oz',
        price: 280.99,
        category: 'supplements',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00064/g/37.jpg',
        description: 'Supports fat metabolism and energy production.',
        rating: 4.6,
        inStock: false
    },
    {
        id: 12,
        name: 'Vegan Plant-Based Protein | Vanilla | 2 lbs',
        price: 540.99,
        category: 'protein',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nug/nug92202/g/2.jpg',
        description: 'Complete plant protein blend for muscle growth and recovery.',
        rating: 4.7,
        inStock: true
    },
    {
        id: 13,
        name: 'Zinc + Magnesium | Sleep & Recovery | 90 Capsules',
        price: 190.99,
        category: 'health',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02482/g/55.jpg',
        description: 'Supports sleep, recovery, and testosterone production.',
        rating: 4.6,
        inStock: true
    },
    {
        id: 14,
        name: 'Testosterone Booster | Natural Formula | 120 Capsules',
        price: 390.99,
        category: 'supplements',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cll/cll13435/g/8.jpg',
        description: 'Supports natural testosterone levels and performance.',
        rating: 4.5,
        inStock: true
    },
    {
        id: 15,
        name: 'Greens Superfood Powder | Antioxidant & Detox | 30 Servings',
        price: 490.99,
        category: 'health',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/bpu/bpu00445/g/30.jpg',
        description: 'Boosts immunity, digestion, and overall health.',
        rating: 4.7,
        inStock: true
    }
];



  // loading with a timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = (
    selectedCategory === 'all' 
      ? products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
      : products.filter(product => product.category === selectedCategory && product.price >= priceRange[0] && product.price <= priceRange[1])
  ).filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  ); 
  
  const addToCart = (product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.product.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="min-h-screen pb-40 bg-black text-white relative">
      <div className="">
        <LandingPageShop />
      </div>
      {/* Navigation Bar */}
      <nav className=" bg-black z-50 pt-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
              <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full md:w-[500px] pl-10 pr-4 py-2 rounded-full bg-black/50 border-2 border-zinc-800 focus:border-[#faa307] focus:outline-none text-white placeholder-zinc-500"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <Search className="absolute left-3 top-2.5 text-zinc-400 h-5 w-5" />
              </div>
              <button 
                className="relative p-3 rounded-lg bg-black/50 hover:bg-[#faa307]/10 border-2 border-zinc-800 hover:border-[#faa307] transition-all duration-300"
                onClick={() => setShowCart(true)}
              >
                <ShoppingCart className="h-6 w-6 text-[#faa307]" />
                <span className="absolute -top-2 -right-2 bg-[#faa307] text-black rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
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
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1);
              }}
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
            <label className="block text-sm font-medium text-zinc-400 mb-2">Price Range: MAD {priceRange[0]} - MAD {priceRange[1]}</label>
            <input
    type="range"
    min="200"
    max="1000"
    value={priceRange[1]}
    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
    className="w-[200px] h-3 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-black/90 to-[#faa307] transition-all"
    
  />
  <style>
    {`
      input[type="range"]::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        background: white;
        border: 3px solid #faa307;
        border-radius: 50%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease-in-out;
      }
      input[type="range"]::-webkit-slider-thumb:hover {
        transform: scale(1.2);
      }
      input[type="range"]::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: white;
        border: 3px solid #3b82f6;
        border-radius: 50%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease-in-out;
      }
      input[type="range"]::-moz-range-thumb:hover {
        transform: scale(1.2);
      }
    `}
  </style>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse bg-zinc-900/50 rounded-xl border-2 border-zinc-800 overflow-hidden">
                <div className="aspect-square bg-zinc-800" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-zinc-800 rounded w-3/4" />
                  <div className="h-4 bg-zinc-800 rounded w-1/2" />
                  <div className="h-6 bg-zinc-800 rounded w-1/4" />
                  <div className="h-10 bg-zinc-800 rounded" />
                </div>
              </div>
            ))
          ) : (
            paginatedProducts.map(product => (
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
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
                    }}
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white truncate">{product.name}</h3>
                    <div className="flex items-center gap-1 text-[#faa307]">
                      <Star className="h-4 w-4 fill-[#fae207]" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl text-[#faa307] font-medium">MAD {product.price.toFixed(2)}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      product.inStock 
                        ? 'bg-green-500/20 text-green-500' 
                        : 'bg-red-500/20 text-red-500'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <button 
                    className={`w-full py-3 text-sm rounded-lg font-bold transition-all duration-300 ${
                      product.inStock
                        ? 'border border-[#faa307] text-white hover:text-black hover:bg-[#faa307]/90'
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

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-20">
          <button
            className="p-2 rounded-lg bg-zinc-900/50 border-2 border-zinc-800 hover:border-[#faa307] disabled:opacity-50"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-5 w-5 text-[#faa307]" />
          </button>
          <span className="px-4 py-2 text-[#faa307] font-bold">
            Page {currentPage}
          </span>
          <button
            className="p-2 rounded-lg animate-pulse bg-zinc-900/50 border-2 border-zinc-800 hover:border-[#faa307] disabled:opacity-50"
            onClick={() => setCurrentPage(p => 
              Math.min(p + 1, Math.ceil(filteredProducts.length / productsPerPage))
  )}
            disabled={currentPage >= Math.ceil(filteredProducts.length / productsPerPage)}
          >
            <ChevronRight className="h-5 w-5 text-[#faa307]" />
          </button>
        </div>
      </main>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-zinc-900/90 rounded-xl border-2 border-zinc-800 max-w-2xl w-full p-6 relative mx-4">
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
                  <span className="text-2xl font-bold">MAD {selectedProduct.price.toFixed(2)}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    selectedProduct.inStock 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-red-500/20 text-red-500'
                  }`}>
                    {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <button 
                  className={`w-full py-3 text-sm rounded-lg font-bold transition-all duration-300 ${
                    selectedProduct.inStock
                      ? 'border border-[#faa307] text-white hover:text-black hover:bg-[#faa307]/90'
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

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]">
          <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-zinc-900/95 border-l border-zinc-800 p-6 transform transition-transform">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#faa307]">Your Cart</h2>
              <button 
                className="p-2 hover:bg-zinc-800 rounded-lg"
                onClick={() => setShowCart(false)}
              >
                <X className="h-6 w-6 text-[#faa307]" />
              </button>
            </div>
            
            {cart.length === 0 ? (
              <p className="text-zinc-400">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4 mb-6 max-h-[60vh] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-4 items-center bg-zinc-800/50 p-4 rounded-lg">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-[#faa307] truncate">{item.product.name}</h3>
                        <p className="text-zinc-400">
                          ${item.product.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                      <button 
                        className="text-red-500 hover:text-red-400 p-2"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-zinc-800 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-[#faa307]">Total:</span>
                    <span className="text-xl font-bold">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <button className="w-full py-3 bg-[#faa307] text-black font-bold rounded-lg hover:bg-[#faa307]/90 transition-all">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}