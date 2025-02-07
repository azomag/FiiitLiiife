import { useState } from 'react';
import { useParams, Navigate , Link } from "react-router-dom";
import {ArrowLeft} from "lucide-react"
import { 
  MdVerified, 
  MdHeight, 
  MdEmail, 
  MdPhone,
  MdCreditCard,
  MdLock
} from "react-icons/md";
import { 
  FaLocationDot, 
  FaWeightHanging, 
  FaInstagram, 
  FaLinkedin 
} from "react-icons/fa6";
import { FaStar, FaUser, FaBook, FaDollarSign } from "react-icons/fa";

// data trainer created by @mohamed azoumag and @zaimi ayman 
const trainers = [
  {
    "id": 1,
    "name": "Alex Turner",
    "age": 34,
    "gender": "Male",
    "certified": "CrossFit Level 2",
    "height": 182,
    "weight": 88,
    "image": "https://img.freepik.com/photos-gratuite/boxeur-masculin-posant-t-shirt-bras-croises_23-2148426241.jpg?t=st=1738926081~exp=1738929681~hmac=925346b4e6f0ac7ac5f63ec107bdff57119c0e4b6c6ca8404f66f89bf4ac9b0b&w=360",
    "location": "Germany",
    "about": "Alex is a CrossFit enthusiast and certified trainer with extensive experience in high-intensity fitness training and personalized coaching strategies.",
    "priceYear":"MAD 24000" ,
    "priceMonth":"MAD 2900",
    "priceDay":"MAD 130",
    "rating": 4.8,
    "specialties": ["CrossFit", "Strength Training", "Weight Loss"],
    "contact": {
      "email": "alex.turner@fitness.com",
      "phone": "+49 123 456 7890",
      "instagram": "@alexfitness",
      "linkedin": "/in/alexturner"
    },
    "certifications": [
      "CrossFit Level 2 Trainer",
      "Nutrition Specialist",
      "Sports Injury Prevention Certified"
    ],
    "availability": [
      { "day": "Monday", "hours": "6:00 AM - 8:00 PM" },
      { "day": "Tuesday", "hours": "6:00 AM - 8:00 PM" },
      { "day": "Wednesday", "hours": "6:00 AM - 8:00 PM" },
      { "day": "Thursday", "hours": "6:00 AM - 8:00 PM" },
      { "day": "Friday", "hours": "6:00 AM - 6:00 PM" }
    ]
  },
  {
    "id": 2,
    "name": "Lena Müller",
    "age": 31,
    "gender": "Female",
    "certified": "Precision Nutrition",
    "height": 168,
    "weight": 62,
    "image": "https://img.freepik.com/photos-gratuite/monter-femme-vue-laterale-salle-sport_23-2149445952.jpg?t=st=1738926236~exp=1738929836~hmac=0678835cd3ea9850421abe8a84f695e6ca0d9374bb8d96a2ae19fc235ae71ccf&w=360",
    "location": "Switzerland",
    "about": "Lena is a nutrition and fitness expert who combines personalized meal plans with tailored workout routines.",
    "priceYear":"MAD 21000",
    "priceMonth":"MAD 2600",
    "priceDay":"MAD 100",
    "rating": 4.9,
    "specialties": ["Nutrition Planning", "Weight Management", "Holistic Health"],
    "contact": {
      "email": "lena.muller@nutritionfit.com",
      "phone": "+41 987 654 3210",
      "instagram": "@lenafitness",
      "linkedin": "/in/lenamuller"
    },
    "certifications": [
      "Precision Nutrition Certification",
      "Certified Personal Trainer",
      "Wellness Coach"
    ],
    "availability": [
      { "day": "Monday", "hours": "7:00 AM - 6:00 PM" },
      { "day": "Tuesday", "hours": "7:00 AM - 6:00 PM" },
      { "day": "Wednesday", "hours": "7:00 AM - 6:00 PM" },
      { "day": "Thursday", "hours": "7:00 AM - 6:00 PM" },
      { "day": "Friday", "hours": "7:00 AM - 5:00 PM" }
    ]
  },
  {
    "id": 3,
    "name": "Raj Patel",
    "age": 37,
    "gender": "Male",
    "certified": "ACE, TRX",
    "height": 175,
    "weight": 75,
    "image": "https://img.freepik.com/photos-gratuite/jeune-adulte-faisant-du-sport-salle-salle-sport_23-2149205542.jpg?uid=R136738766&ga=GA1.1.1997047304.1736807927",
    "location": "Italy",
    "about": "Raj is a versatile trainer specializing in bodyweight exercises and TRX suspension training.",
    "priceYear":"MAD 19000",
    "priceMonth":"MAD 2300",
    "priceDay":"MAD 95",
    "rating": 4.7,
    "specialties": ["Bodyweight Training", "TRX Suspension", "Functional Fitness"],
    "contact": {
      "email": "raj.patel@fitnesspro.com",
      "phone": "+39 456 789 1234",
      "instagram": "@rajpatelfit",
      "linkedin": "/in/rajpatel"
    },
    "certifications": [
      "ACE Certified Trainer",
      "TRX Master Trainer",
      "Mobility & Flexibility Coach"
    ],
    "availability": [
      { "day": "Monday", "hours": "6:00 AM - 7:00 PM" },
      { "day": "Tuesday", "hours": "6:00 AM - 7:00 PM" },
      { "day": "Wednesday", "hours": "6:00 AM - 7:00 PM" },
      { "day": "Thursday", "hours": "6:00 AM - 7:00 PM" },
      { "day": "Friday", "hours": "6:00 AM - 5:00 PM" }
    ]
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "age": 32,
    "gender": "Female",
    "certified": "ACSM",
    "height": 165,
    "weight": 60,
    "image": "https://img.freepik.com/photos-gratuite/coup-moyen-fit-woman-at-gym_23-2149445949.jpg?uid=R136738766&ga=GA1.1.1997047304.1736807927",
    "location": "Australia",
    "about": "Emily is a passionate fitness trainer with over 10 years of experience. She specializes in strength training and weight loss programs. Her goal is to help clients achieve their fitness goals in a healthy and sustainable way.",
    "priceYear":"MAD 20000",
    "priceMonth":"MAD 2400",
    "priceDay":"MAD 90",
    "rating": 4.7,
    "specialties": ["Strength Training", "Weight Loss"],
    "contact": {
      "email": "emily.davis@fittrainer.com",
      "phone": "+61 123 456 789",
      "instagram": "@emilyfitness",
      "linkedin": "/in/emilydavis"
    },
    "certifications": [
      "ACSM Certified Trainer",
      "Strength Training Specialist"
    ],
    "availability": [
      { "day": "Monday", "hours": "8:00 AM - 7:00 PM" },
      { "day": "Tuesday", "hours": "8:00 AM - 7:00 PM" },
      { "day": "Wednesday", "hours": "8:00 AM - 7:00 PM" },
      { "day": "Thursday", "hours": "8:00 AM - 7:00 PM" },
      { "day": "Friday", "hours": "8:00 AM - 6:00 PM" }
    ]
  },
  {
    "id": 5,
    "name": "Carlos Martinez",
    "age": 40,
    "gender": "Male",
    "certified": "NSCA",
    "height": 178,
    "weight": 78,
    "image": "https://img.freepik.com/photos-gratuite/homme-fort-cloture_144627-8479.jpg?t=st=1738926461~exp=1738930061~hmac=d667bbdb9a629035ce355684eec83f45d8810755a92eaf67d70d1aae5022c444&w=360",
    "location": "Spain",
    "about": "Carlos is a seasoned fitness coach with a focus on functional training and injury prevention. He has worked with athletes and individuals of all fitness levels, helping them improve their performance and overall health.",
    "priceYear":"MAD 23000",
    "priceMonth":"MAD 2800",
    "priceDay":"MAD 120",
    "rating": 4.9,
    "specialties": ["Functional Training", "Injury Prevention"],
    "contact": {
      "email": "carlos.martinez@fitpro.com",
      "phone": "+34 987 654 321",
      "instagram": "@carlosfitness",
      "linkedin": "/in/carlosmartinez"
    },
    "certifications": [
      "NSCA Certified Personal Trainer",
      "Sports Performance Specialist"
    ],
    "availability": [
      { "day": "Monday", "hours": "9:00 AM - 8:00 PM" },
      { "day": "Tuesday", "hours": "9:00 AM - 8:00 PM" },
      { "day": "Wednesday", "hours": "9:00 AM - 8:00 PM" },
      { "day": "Thursday", "hours": "9:00 AM - 8:00 PM" },
      { "day": "Friday", "hours": "9:00 AM - 6:00 PM" }
    ]
  },
  {
    "id": 6,
    "name": "Sophie Brown",
    "age": 29,
    "gender": "Female",
    "certified": "NASM",
    "height": 160,
    "weight": 55,
    "image": "https://img.freepik.com/photos-gratuite/smiley-fit-woman-at-gym-coup-moyen_23-2149445951.jpg?uid=R136738766&ga=GA1.1.1997047304.1736807927",
    "location": "France",
    "about": "Sophie is a certified yoga and Pilates instructor with a holistic approach to fitness. She believes in the power of mindfulness and movement to transform the body and mind. Her classes are designed to improve flexibility, strength, and mental well-being.",
    "priceYear":"MAD 18000",
    "priceMonth":"MAD 2200",
    "priceDay":"MAD 85",
    "rating": 4.6,
    "specialties": ["Yoga", "Pilates", "Mindfulness"],
    "contact": {
      "email": "sophie.brown@holisticfit.com",
      "phone": "+33 123 456 789",
      "instagram": "@sophiefitness",
      "linkedin": "/in/sophiebrown"
    },
    "certifications": [
      "NASM Certified Personal Trainer",
      "Yoga Instructor",
      "Pilates Instructor"
    ],
    "availability": [
      { "day": "Monday", "hours": "8:00 AM - 6:00 PM" },
      { "day": "Tuesday", "hours": "8:00 AM - 6:00 PM" },
      { "day": "Wednesday", "hours": "8:00 AM - 6:00 PM" },
      { "day": "Thursday", "hours": "8:00 AM - 6:00 PM" },
      { "day": "Friday", "hours": "8:00 AM - 5:00 PM" }
    ]
  }
];
const PersonalTrainerDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const trainer = trainers.find((t) => t.id === parseInt(id));

  if (!trainer) {
    return <Navigate to="/PersonalTrainer" replace />;
  }

  const handleSubscribeClick = (pkg) => {
    setSelectedPackage(pkg);
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your payment processor
    console.log('Processing payment:', {
      package: selectedPackage,
      paymentDetails
    });
    setShowPaymentForm(false);
    alert('Payment processed successfully!');
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">{trainer.about}</p>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#faa307]">Specialties</h3>
              <div className="flex flex-wrap gap-3">
                {trainer.specialties.map((specialty) => (
                  <span 
                    key={specialty} 
                    className="bg-white/10 px-4 py-2 rounded-full text-sm text-[#faa307] font-medium hover:bg-[#faa307]/20 transition-colors"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      case 'certifications':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-[#faa307]">Professional Certifications</h3>
            <ul className="space-y-4">
              {trainer.certifications.map((cert) => (
                <li 
                  key={cert} 
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-[#faa307]/20 transition-colors"
                >
                  <FaBook className="text-[#faa307] text-xl" />
                  <span className="text-gray-300">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'availability':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-[#faa307]">Weekly Availability</h3>
            <div className="grid gap-3">
              {trainer.availability.map((slot) => (
                <div 
                  key={slot.day} 
                  className="bg-white/10 p-4 rounded-lg flex justify-between items-center hover:bg-[#faa307]/20 transition-colors border-l-4 border-[#faa307]"
                >
                  <span className="font-medium text-gray-300">{slot.day}</span>
                  <span className="text-gray-400">{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'pricing':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-[#faa307]">Training Packages</h3>
            <div className="grid grid-cols-1 cursor-pointer md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Daily Session", 
                  price: trainer.priceDay, 
                  description: "Perfect for trial sessions or single-day intensive training",
                  bgClass: "bg-white/10"
                },
                { 
                  title: "Monthly Plan", 
                  price: trainer.priceMonth , 
                  description: "Best value for regular training with nutrition planning included",
                  bgClass: "bg-white/10"
                },
                { 
                  title: "Annual Membership", 
                  price: trainer.priceYear, 
                  description: "Full-year commitment with all premium benefits and discounts",
                  bgClass: "bg-white/10"
                }
              ].map((pkg) => (
                <div 
                  key={pkg.title} 
                  className={`${pkg.bgClass} p-6 rounded-xl border-2 border-[#faa307]/30 hover:border-[#faa307] transition-colors`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FaDollarSign className="text-[#faa307]" />
                    <h4 className="text-lg font-bold text-gray-300">{pkg.title}</h4>
                  </div>
                  <p className="text-3xl font-bold text-[#faa307] mb-2">{pkg.price}</p>
                  <p className="text-gray-400">{pkg.description}</p>
                  <button 
                    onClick={() => handleSubscribeClick(pkg)}
                    className="mt-4 w-full bg-[#faa307] text-black py-2 rounded-lg hover:bg-[#faa307]/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen pt-36 bg-black py-12 px-4 sm:px-6 lg:px-8 text-white">
            <Link to="/PersonalTrainer " className='flex items-center pb-10 pl-20'> <ArrowLeft className="mr-2" size={20} /> Back to Trainers</Link>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 lg:gap-12">
        
        {/* Trainer Image Section */}
        
        <div className="w-full md:w-1/3 relative group">
          <img 
            className="w-full h-auto object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 border-4 border-[#faa307]/20 hover:border-[#faa307]/50"
            src={trainer.image} 
            alt={trainer.name} 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 rounded-b-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="flex items-center gap-2 text-xl font-bold">
                  <FaStar className="text-[#faa307]" /> 
                  <span className="text-white">{trainer.rating}</span>
                </p>
                <p className="text-gray-300 text-xs">Overall Rating</p>
              </div>
              <span className="bg-[#faa307] text-black px-3 py-1 rounded-full text-xs font-bold">PRO TRAINER</span>
            </div>
          </div>
        </div>

        {/* Trainer Details Section */}
        <div className="flex-1 w-full md:w-2/3 space-y-6">
          {/* Header Section */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                  {trainer.name}
                  <MdVerified className="text-[#faa307] w-6 h-6 md:w-7 md:h-7" />
                </h1>
                <p className="text-base md:text-lg text-gray-400 mt-2">{trainer.certified}</p>
              </div>
              <div className="flex items-center gap-4">
                <a href={`mailto:${trainer.contact.email}`} className="p-2 bg-white/10 rounded-lg hover:bg-[#faa307] transition-colors">
                  <MdEmail className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href={`tel:${trainer.contact.phone}`} className="p-2 bg-white/10 rounded-lg hover:bg-[#faa307] transition-colors">
                  <MdPhone className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {[
                { icon: <FaUser className="text-[#faa307] text-xl" />, 
                  text: `${trainer.gender}, ${trainer.age} years` },
                { icon: <FaLocationDot className="text-[#faa307] text-xl" />, 
                  text: trainer.location },
                { icon: <MdHeight className="text-[#faa307] text-xl" />, 
                  text: `${trainer.height} cm` },
                { icon: <FaWeightHanging className="text-[#faa307] text-xl" />, 
                  text: `${trainer.weight} kg` }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                  {item.icon}
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs Section */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 border-b border-white/10">
              {['about', 'certifications', 'availability', 'pricing'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs md:text-sm font-medium capitalize rounded-t-lg transition-colors ${
                    activeTab === tab 
                      ? 'bg-[#faa307] text-black' 
                      : 'text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 rounded-xl p-6 shadow-xl">
              {renderContent()}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a 
              href={`https://instagram.com/${trainer.contact.instagram}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-[#faa307] transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
            <a 
              href={trainer.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-[#faa307] transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentForm && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
          <div className="bg-white/10 rounded-xl p-8 max-w-md w-full backdrop-blur-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MdCreditCard className="text-[#faa307]" />
              Payment Details
            </h2>
            
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Card Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#faa307]"
                  value={paymentDetails.name}
                  onChange={(e) => setPaymentDetails({...paymentDetails, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Card Number</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9\s]{13,19}"
                  required
                  className="w-full bg-white/5 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#faa307]"
                  placeholder="4242 4242 4242 4242"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Expiry Date</label>
                  <input
                    type="text"
                    pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                    placeholder="MM/YY"
                    required
                    className="w-full bg-white/5 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#faa307]"
                    value={paymentDetails.expiry}
                    onChange={(e) => setPaymentDetails({...paymentDetails, expiry: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">CVC</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d{3}"
                    required
                    className="w-full bg-white/5 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#faa307]"
                    placeholder="123"
                    value={paymentDetails.cvc}
                    onChange={(e) => setPaymentDetails({...paymentDetails, cvc: e.target.value})}
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowPaymentForm(false)}
                  className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#faa307] text-black hover:bg-[#faa307]/90 rounded-lg flex items-center justify-center gap-2"
                >
                  <MdLock className="w-5 h-5" />
                  Pay {selectedPackage?.price}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalTrainerDetails;