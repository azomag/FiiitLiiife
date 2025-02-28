import { motion } from 'framer-motion';
import { Users, Award, Dumbbell, HeartPulse, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

export default function About() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };
  
  // Data arrays
  const stats = [
    { icon: <Users size={18} />, value: '15+', label: 'Years' },
    { icon: <Award size={18} />, value: '200+', label: 'Trainers' },
    { icon: <HeartPulse size={18} />, value: '1M+', label: 'Clients' },
    { icon: <Dumbbell size={18} />, value: '500+', label: 'Programs' }
  ];

  const pillars = [
    { title: "Expert Training", description: "World-class certified coaches" },
    { title: "Science-Backed", description: "Research-driven methodology" },
    { title: "Community", description: "Supportive fitness network" }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative lg:h-screen py-20 lg:py-0 w-full flex flex-col bg-gray-900 text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black "></div>
        
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col px-5 lg:px-10 h-full">
        

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row h-full">
          {/* Left Column - About Information */}
          <motion.div variants={fadeIn} className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
            <div className="max-w-xl mx-auto md:mx-0">
              <motion.span variants={fadeIn} className="inline-block px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full mb-4">
                Empowering Lives Since 2008
              </motion.span>
              
              <motion.h1 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Fitness</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-sm md:text-base text-gray-300 mb-6">
                FiitLife is more than a gym - we're a movement dedicated to transformative wellness. 
                Through personalized coaching and a supportive community, we help you achieve 
                sustainable results and discover your true potential.
              </motion.p>
              
              {/* Core Stats - Responsive Grid */}
              <motion.div variants={fadeIn} className="grid grid-cols-4 gap-2 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center">
                    <div className="text-orange-400 flex justify-center mb-1">{stat.icon}</div>
                    <div className="text-lg font-bold leading-tight">{stat.value}</div>
                    <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
              
              {/* Three Pillars */}
              <motion.div variants={fadeIn} className="grid grid-cols-3 gap-3 mb-6">
                {pillars.map((pillar, index) => (
                  <div key={index} className="bg-white/10 p-3 rounded-lg border border-yellow-600">
                    <h3 className="text-sm font-semibold text-orange-400 mb-1">{pillar.title}</h3>
                    <p className="text-xs text-gray-300">{pillar.description}</p>
                  </div>
                ))}
              </motion.div>
              
              {/* CTA Button */}
              <motion.div variants={fadeIn}>
                <Link to="/programmes" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white font-medium text-sm hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                  Explore Programs <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Testimonials Card */}
          <motion.div variants={fadeIn} className="w-full  md:w-1/2 p-4 md:p-8 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Testimonial Card */}
              <motion.div 
                variants={fadeIn}
                className="bg-black/40 backdrop-blur-sm hover:border-yellow-500 duration-500 rounded-xl p-6 border border-white/10"
              >
                <h2 className="text-xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 text-sm mb-6">
                  To empower individuals to discover their strength, both physical and mental, 
                  through innovative fitness solutions and a supportive global community that celebrates
                  every step of the wellness journey.
                </p>
                
                {/* Client Quote */}
                <div className="bg-white/10 rounded-lg p-4 border-l-2 border-yellow-600">
                  <p className="text-gray-300 text-sm italic mb-3">
                    "FiitLife transformed my approach to fitness. In just three months, I've gained 
                    strength, confidence, and a supportive community that keeps me motivated."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 mr-3">M</div>
                    <div>
                      <div className="text-sm font-medium">Mohammed</div>
                      <div className="text-xs text-gray-400">Member since 2020</div>
                    </div>
                  </div>
                </div>
                
                {/* Key Achievements */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-orange-400 mb-2">What Sets Us Apart</h3>
                  <ul className="text-xs text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-0.5">•</span>
                      <span>Personalized fitness journeys tailored to your goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-0.5">•</span>
                      <span>Revolutionary training methodology developed by elite coaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-0.5">•</span>
                      <span>Supportive community celebrating every milestone</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-500/40 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}