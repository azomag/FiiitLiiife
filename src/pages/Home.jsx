/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import img from '../assets/bg.jpg';

export default function Home() {
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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-black w-full overflow-hidden pt-10 lg:pt-0">
      {/* Background Image - Visible on all devices */}
      <div className="absolute lg:hidden flex inset-0 z-0">
        <div className="relative h-full w-full">
          <img 
            src={img}
            alt=""
            className="h-full w-full object-cover object-top"
            loading="lazy"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
      </div>

      {/* Background Video - Only visible on desktop (right 40%) */}
      <div className="absolute right-0 top-0 z-0 hidden h-[120vh] w-[60%] overflow-hidden lg:block">
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Overlay to darken video */}
        <video
          className="h-full  w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/img/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 rotat z-20 bg-gradient-to-r from-black  via-transparent to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <motion.div 
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-xl lg:max-w-2xl">
          {/* Pre-heading */}
          <motion.div 
            variants={itemVariants}
            className="mb-6 inline-block rounded-full bg-[#faa307]/20 px-4 py-2 text-sm font-semibold text-orange-400"
          >
            Welcome to the Future of Fitness
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Transform Your{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-[#faa307] via-orange-500 to-[#ffc42d] bg-clip-text text-transparent">
                Fitness Journey
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-orange-400/20 via-orange-500/20 to-red-600/20 blur-lg" />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg text-gray-300"
          >
            Join thousands who have transformed their lives through personalized workouts,
            expert coaching, and an inspiring community that supports your every step.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
          >
            <button 
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-[#ffc42d] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-orange-500/25 sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              className="group flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
            >
              Watch Demo
              <PlayCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
            </button>
          </motion.div>

          
        </div>
      </motion.div>
    </section>
  );
}