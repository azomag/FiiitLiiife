import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';


export default function Contact() {
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

  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, value: 'fiitlifecontact@gmail.com', label: 'Email' },
    { icon: <Phone className="h-6 w-6" />, value: '+212 612-345-678', label: 'Phone' },
    { icon: <MapPin className="h-6 w-6" />, value: '234 Avenue Hassan II, Agdal, Rabat 10090, Maroc', label: 'Address' },
  ];

  return (
    <section className="relative py-40 min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Animated Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full bg-black">
          
          <div className="absolute inset-0 " />
          <motion.div 
            className="absolute inset-0 "
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
            className="mb-6 mt-6 inline-block rounded-full bg-[#faa307]/20 px-4 py-2 text-sm font-semibold text-orange-400"
          >
            Get in Touch With Us
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Contact{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-[#faa307] via-orange-500 to-[#ffc42d] bg-clip-text text-transparent">
                FiitLife
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-orange-400/20 via-orange-500/20 to-red-600/20 blur-lg" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl"
          >
            We’re here to help! Whether you have questions about our programs, need assistance, or just want to say hello, feel free to reach out.
          </motion.p>

          {/* Contact Information */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="rounded-xl bg-white/5 p-6 backdrop-blur-lg">
                <div className="flex items-center gap-3">
                  <div className="text-[#faa307]">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{info.label}</h3>
                    <p className="mt-1 text-gray-300">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
            <form className="mt-8 mb-5 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faa307]" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faa307]" 
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faa307] min-h-[150px]" 
              />
              <button 
                type="submit" 
                className="flex items-center gap-2 rounded-full bg-[#faa307] px-6 py-3 text-sm font-semibold text-white transition-all  hover:scale-105"
              >
                Send Message <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}