/* eslint-disable react-hooks/exhaustive-deps */
import{ useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Programmes() {
  const navigate = useNavigate();
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [selectedIntensity, setSelectedIntensity] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const programs = [
    {
        "id": 1,
        "program_name": "Table of upper lower exercises",
        "titre": "Muscle amplification exercises program",
        "description": "A complete workout program for upper and lower body with detailed pictures.",
        "image": "https://img.freepik.com/free-photo/training-with-kettlebells_1098-13320.jpg?t=st=1738772178~exp=1738775778~hmac=b6b42e264a73677cdea897e1c1080a62765f72400f60fe42c55b5cc4360445b8&w=900",
        "prix": "FREE",
        "duration": "4 weeks",
        "intensity": "Medium"
    },
    {
        "id": 2,
        "program_name": "Table of bodybuilding exercises 6 days Split",
        "titre": "Muscle amplification exercises program",
        "description": "A 6-day split bodybuilding program to effectively target each muscle group.",
        "image": "https://img.freepik.com/free-photo/athlete-weightlifting_181624-12617.jpg?t=st=1738772235~exp=1738775835~hmac=acae4d29b94f6b41bd6ade39a93bf00aa0c0f8a02177533c74cd6ed18b0b3b93&w=900",
        "prix": "FREE",
        "duration": "6 weeks",
        "intensity": "High"
    },
    {
        "id": 3,
        "program_name": "Bodybuilding exercises schedule for beginners",
        "titre": "Muscle amplification exercises program",
        "description": "A bodybuilding program specially designed for beginners with progressive exercises.",
        "image": "https://img.freepik.com/free-photo/wellness-health-lifestyle-workout-graphic-word_53876-13880.jpg?t=st=1738772268~exp=1738775868~hmac=a422ed38984ea49e85ba487148396de843dc4474852a7aae725310f41c4ea886&w=900",
        "prix": "FREE",
        "duration": "8 weeks",
        "intensity": "Low"
    },
    {
        "id": 4,
        "program_name": "Table of exercises C bodybuilding 6 days",
        "titre": "Muscle amplification exercises program",
        "description": "A 6-day workout plan, ideal for overall muscle strengthening.",
        "image": "https://img.freepik.com/free-photo/athletic-blond-male-holds-barbell-weight-slim-fitness-female-model-dark-grey-background_613910-15939.jpg?t=st=1738772319~exp=1738775919~hmac=6b9bee393d911572576b6afaf5e6d6026968e510a26e80c0f0181969b7c617bc&w=826",
        "prix": "FREE",
        "duration": "6 weeks",
        "intensity": "High"
    },
    {
        "id": 5,
        "program_name": "Five-day bodybuilding exercises table quickly inflate muscles",
        "titre": "Muscle amplification exercises program",
        "description": "An intensive 5-day bodybuilding program for rapid muscle growth.",
        "image": "https://img.freepik.com/free-photo/athlete-working-out_1098-14447.jpg?t=st=1738772372~exp=1738775972~hmac=b63e2964f6f506212e47c227e685af56d8c376effe94d507754b5b8b96740bcb&w=900",
        "prix": "FREE",
        "duration": "5 weeks",
        "intensity": "High"
    },
    {
        "id": 6,
        "program_name": "The strongest schedule of bodybuilding exercises 4",
        "titre": "Muscle amplification exercises program",
        "description": "The most powerful 4-day workout schedule for muscle building.",
        "image": "https://img.freepik.com/photos-gratuite/jeune-sportif-puissant-s-entrainant-halteres-mur-sombre_176420-518.jpg?t=st=1738772033~exp=1738775633~hmac=80271cbe2c6b629a9442a1b9f3a5ef98ffb8bef2f51bb66b04585e003f5b1efe&w=740",
        "prix": "FREE",
        "duration": "4 weeks",
        "intensity": "Medium"
    },
    {
        "id": 7,
        "program_name": "Bodybuilding exercises schedule 5 days and muscle amplification diet",
        "titre": "Muscle amplification exercises program",
        "description": "A 5-day program combining bodybuilding exercises with a muscle-gain diet.",
        "image": "https://img.freepik.com/free-photo/front-view-woman-training-gym_23-2150289967.jpg?t=st=1738772468~exp=1738776068~hmac=5ce35cb17e4c1d22b6fee5be88bb8f75a260e7c7cfa0f6a9520f55138a60d239&w=900",
        "prix": "FREE",
        "duration": "5 weeks",
        "intensity": "Medium"
    },
    {
        "id": 8,
        "program_name": "Bodybuilding exercises table for beginners",
        "titre": "Muscle amplification exercises program",
        "description": "A beginner-friendly bodybuilding workout plan with structured exercises.",
        "image": "https://img.freepik.com/free-photo/close-up-woman-doing-crossfit-workout_23-2149080439.jpg?t=st=1738772501~exp=1738776101~hmac=6500542e42a7f6ef70a4d4732de971c062afefe0941a1cfa7d8c644c227b17d8&w=900",
        "prix": "FREE",
        "duration": "8 weeks",
        "intensity": "Low"
    },
    {
        "id": 9,
        "program_name": "Bodybuilding exercises schedule 4 days for amplification 2024",
        "titre": "Muscle amplification exercises program",
        "description": "A 4-day bodybuilding workout plan for muscle amplification in 2024.",
        "image": "https://img.freepik.com/free-photo/close-up-man-doing-crossfit-workout_23-2149080437.jpg?t=st=1738772525~exp=1738776125~hmac=545416c4c80a941277f72803b1516d5af81f371b6fdc068f522d7d016235235f&w=900",
        "prix": "FREE",
        "duration": "4 weeks",
        "intensity": "Medium"
    },
    {
        "id": 10,
        "program_name": "Bodybuilding exercises schedule 5 days to amplify 2024",
        "titre": "Muscle amplification exercises program",
        "description": "A 5-day bodybuilding training schedule to maximize muscle growth in 2024.",
        "image": "https://img.freepik.com/free-photo/man-gym-weightlifting_181624-11444.jpg?t=st=1738772568~exp=1738776168~hmac=bb8a661e44622a51f3e91096fcf5082b79d66d5719d0ef192829dad55f79eace&w=900",
        "prix": "FREE",
        "duration": "5 weeks",
        "intensity": "High"
    },
    {
        "id": 11,
        "program_name": "Bodybuilding exercises schedule for beginners 5 days 2024",
        "titre": "Muscle amplification exercises program",
        "description": "A beginner's 5-day bodybuilding workout schedule for muscle development in 2024.",
        "image": "https://img.freepik.com/free-photo/man-leaning-bench-press-machine_23-2147688222.jpg?t=st=1738771840~exp=1738775440~hmac=299f9b38eec16dabdf7dd440d154da8f064ab484f94c4ea681c6a404e9169c85&w=900",
        "prix": "FREE",
        "duration": "6 weeks",
        "intensity": "Medium"
    },
    {
        "id": 12,
        "program_name": "The best bodybuilding exercises schedule 3 days 2024",
        "titre": "Programme d'exercices de renforcement musculaire",
        "description": "The best 3-day bodybuilding workout plan for muscle gain in 2024.",
        "image": "https://img.freepik.com/free-photo/gym-handsome-man-workout_144627-6218.jpg?t=st=1738771858~exp=1738775458~hmac=fda9a26335a1254775c11e6621c7e6094aabd9c77d18dca60dfa080ad47e8289&w=900",
        "prix": "FREE",
        "duration": "3 weeks",
        "intensity": "Medium"
    },
    {
        "id": 13,
        "program_name": "Bodybuilding exercises 2024 for all levels",
        "titre": "Site section",
        "description": "A bodybuilding exercise program suitable for all fitness levels in 2024.",
        "image": "https://img.freepik.com/free-photo/man-with-dumbbell_144627-11522.jpg?t=st=1738772670~exp=1738776270~hmac=7f467925e192f31853d7571b683809eee1bddc9da140a07696f54623aef0fccc&w=740",
        "prix": "FREE",
        "duration": "6 weeks",
        "intensity": "Medium"
    },
    {
        "id": 14,
        "program_name": "Chest exercises 2023: Huge chest muscle now",
        "titre": "Chest muscle exercises",
        "description": "A chest workout program for developing a massive chest in 2023.",
        "image": "https://img.freepik.com/free-photo/young-man-lifting-weights-gym_23-2148353083.jpg?t=st=1738772854~exp=1738776454~hmac=28f2eb996955995bb192708e15c17cd65a1925cf36cb1ada419cd6dc50665d7a&w=900",
        "prix": "FREE",
        "duration": "4 weeks",
        "intensity": "High"
    },
    {
        "id": 15,
        "program_name": "Back exercises to amplify 2023",
        "titre": "Back muscle exercises",
        "description": "A back workout program to strengthen and grow back muscles in 2023.",
        "image": "https://img.freepik.com/photos-gratuite/jeune-sportif-puissant-s-entrainant-halteres-mur-sombre_176420-514.jpg?t=st=1738772613~exp=1738776213~hmac=a40537fc81393a91ad6bfeea18711330df995dd67153efe729f686200ffdc045&w=740",
        "prix": "FREE",
        "duration": "5 weeks",
        "intensity": "Medium"
    },
    {
        "id": 16,
        "program_name": "The most powerful photo-trips exercises for the year 2023",
        "titre": "Triceps exercises",
        "description": "The most powerful triceps workout program with step-by-step images for 2023.",
        "image": "https://img.freepik.com/photos-gratuite/homme-barbu-serviette-au-milieu-halteres_23-2147687593.jpg?t=st=1738772728~exp=1738776328~hmac=9e79f5f628ca1c0f4528ce9834073d921d01461d933dc817948f933c96a61e26&w=740",
        "prix": "FREE",
        "duration": "4 weeks",
        "intensity": "High"
    },
    {
        "id": 17,
        "program_name": "Bodybuilding exercises 2023: for all levels",
        "titre": "Site section",
        "description": "A bodybuilding workout program designed for all fitness levels in 2023.",
        "image": "https://img.freepik.com/free-photo/people-working-out-indoors-together-with-weights_23-2149175355.jpg?t=st=1738773141~exp=1738776741~hmac=53a51ae39ad584bd255a5c79638a3abb5e9320779ada97c68b39392d7cee03b4&w=900",
        "prix": "FREE",
        "duration": "6 weeks",
        "intensity": "Medium"
    },
    {
        "id": 18,
        "program_name": "Back exercises in order with pictures 2023",
        "titre": "Back muscle exercises",
        "description": "A structured back workout program with step-by-step images for 2023.",
        "image": "https://img.freepik.com/photos-gratuite/gros-plan-entrainement-athletes_23-2150845460.jpg?t=st=1738772339~exp=1738775939~hmac=409281cba2d8eed4cfe615da03d5ffa071668478cae778dcdd7333347251169e&w=740",
        "prix": "FREE",
        "duration": "5 weeks",
        "intensity": "Medium"
    },
    {
        "id": 19,
        "program_name": "Back shoulder exercises to amplify 2024",
        "titre": "Shoulders",
        "description": "A shoulder and back workout program for muscle growth in 2024.",
        "image": "https://img.freepik.com/photos-gratuite/homme-fort-cloture_144627-8474.jpg?t=st=1738771979~exp=1738775579~hmac=50d7123822ff5cef96bde6d8143ec2d305fc1cdbeefc9f1463e58b5e8f69a90f&w=740",
        "prix": "FREE",
        "duration": "4 weeks",
        "intensity": "Medium"
    },
    {
        "id": 20,
        "program_name": "The best back exercises in the gym",
        "titre": "Back muscle exercises",
        "description": "The best gym workout program for back muscle development.",
        "image": "https://img.freepik.com/free-photo/strong-man-fence-with-chains_144627-8463.jpg?t=st=1738773075~exp=1738776675~hmac=45799f7ae2c4957783c2ffa3c93440506d49218d9785cec1ea8842db7a6c175d&w=900",
        "prix": "FREE",
        "duration": "6 weeks",
        "intensity": "High"
    }
];

  // Extract unique intensity and duration values
  const intensityOptions = ['All', ...new Set(programs.map(p => p.intensity))];
  const durationOptions = ['All', ...new Set(programs.map(p => p.duration))];

  // Filtering logic
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesIntensity = selectedIntensity === 'All' || program.intensity === selectedIntensity;
      const matchesDuration = selectedDuration === 'All' || program.duration === selectedDuration;
      const matchesSearch = program.program_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             program.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesIntensity && matchesDuration && matchesSearch;
    });
  }, [selectedIntensity, selectedDuration, searchTerm]);

  return (
    <div className="w-full min-h-screen text-white py-20 bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center my-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-b from-orange-500 to-[#faa307] bg-clip-text text-transparent">
            Fitness Revolution Programs
          </h2>
          <p className="text-gray-300 text-lg">
            Transformative fitness experiences tailored to your ultimate potential
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Search Input */}
          <div className="w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search programs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 outline-none bg-white/10 border border-white/20 rounded-full text-white  focus:ring-[#faa307]"
            />
          </div>

          {/* Intensity Filter */}
          <select 
            value={selectedIntensity}
            onChange={(e) => setSelectedIntensity(e.target.value)}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none"
          >
            {intensityOptions.map(intensity => (
              <option key={intensity} style={{color:"white",background:"black", border:"none",}}  value={intensity}>{intensity} Intensity</option>
            ))}
          </select>

          {/* Duration Filter */}
          <select 
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white outine-none"
          >
            {durationOptions.map(duration => (
              <option  key={duration} style={{color:"white",background:"black", border:"none",}}  value={duration}>{duration} Duration</option>
            ))}
          </select>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div 
                key={program.id}
                onClick={() => navigate(`/program/${program.id}`)}
                onMouseEnter={() => setHoveredProgram(program.id)}
                onMouseLeave={() => setHoveredProgram(null)}
                className={`relative group rounded-2xl p-7 transition-all duration-300 
                  ${hoveredProgram === program.id 
                    ? 'bg-white/10 shadow-2xl transform border-2 border-[#faa307]' 
                    : 'border-2 border-white/10'}
                  cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-[#faa307] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="h-full flex flex-col">
                  <div className="mb-4">
                    <img src={program.image} className='rounded-xl h-[260px] object-cover' alt={program.program_name} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-[#faa307] text-start">{program.program_name}</h3>
                  <p className="text-gray-400 mb-4 text-sm flex-grow text-start">{program.titre}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 text-sm">Duration:</span>
                      <span className="text-white text-sm">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 text-sm">Intensity:</span>
                      <span className={`
                        ${program.intensity === 'High' ? 'text-red-500 text-xs bg-white/10 px-3 py-1 rounded-full ' : 
                          program.intensity === 'Medium' ? 'text-yellow-500 text-xs bg-white/10 px-3 py-1 rounded-full ' : 
                          'text-green-500 text-xs bg-white/10 px-3 py-1 rounded-full'}
                      `}>
                        {program.intensity}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-4">
                    <span className="text-green-500 font-medium px-3 py-1 rounded-full text-md">
                      {program.prix} $
                    </span>
                    <button className="px-4 py-2 bg-[#faa307] text-black rounded-lg hover:opacity-90 transition-opacity font-bold">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p className="text-2xl mb-4">No programs found😥</p>
            <p>Type another Programs</p>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8 text-gray-400">
          {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''} found
        </div>
      </div>
    </div>
  );
}