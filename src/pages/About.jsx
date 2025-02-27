import { motion } from 'framer-motion';
import { Users, Award, Dumbbell, HeartPulse, ChevronRight } from 'lucide-react';
import {Link} from "react-router-dom"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const stats = [
    { icon: <Users className="h-8 w-8" aria-hidden="true" />, value: '15+ Years', label: 'Experience' },
    { icon: <Award className="h-8 w-8" aria-hidden="true" />, value: '200+', label: 'Certified Trainers' },
    { icon: <HeartPulse className="h-8 w-8" aria-hidden="true" />, value: '1M+', label: 'Happy Clients' },
    { icon: <Dumbbell className="h-8 w-8" aria-hidden="true" />, value: '500+', label: 'Programs' },
  ];

  const coreValues = [
    { title: 'Integrity', description: 'Ethical practices and transparency in all our interactions' },
    { title: 'Innovation', description: 'Continual evolution through fitness research and technology' },
    { title: 'Community', description: 'Building supportive networks for lifelong success' },
  ];

  const testimonials = [
    {
      name: 'Mohammed',
      role: 'Fitness Enthusiast',
      quote: 'FiitLiife transformed my life! The trainers are amazing, and the community is so supportive.',
    },
    {
      name: 'Aymane ',
      role: 'Marathon Runner',
      quote: 'The programs are top-notch. I’ve never felt stronger or more confident!',
    },
    {
      name: 'Youssra',
      role: 'Yoga Practitioner',
      quote: 'The holistic approach at FiitLiife helped me achieve balance in both body and mind.',
    },
  ];

  const certifications = [
    { 
      src: 'https://www.yoancoaching.com/wp-content/uploads/2015/06/26736020_10215388645528617_1783583913_o-e1515524899477.jpg', 
      alt: 'Certificat de Coach Sportif' 
    },
    { 
      src: 'https://elearningformalis.fr/wp-content/uploads/2022/10/Certificat_Coach-Sportif_site-xs.jpg', 
      alt: 'Certification d\'Entraînement Personnel' 
    },
    { 
      src: 'https://www.mon-diplome.fr/Diplome/700-566356-Diplome-du-baccalaureat--du-meilleur-coach-sportif.jpg', 
      alt: 'Diplôme du baccalaureat Sportive' 
    },
    { 
      src: 'https://www.mon-diplome.fr/Diplome/700-997083-Diplome-du-meilleur-coach-sportif.jpg', 
      alt: 'Diplôme Coach Sportive' 
    },
  ];

  return (
    <section className="relative py-40 min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Animated Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full bg-black">
          
          <div className="absolute inset-0 " />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#faa307]/10 via-orange-500/10 to-[#ffc42d]/10"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.div 
            variants={itemVariants}
            className="mb-6 inline-block rounded-full bg-[#faa307]/20 px-4 py-2 text-sm font-semibold text-orange-400"
          >
            Since 2008, Transforming Lives
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            More Than Just a{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-[#faa307] via-orange-500 to-[#ffc42d] bg-clip-text text-transparent">
                Gym
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-orange-400/20 via-orange-500/20 to-red-600/20 blur-lg" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl"
          >
            At FiitLife, we’ve been redefining fitness excellence for over a decade. What started as a small training studio has grown into a global movement dedicated to holistic wellness. Our philosophy centers on sustainable transformation through science-backed methods and compassionate coaching.
          </motion.p>

          {/* Mission and Promise */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 grid gap-8 sm:grid-cols-2"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              <p className="mt-4 text-gray-300">
                To empower every individual to discover their strength, both physical and mental, through personalized fitness journeys and a supportive global community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Our Promise</h3>
              <p className="mt-4 text-gray-300">
                Cutting-edge facilities, world-class trainers, and innovative programs that adapt to your evolving fitness needs at every life stage.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="group relative rounded-2xl bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-[#faa307]/10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 rounded-2xl border border-white/10 transition-colors group-hover:border-orange-400/30" />
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-[#faa307]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Values */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 border-t border-white/10 pt-12"
          >
            <h2 className="text-3xl font-bold text-white">Core Values</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {coreValues.map((value, index) => (
                <div key={index} className="rounded-xl p-6 transition-all hover:bg-white/5">
                  <h3 className="text-xl font-semibold text-[#faa307]">{value.title}</h3>
                  <p className="mt-3 text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 border-t border-white/10 pt-12"
          >
            <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
            <div className="mt-8 space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-xl bg-white/5 p-6 backdrop-blur-lg">
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-[#faa307]">
                    {testimonial.name} - {testimonial.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 border-t border-white/10 pt-12"
          >
            <h2 className="text-3xl font-bold  text-white">Certifications & Partnerships</h2>
            <div className="mt-8 grid lg:grid-cols-3 grid-cols-1 place-items-center gap-9">
              {certifications.map((cert, index) => (
                <img 
                  key={index}
                  src={cert.src}
                  alt={cert.alt}
                  className="h-52 w-auto rounded-md opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex "
          >
            <Link to="/signup" className="flex items-center gap-2 mb-10 rounded-full bg-[#faa307] px-5 py-3 text-sm font-semibold text-white transition-all  hover:scale-105">
              Join Us Today <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

     
    </section>
  );
}