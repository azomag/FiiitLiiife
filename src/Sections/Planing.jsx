import React, { useState } from 'react';

const MembershipPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(2); // Default to Pro plan
  const [timeFrame, setTimeFrame] = useState('monthly'); // 'monthly' or 'yearly'
  
  const plans = [
    {
      id: 1,
      name: "Starter",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        "Access to basic workout library",
        "Diet plan templates",
        "Community forum access",
        "Mobile app access",
        "Progress tracking tools"
      ],
      color: "bg-gradient-to-bl from-white/10 to-black"
    },
    {
      id: 2,
      name: "Pro",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      featured: true,
      features: [
        "Full workout library access",
        "Custom diet plans",
        "Live weekly group sessions",
        "Progress tracking tools",
        "1 personal training session/month",
        "Priority support",
        "Fitness assessment tools"
      ],
      color: "bg-gradient-to-br from-white/10 to-[#faa307]/40"
    },
    {
      id: 3,
      name: "Elite",
      monthlyPrice: 39.99,
      yearlyPrice: 399.99,
      features: [
        "Everything in Pro plan",
        "4 personal training sessions/month",
        "Advanced analytics dashboard",
        "Nutritionist consultation",
        "Custom workout program creation",
        "24/7 support access",
        "Exclusive member events",
        "Early access to new features"
      ],
      color: "bg-gradient-to-br from-white/10 to-black"
    }
  ];

  const features = [
    {
      id: 1,
      title: "Expert Trainers",
      description: "Work with certified professionals who personalize your experience and provide 1-on-1 coaching tailored to your specific goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
      )
    },
    {
      id: 2,
      title: "Progress Tracking",
      description: "Advanced analytics monitor performance trends with visual dashboards showing your improvements over time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Nutrition Guidance",
      description: "Personalized meal plans created by registered dietitians to complement your workout routine and maximize results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      )
    },
    {
      id: 4,
      title: "Custom Workouts",
      description: "AI-powered workout recommendations that adapt as you progress, ensuring continuous challenge and results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <polyline points="16 6 12 2 8 6"></polyline>
          <line x1="12" y1="2" x2="12" y2="15"></line>
        </svg>
      )
    },
    {
      id: 5,
      title: "Equipment Guidance",
      description: "Expert advice on home gym setup and equipment selection to maximize your workout efficiency regardless of your space.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: "Community Events",
      description: "Virtual and in-person challenges, competitions, and group workouts to keep you engaged and motivated.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Video Background */}
        

      {/* Plan Toggle Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-12">
            <div className="w-full md:w-8/12 lg:w-6/12 px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Elevate Your Fitness</h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the plan that matches your ambition
              </p>
              
              {/* Monthly/Yearly Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className={`text-lg mr-4 ${timeFrame === 'monthly' ? 'text-[#faa307] font-bold' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <div 
                  className="relative w-16 h-8 bg-white/20 rounded-full cursor-pointer"
                  onClick={() => setTimeFrame(timeFrame === 'monthly' ? 'yearly' : 'monthly')}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-[#faa307] rounded-full top-1 transition-all duration-300 ${
                      timeFrame === 'yearly' ? 'left-9' : 'left-1'
                    }`}
                  ></div>
                </div>
                <span className={`text-lg ml-4 ${timeFrame === 'yearly' ? 'text-[#faa307] font-bold' : 'text-gray-400'}`}>
                  Yearly <span className="text-xs text-green-400 ml-1">Save 20%</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="flex flex-wrap justify-center">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`w-full md:w-4/12 px-4 mb-8 transition-all duration-500 ${
                  selectedPlan === plan.id ? 'transform scale-105 z-10' : 'opacity-90 scale-100 hover:opacity-100'
                }`}
              >
                <div 
                  className={`relative rounded-xl overflow-hidden ${plan.color} shadow-xl h-full ${
                    selectedPlan === plan.id ? 'ring-2 ring-[#faa307]' : ''
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.featured && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-[#faa307] text-black text-xs font-bold px-4 py-1 rounded-bl-lg uppercase">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="px-6 py-8 bg-white/10  h-full">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-[#faa307]">
                        ${timeFrame === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-300 ml-2">
                        /{timeFrame === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="text-[#faa307] mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-4 rounded-lg font-bold tracking-wider text-sm uppercase transition-all duration-300 ${
                      selectedPlan === plan.id 
                        ? 'bg-[#faa307] text-black hover:bg-[#faa307]/90' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}>
                      {selectedPlan === plan.id ? 'Get Started Now' : 'Select Plan'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Money back guarantee */}
          <div className="text-center mt-8">
            <p className="text-gray-400 inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-[#faa307]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              30-day money-back guarantee. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section - Improved */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The FiitLife Advantage</h2>
              <div className="w-16 h-1 bg-[#faa307] mx-auto mb-6"></div>
              <p className="text-xl text-gray-300">
                Revolutionary fitness technology combined with expert coaching
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap">
            {features.map((feature) => (
              <div key={feature.id} className="w-full md:w-6/12 lg:w-4/12 px-4 mb-12">
                <div className="bg-white/10 rounded-xl p-8 h-full transform transition-all duration-300 hover:translate-y-2 hover:bg-white/20">
                  <div className="text-[#faa307] mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#faa307]/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-3/12 px-4 mb-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-[#faa307] mb-2">98%</h3>
                <p className="text-lg text-gray-300">Member Satisfaction</p>
              </div>
            </div>
            <div className="w-full md:w-3/12 px-4 mb-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-[#faa307] mb-2">500+</h3>
                <p className="text-lg text-gray-300">Workout Videos</p>
              </div>
            </div>
            <div className="w-full md:w-3/12 px-4 mb-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-[#faa307] mb-2">50k+</h3>
                <p className="text-lg text-gray-300">Active Members</p>
              </div>
            </div>
            <div className="w-full md:w-3/12 px-4 mb-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-[#faa307] mb-2">24/7</h3>
                <p className="text-lg text-gray-300">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default MembershipPage;