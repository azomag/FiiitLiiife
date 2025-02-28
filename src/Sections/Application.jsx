

const FiitLifeSection = () => {
  return (
    <section className="bg-black text-white py-10 px-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* App Image/Preview */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/img/application.png" className='w-[400px] object-cover' alt="" />
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Fitness Journey</h2>
            <div className="w-20 h-1 bg-amber-500 mb-6" style={{ backgroundColor: '#faa307' }}></div>
            <p className="text-gray-300 mb-6">
              FiitLife is your personal fitness companion designed to help you achieve your health goals with personalized workout plans, nutrition tracking, and real-time progress monitoring.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mr-4" style={{ backgroundColor: '#faa307' }}>
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Personalized Workouts</h3>
                  <p className="text-gray-400">AI-powered routines tailored to your fitness level and goals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mr-4" style={{ backgroundColor: '#faa307' }}>
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Nutrition Tracking</h3>
                  <p className="text-gray-400">Log meals and track macros with our extensive food database</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mr-4" style={{ backgroundColor: '#faa307' }}>
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Community Support</h3>
                  <p className="text-gray-400">Connect with like-minded fitness enthusiasts for motivation</p>
                </div>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-600 transition duration-300" style={{ backgroundColor: '#faa307' }}>
              Download Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiitLifeSection;