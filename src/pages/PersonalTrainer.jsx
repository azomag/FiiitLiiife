
import { MdVerified, MdHeight } from "react-icons/md";
import { FaLocationDot, FaWeightHanging } from "react-icons/fa6";
import { Link } from "react-router-dom";

// created by @mohamed azoumag and @zaimi ayman 
const trainers = [
  {
      id: 1,
      name: "Alex Turner",
      age: 34,
      gender: "Male",
      certified: "CrossFit Level 2",
      height: 182,
      weight: 88,
      image: "https://img.freepik.com/photos-gratuite/boxeur-masculin-posant-t-shirt-bras-croises_23-2148426241.jpg?t=st=1738926081~exp=1738929681~hmac=925346b4e6f0ac7ac5f63ec107bdff57119c0e4b6c6ca8404f66f89bf4ac9b0b&w=360",
      location: "Germany",
      about: "Alex is a CrossFit enthusiast and certified trainer with a passion for high-intensity workouts. He helps clients build strength, endurance, and agility through functional movements and personalized training plans.",
      priceYear: 24000,
      priceMonth: 2900,
      priceDay: 130,
      rating: 4.8
  },
  {
      id: 2,
      name: "Lena Müller",
      age: 31,
      gender: "Female",
      certified: "Precision Nutrition",
      height: 168,
      weight: 62,
      image: "https://img.freepik.com/photos-gratuite/monter-femme-vue-laterale-salle-sport_23-2149445952.jpg?t=st=1738926236~exp=1738929836~hmac=0678835cd3ea9850421abe8a84f695e6ca0d9374bb8d96a2ae19fc235ae71ccf&w=360",
      location: "Switzerland",
      about: "Lena is a nutrition and fitness expert who combines personalized meal plans with tailored workout routines. She focuses on helping clients achieve a balanced lifestyle through sustainable habits and mindful eating.",
      priceYear: 21000,
      priceMonth: 2600,
      priceDay: 100,
      rating: 4.9
  },
  {
      id: 3,
      name: "Raj Patel",
      age: 37,
      gender: "Male",
      certified: "ACE, TRX",
      height: 175,
      weight: 75,
      image: " https://img.freepik.com/photos-gratuite/jeune-adulte-faisant-du-sport-salle-salle-sport_23-2149205542.jpg?uid=R136738766&ga=GA1.1.1997047304.1736807927",
      location: "Italie",
      about: "Raj is a versatile trainer specializing in bodyweight exercises and TRX suspension training. He believes in making fitness accessible to everyone, regardless of their fitness level or equipment availability.",
      priceYear: 19000,
      priceMonth: 2300,
      priceDay: 95,
      rating: 4.7
  },
  {
      id: 4,
      name: "Emily Davis",
      age: 32,
      gender: "Female",
      certified: "ACSM",
      height: 165,
      weight: 60,
      image: "https://img.freepik.com/photos-gratuite/coup-moyen-fit-woman-at-gym_23-2149445949.jpg?uid=R136738766&ga=GA1.1.1997047304.1736807927",
      location: "Australia",
      about: "Emily is a passionate fitness trainer with over 10 years of experience. She specializes in strength training and weight loss programs. Her goal is to help clients achieve their fitness goals in a healthy and sustainable way.",
      priceYear: 20000,
      priceMonth: 2400,
      priceDay: 90,
      rating: 4.7
  },
  {
      id: 5,
      name: "Carlos Martinez",
      age: 40,
      gender: "Male",
      certified: "NSCA",
      height: 178,
      weight: 78,
      image: " https://img.freepik.com/photos-gratuite/homme-fort-cloture_144627-8479.jpg?t=st=1738926461~exp=1738930061~hmac=d667bbdb9a629035ce355684eec83f45d8810755a92eaf67d70d1aae5022c444&w=360",
      location: "Spain",
      about: "Carlos is a seasoned fitness coach with a focus on functional training and injury prevention. He has worked with athletes and individuals of all fitness levels, helping them improve their performance and overall health.",
      priceYear: 23000,
      priceMonth: 2800,
      priceDay: 120,
      rating: 4.9
  },
  {
      id: 6,
      name: "Sophie Brown",
      age: 29,
      gender: "Female",
      certified: "NASM",
      height: 160,
      weight: 55,
      image: "https://img.freepik.com/photos-gratuite/smiley-fit-woman-at-gym-coup-moyen_23-2149445951.jpg?uid=R136738766&ga=GA1.1.1997047304.1736807927",
      location: "France",
      about: "Sophie is a certified yoga and Pilates instructor with a holistic approach to fitness. She believes in the power of mindfulness and movement to transform the body and mind. Her classes are designed to improve flexibility, strength, and mental well-being.",
      priceYear: 18000,
      priceMonth: 2200,
      priceDay: 85,
      rating: 4.6
  }
];

const PersonalTrainer = () => {
  const renderRating = (rating) => {
    return "⭐".repeat(Math.floor(rating));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MAD'
    }).format(price);
  };

  return (
    <div className="w-full min-h-screen bg-black py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 flex justify-center gap-3">Our Expert <p className="text-[#faa307]">Trainers</p></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
             <Link
             to={`/PersonalTrainerDetails/${trainer.id}`}
             key={trainer.id}
             className="rounded-2xl border border-white/10 overflow-hidden transform transition-all duration-300 hover:border-[#faa307] hover:border hover:shadow-2xl hover:z-10 cursor-pointer"
           >
              <div className="relative">
                <img 
                  className="w-full object-top aspect-square object-cover" 
                  src={trainer.image} 
                  alt={trainer.name} 
                />
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">
                  {trainer.certified}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    {trainer.name}
                    <MdVerified className="text-blue-500 w-6 h-6" />
                  </h2>
                  <span className="text-yellow-400">{renderRating(trainer.rating)}</span>
                </div>

                <div className="flex items-center text-gray-400 mb-4">
                  <FaLocationDot className="text-orange-500 mr-2" />
                  <span>{trainer.location}</span>
                </div>

                <p className="text-gray-300 mb-6 line-clamp-3">{trainer.about}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center justify-between bg-black p-3 rounded-lg">
                    <span className="text-gray-400">Height</span>
                    <div className="flex items-center text-white">
                      {trainer.height} cm
                      <MdHeight className="text-orange-500 ml-2" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-black p-3 rounded-lg">
                    <span className="text-gray-400">Weight</span>
                    <div className="flex items-center text-white">
                      {trainer.weight} kg
                      <FaWeightHanging className="text-orange-500 ml-2" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-gray-400 text-sm">Daily</p>
                      <p className="text-white font-semibold">{formatPrice(trainer.priceDay)}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Monthly</p>
                      <p className="text-white font-semibold">{formatPrice(trainer.priceMonth)}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Yearly</p>
                      <p className="text-white font-semibold">{formatPrice(trainer.priceYear)}</p>
                    </div>
                  </div>
                </div>
              </div>
            
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainer;