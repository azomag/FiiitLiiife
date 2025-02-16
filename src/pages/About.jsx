/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
   Dumbbell, 
 Users2, BarChart3,  ArrowRight, 
  CheckCircle,  Phone, Globe, Shield, Zap, 
  Brain, Apple, Calendar, Video 
} from 'lucide-react';

// Reusable Animated Component
const SlideIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// Feature Card Component
const FeatureCard = ({ feature, isActive, onClick }) => (
  <motion.div
    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
      isActive 
        ? 'bg-[#faa307] text-black'
        : 'border-2 border-[#faa307] hover:bg-[#faa307]/20'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center gap-4">
      <feature.icon className="w-6 h-6 flex-shrink-0" />
      <h4 className="text-xl font-bold">{feature.title}</h4>
    </div>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 space-y-2"
        >
          <p>{feature.description}</p>
          <ul className="mt-4 space-y-2">
            {feature.details.map((detail, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-2"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// Benefit Card Component
const BenefitCard = ({ benefit }) => (
  <motion.div 
    className="border-2 border-[#faa307] rounded-xl p-6 hover:bg-[#faa307]/10 transition-all duration-300 group"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-[#faa307]/20 rounded-lg group-hover:bg-[#faa307]/30 transition-colors">
        <benefit.icon className="w-6 h-6 text-[#faa307]" />
      </div>
      <h4 className="text-xl font-bold">{benefit.title}</h4>
    </div>
    <p className="text-gray-300 group-hover:text-white">{benefit.description}</p>
  </motion.div>
);

const PlatformDescription = () => {
  const [activeFeature, setActiveFeature] = useState('training');

  const platformFeatures = {
    training: {
      icon: Dumbbell,
      title: "Intelligent Training System",
      description: "Our AI-powered training system adapts to your progress, goals, and preferences in real-time.",
      details: [
        "Dynamic workout adjustments based on performance",
        "Real-time form correction with computer vision",
        "Personalized progression algorithms",
        "Custom workout plan generation"
      ]
    },
    nutrition: {
      icon: Apple,
      title: "Smart Nutrition Planning",
      description: "Comprehensive nutrition tracking and meal planning tailored to your fitness goals.",
      details: [
        "AI-powered meal recommendations",
        "Macro and micronutrient tracking",
        "Restaurant menu guidance",
        "Hydration monitoring"
      ]
    },
    community: {
      icon: Users2,
      title: "Community Engagement",
      description: "Connect, compete, and celebrate with a global community of fitness enthusiasts.",
      details: [
        "Global fitness challenges",
        "Social progress sharing",
        "Virtual training groups",
        "Community achievements"
      ]
    },
    coaching: {
      icon: Brain,
      title: "Expert Coaching",
      description: "Access to world-class trainers and specialists for personalized guidance.",
      details: [
        "1-on-1 virtual coaching",
        "Expert video libraries",
        "Live technique reviews",
        "Specialized programs"
      ]
    }
  };

  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book classes, schedule personal training, and manage your fitness calendar with ease."
    },
    {
      icon: Video,
      title: "Virtual Training",
      description: "Access hundreds of on-demand workouts and live streaming sessions from anywhere."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Comprehensive analytics and progress visualization to keep you motivated."
    }
  ];

  return (
    <div className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#faa307]/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <SlideIn delay={0.2}>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#faa307] to-amber-200 bg-clip-text text-transparent">
              The Complete Fitness Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of fitness with our comprehensive digital ecosystem designed to transform every aspect of your wellness journey.
            </p>
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <SlideIn delay={0.4}>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border-2 border-[#faa307]/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#faa307]/10 to-transparent" />
              <video 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover"
                poster="/assets/platform-preview.jpg"
              >
                <source src="https://videocdn.cdnpk.net/videos/1bb2747a-84e3-5763-b57d-d5496b6012d2/vertical/previews/clear/large.mp4?token=exp=1739107530~hmac=75788c9314c1c6ca78bac6026ab3c22b353160c3f595adbc9d6818f4ad9ce9b5" type="video/mp4" />
              </video>
            </div>
          </SlideIn>

          <SlideIn delay={0.6}>
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  Revolutionary <span className="text-[#faa307]">AI-Powered</span> Technology
                </h3>
                <p className="text-lg text-gray-300">
                  FiitLife combines cutting-edge artificial intelligence with expert fitness knowledge to deliver a truly personalized fitness experience. Our platform learns from your performance, adapts to your needs, and guides you toward your goals with unprecedented precision.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Privacy-First Design" },
                  { icon: Zap, text: "Real-Time Analytics" },
                  { icon: Globe, text: "Available Worldwide" },
                  { icon: Phone, text: "Cross-Platform Support" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 text-gray-300 hover:text-white"
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-5 h-5 text-[#faa307] flex-shrink-0" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <SlideIn delay={0.4}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">
                Core Platform <span className="text-[#faa307]">Features</span>
              </h3>
              
              <div className="space-y-4">
                {Object.entries(platformFeatures).map(([key, feature]) => (
                  <FeatureCard
                    key={key}
                    feature={feature}
                    isActive={activeFeature === key}
                    onClick={() => setActiveFeature(key)}
                  />
                ))}
              </div>
            </div>
          </SlideIn>

          <SlideIn delay={0.6}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">
                Additional <span className="text-[#faa307]">Benefits</span>
              </h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <BenefitCard key={index} benefit={benefit} />
                ))}
              </div>
            </div>
          </SlideIn>
        </div>

        <SlideIn delay={0.8}>
          <div className="text-center">
            <motion.button 
              className="bg-gradient-to-r from-[#faa307] to-amber-500 text-black px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl hover:shadow-[#faa307]/30 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </SlideIn>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <PlatformDescription />
    </div>
  );
};

export default AboutPage;