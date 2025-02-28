

export default function Features() {
  return (
    <div className="w-full bg-black ">
      {/* Final CTA Section - Enhanced */}
      <section className="py-24 relative">
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-7/12 px-4 mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Transformation Today</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Join thousands of members who have achieved their fitness goals. Your journey to a stronger, healthier you begins now.
              </p>
              <div className="flex flex-wrap">
                <div className="flex items-center mr-8 mb-4">
                  <div className="mr-3 text-[#faa307]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">No contracts</span>
                </div>
                <div className="flex items-center mr-8 mb-4">
                  <div className="mr-3 text-[#faa307]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Cancel anytime</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-[#faa307]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">30-day guarantee</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to get started?</h3>
                <div className="mb-6">
                  <input type="text" placeholder="Your name" className="w-full bg-white/5 text-white border border-gray-700 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#faa307]" />
                  <input type="email" placeholder="Your email" className="w-full bg-white/5 text-white border border-gray-700 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#faa307]" />
                  <select className="w-full bg-white/5 text-white border border-gray-700 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#faa307]">
                    <option value="" className="bg-gray-900">Select your fitness goal</option>
                    <option value="weight-loss" className="bg-gray-900">Weight Loss</option>
                    <option value="muscle-gain" className="bg-gray-900">Muscle Gain</option>
                    <option value="endurance" className="bg-gray-900">Endurance</option>
                    <option value="overall-fitness" className="bg-gray-900">Overall Fitness</option>
                  </select>
                </div>
                <button className="w-full bg-[#faa307] text-black font-bold uppercase text-sm px-6 py-4 rounded-lg shadow-lg hover:shadow-[#faa307]/20 hover:bg-[#faa307]/90 transition-all duration-300">
                  Start Your Free Trial
                </button>
                <p className="text-xs text-gray-400 mt-4 text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
