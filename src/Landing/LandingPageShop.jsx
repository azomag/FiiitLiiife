/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPageShop() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slideInterval = useRef(null);
  
  // Expanded promo images - using your actual image URLs plus two more placeholders
  const promoImages = [
    "https://i.shgcdn.com/18d9d754-748e-4575-9a84-1d10806c46e0/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    "https://www.powergym.fr/modules//smartblog/images/197-single-default.jpg",
    "https://www.ironmaster.com/blog-assets/supps_web_800x.jpg",
    
  ];
  
  // Slide descriptions and titles
  const slides = [
    {
      title: "ELEVATE YOUR FITNESS",
      description: "Transform your workout with our top-quality gear",
      ctaText: "SHOP EQUIPMENT"
    },
    {
      title: "PREMIUM WORKOUTS",
      description: "Professional-grade routines for every fitness level",
      ctaText: "EXPLORE PROGRAMS"
    },
    {
      title: "NUTRITION ESSENTIALS",
      description: "Fuel your performance with premium supplements",
      ctaText: "SHOP SUPPLEMENTS"
    },
    
  ];

  // Setup auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === promoImages.length - 1 ? 0 : prev + 1));
      }, 2500); // Change slide every 5 seconds
    }
    
    // Cleanup on component unmount or when isPlaying changes
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isPlaying, promoImages.length]);
  
  // Pause autoplay when user manually changes slides
  const handleManualSlideChange = (action) => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    action();
    
    // Resume autoplay after 10 seconds of inactivity if it was playing
    if (isPlaying) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === promoImages.length - 1 ? 0 : prev + 1));
      }, 2500);
    }
  };
  
  const nextSlide = () => {
    handleManualSlideChange(() => {
      setCurrentSlide((prev) => (prev === promoImages.length - 1 ? 0 : prev + 1));
    });
  };
  
  // const prevSlide = () => {
  //   handleManualSlideChange(() => {
  //     setCurrentSlide((prev) => (prev === 0 ? promoImages.length - 1 : prev - 1));
  //   });
  // };
  
  const goToSlide = (index) => {
    handleManualSlideChange(() => {
      setCurrentSlide(index);
    });
  };
  
  // const togglePlayPause = () => {
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div className="relative lg:grid lg:place-items-center  pt-10 h-screen bg-black">
      {/* Main swiper container */}
      <div className="relative lg:h-[500px] lg:w-[80%] lg:rounded-2xl  h-full overflow-hidden">
        {/* Slides */}
        <div className="h-full w-full flex flex-col items-center justify-center">
          {promoImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute w-full h-full transition-all duration-700 ${
                currentSlide === index 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <img 
                src={image} 
                alt={`Fitness Promo ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              
              {/* Content overlay with animation */}
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white p-4">
                <div className={`transform transition-all duration-700 ${
                  currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <h2 className="text-4xl font-bold mb-2 md:text-5xl lg:text-5xl text-center">
                    {slides[index]?.title || "FITNESS EXCELLENCE"}
                  </h2>
                  <p className="text-xl mb-6  text-center md:text-sm text-yellow-400">
                    {slides[index]?.description || "Level up your fitness journey today"}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/shop" 
                      className="bg-yellow-600 hover:bg-yellow-500 text-white py-4 px-8 rounded-full text-sm font-bold transition-all duration-300 text-center transform "
                    >
                      {slides[index]?.ctaText || "SHOP NOW"}
                    </Link>
                    <Link 
                      to="/About" 
                      className="bg-transparent border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-white py-4 px-8 rounded-full text-sm font-bold transition-all duration-300 text-center transform "
                    >
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows with enhanced styling */}
        {/* <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-600 text-white p-3 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-600 text-white p-3 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
         */}
        {/* Play/Pause button */}
        {/* <button 
          onClick={togglePlayPause}
          className="absolute right-4 top-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
         */}
        {/* Enhanced slide indicators */}
        
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 z-10">
          <div 
            className="h-full bg-yellow-600 transition-all duration-300"
            style={{ 
              width: `${(currentSlide + 1) / promoImages.length * 100}%`,
              transition: isPlaying ? 'width 5s linear' : 'width 0.5s ease-out'
            }}
          />
        </div>
      </div>
    </div>
  );
}