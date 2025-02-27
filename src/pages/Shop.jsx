import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Filter, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

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
        image: 'https://img.freepik.com/free-photo/view-rows-dumbbells_1339-4865.jpg?t=st=1740648376~exp=1740651976~hmac=4ffe39ac695603e9ae87ea25f59be0f91a260e4342413c2a367b7095160edf8b&w=1060',
        description: 'Adjustable weights from 5-52.5 lbs',
        rating: 4.8,
        inStock: true
    },
    {
        id: 2,
        name: 'Commercial Treadmill',
        price: 1999.99,
        category: 'cardio',
        image: 'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114175.jpg',
        description: 'Professional grade treadmill with 15% incline',
        rating: 4.9,
        inStock: true
    },
    {
        id: 3,
        name: 'Olympic Barbell',
        price: 199.99,
        category: 'weights',
        image: 'https://img.freepik.com/free-vector/sport-metal-barbell-rack_1284-58534.jpg',
        description: '20kg Olympic barbell with knurling',
        rating: 4.7,
        inStock: false
    },
    {
        id: 4,
        name: 'Cable Machine',
        price: 2499.99,
        category: 'machines',
        image: 'https://img.freepik.com/free-photo/woman-training-gym_23-2148024361.jpg?t=st=1740649383~exp=1740652983~hmac=0f764a1a1ce918667f48710b9c99a4539d9e20530aa6733cb29962131beebabb&w=360',
        description: 'Multi-functional cable machine for full body workout',
        rating: 4.9,
        inStock: true
    },
    {
        id: 5,
        name: 'Resistance Bands Set',
        price: 29.99,
        category: 'accessories',
        image: 'https://img.freepik.com/free-photo/handsome-man-training-summer-park_1157-25770.jpg?t=st=1740648715~exp=1740652315~hmac=8875316d90e8d9163717ed705b5a0340888179a0509214216dce1b4afdb839b4&w=360',
        description: 'Set of 5 resistance bands with different strengths',
        rating: 4.6,
        inStock: true
    },
    {
        id: 6,
        name: 'Foam Roller',
        price: 24.99,
        category: 'accessories',
        image: 'https://img.freepik.com/free-photo/pleased-unshaven-male-holds-rolled-fitness-mat-satisfied-after-yoga-class_273609-30319.jpg?t=st=1740648437~exp=1740652037~hmac=ee96760ec9eca89f3c59f8a518149433f5e83c03f076db7c377f285de612762d&w=1060',
        description: 'High-density foam roller for muscle recovery',
        rating: 4.5,
        inStock: true
    },
    {
        id: 7,
        name: 'Kettlebell Set',
        price: 149.99,
        category: 'weights',
        image: 'https://img.freepik.com/free-vector/barbells-dumbbells-fitness-realistic-composition-with-isolated-image-dumbbell-classic-shape-vector-illustration_1284-66963.jpg?t=st=1740649215~exp=1740652815~hmac=cf71a5b05ab60c71195299286335f35873cd4df2123237e3adb70408956ba522&w=740',
        description: 'Set of 3 kettlebells (10lb, 20lb, 30lb)',
        rating: 4.7,
        inStock: true
    },
    {
        id: 8,
        name: 'Rowing Machine',
        price: 1299.99,
        category: 'cardio',
        image: 'https://img.freepik.com/free-photo/man-using-press-machine-fitness-club_155003-2294.jpg?t=st=1740649292~exp=1740652892~hmac=d250c1c8095886b99eff52b4ebfac9b5526dd05dc6137415ee1f12279991cc41&w=1060',
        description: 'Smooth and quiet magnetic resistance rowing machine',
        rating: 4.8,
        inStock: true
    },
    {
        id: 9,
        name: 'Medicine Ball Set',
        price: 89.99,
        category: 'accessories',
        image: 'https://img.freepik.com/free-photo/attractive-fit-man-working-out-indoors-with-exercise-ball_23-2149175366.jpg?t=st=1740649489~exp=1740653089~hmac=cb0d2caad61657378da3d8e8a1a52cf3e4dd91fa4fdcc2abbf966d5e572bc482&w=1060',
        description: 'Set of 3 medicine balls (5lb, 10lb, 15lb)',
        rating: 4.6,
        inStock: true
    },
    {
        id: 10,
        name: 'Pull-Up Bar',
        price: 59.99,
        category: 'accessories',
        image: 'https://img.freepik.com/free-photo/back-view-muscular-topless-male-athlete-showing-calisthenic-moves-hanging-pullbar_346278-1570.jpg?t=st=1740649579~exp=1740653179~hmac=a4646c04087be62c484eb259895ef7e5bd5e087a3c9a05d1af55269212f4f7d3&w=1060',
        description: 'Doorway pull-up bar with adjustable grip positions',
        rating: 4.7,
        inStock: true
    },
    {
        id: 11,
        name: 'Battle Ropes',
        price: 129.99,
        category: 'accessories',
        image: 'https://img.freepik.com/free-photo/ropes-caucasian-professional-sportsman-training-white-studio_155003-30091.jpg?t=st=1740649672~exp=1740653272~hmac=e92fa9c86d80e8d784fbc124a77c23f36efdbcbcc88e52b215a1c80963999368&w=1060',
        description: 'Heavy-duty battle ropes for strength training',
        rating: 4.8,
        inStock: true
    },
    {
        id: 12,
        name: 'Spin Bike',
        price: 899.99,
        category: 'cardio',
        image: 'https://img.freepik.com/free-photo/beautiful-sporty-young-woman-doing-exercise-gym_1301-6609.jpg?t=st=1740649831~exp=1740653431~hmac=a2055f5aec807f25a689153596fd3b6f8c1f9cbc29e91ea102a98f7b62e768b3&w=360',
        description: 'Indoor cycling bike with adjustable resistance',
        rating: 4.9,
        inStock: false
    },
    {
        id: 13,
        name: 'Weight Bench',
        price: 199.99,
        category: 'weights',
        image: 'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114151.jpg?t=st=1740649877~exp=1740653477~hmac=a37fab1c76d52907313e3f6648603b89010a9984f7112a602b6679c38cc61ced&w=1060',
        description: 'Adjustable weight bench for strength training',
        rating: 4.6,
        inStock: true
    },
    {
        id: 14,
        name: 'Jump Rope',
        price: 19.99,
        category: 'accessories',
        image: 'https://img.freepik.com/free-photo/young-female-exercising-with-jumping-rope_23-2149127323.jpg?t=st=1740649745~exp=1740653345~hmac=3dca53068effe7c76c9968d637f9a268edd8e2aae0b027d10af58e5319b7e5d0&w=360',
        description: 'Adjustable speed jump rope for cardio workouts',
        rating: 4.5,
        inStock: true
    },
    {
        id: 15,
        name: 'Yoga Mat',
        price: 39.99,
        category: 'accessories',
        image: 'https://img.freepik.com/free-photo/woman-with-yoga-mat-home_1303-28729.jpg?t=st=1740650091~exp=1740653691~hmac=838c55563661d52ca94c6f485f415068f5e0e62d8a5d377bc8ee5cddbbe923d1&w=1060',
        description: 'Non-slip yoga mat for home and gym workouts',
        rating: 4.7,
        inStock: true
    }
];


  // loading with a timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    : products.filter(product => product.category === selectedCategory && product.price >= priceRange[0] && product.price <= priceRange[1]);

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
    <div className="min-h-screen pt-40 bg-black text-white relative">
      {/* Navigation Bar */}
      <nav className="sticky top-0 backdrop-blur-md z-50 border-b border-zinc-800">
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
            <label className="block text-sm font-medium text-zinc-400 mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer"
            />
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
                    <h3 className="text-xl font-bold text-[#faa307] truncate">{product.name}</h3>
                    <div className="flex items-center gap-1 text-[#faa307]">
                      <Star className="h-4 w-4 fill-[#faa307]" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
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

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
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

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 mt-20 bg-black/50 backdrop-blur-sm z-50">
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