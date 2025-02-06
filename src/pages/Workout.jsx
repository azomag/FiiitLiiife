/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Search, Clock, Flame, Dumbbell, Target } from 'lucide-react';

const workoutData = {
  home: [
    { id: 1, title: "Chest Workout", subtitle: "For all levels", image: "/imgWorkout/chest.jpg", duration: "45 min", difficulty: "Beginner", calories: "300-400", equipment: "None" },
    { id: 2, title: "Back Workout", subtitle: "For all levels", image: "/imgWorkout/Back.jpg", duration: "40 min", difficulty: "Intermediate", calories: "250-350", equipment: "Resistance bands" },
    { id: 3, title: "Shoulder Workout", subtitle: "For all levels", image: "/imgWorkout/shoulders.jpg", duration: "30 min", difficulty: "Beginner", calories: "200-300", equipment: "Light dumbbells" },
    { id: 4, title: "Biceps Workout", subtitle: "For all levels", image: "/imgWorkout/arm.jpg", duration: "25 min", difficulty: "Intermediate", calories: "150-250", equipment: "Resistance bands" },
    { id: 5, title: "Triceps Workout", subtitle: "For all levels", image: "/imgWorkout/Tricepes.jpg", duration: "25 min", difficulty: "Beginner", calories: "150-250", equipment: "None" },
    { id: 6, title: "Abs Workout", subtitle: "For all levels", image: "/imgWorkout/abs.jpg", duration: "20 min", difficulty: "Advanced", calories: "150-200", equipment: "Mat" },
    { id: 7, title: "Legs Workout", subtitle: "For all levels", image: "/imgWorkout/leg.jpg", duration: "50 min", difficulty: "Intermediate", calories: "400-500", equipment: "None" },
  ],
  gym: [
    { id: 8, title: "Chest Workout", subtitle: "Equipment needed", image: "/imgWorkout/chest.jpg", duration: "60 min", difficulty: "Intermediate", calories: "400-500", equipment: "Full gym" },
    { id: 9, title: "Back Workout", subtitle: "Equipment needed", image: "/imgWorkout/Back.jpg", duration: "55 min", difficulty: "Advanced", calories: "350-450", equipment: "Full gym" },
    { id: 10, title: "Shoulder Workout", subtitle: "Equipment needed", image: "/imgWorkout/shoulders.jpg", duration: "45 min", difficulty: "Intermediate", calories: "300-400", equipment: "Full gym" },
    { id: 11, title: "Biceps Workout", subtitle: "Equipment needed", image: "/imgWorkout/arm.jpg", duration: "35 min", difficulty: "Intermediate", calories: "200-300", equipment: "Full gym" },
    { id: 12, title: "Triceps Workout", subtitle: "Equipment needed", image: "/imgWorkout/Tricepes.jpg", duration: "35 min", difficulty: "Advanced", calories: "200-300", equipment: "Full gym" },
    { id: 13, title: "Abs Workout", subtitle: "Equipment needed", image: "/imgWorkout/abs.jpg", duration: "30 min", difficulty: "Intermediate", calories: "200-250", equipment: "Full gym" },
    { id: 14, title: "Legs Workout", subtitle: "Equipment needed", image: "/imgWorkout/leg.jpg", duration: "65 min", difficulty: "Advanced", calories: "500-600", equipment: "Full gym" },
  ]
};

const DifficultyBadge = ({ difficulty }) => {
  const colors = {
    Beginner: "bg-green-500",
    Intermediate: "bg-yellow-500",
    Advanced: "bg-red-500"
  };

  return (
    <span className={`${colors[difficulty]} px-2 py-1 rounded-full text-xs font-medium text-white`}>
      {difficulty}
    </span>
  );
};

const SearchBar = ({ value, onChange }) => (
  <div className="relative w-full max-w-md">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    <input
      type="text"
      placeholder="Search workouts..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-10 pr-4 py-2 bg-white/10 border border-[#faa307] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#faa307] focus:border-transparent placeholder-gray-500 transition-all"
    />
  </div>
);

const FilterButtons = ({ selectedFilter, onFilterChange }) => {
  const filters = ["All", "Beginner", "Intermediate", "Advanced"];
  return (
    <div className="flex items-center gap-4">
      <Filter size={20} className="text-[#faa307]" />
      <div className="flex gap-2 p-1 bg-white/10 rounded-lg">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedFilter === filter
                ? "bg-[#faa307] text-white"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

const WorkoutCard = ({ workout, onClick }) => (
  <div 
    className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-white/5 border border-[#faa307]/30 rounded-lg"
    onClick={onClick}
  >
    <div className="relative h-48">
      <img
        className="w-full h-full object-cover"
        src={workout.image}
        alt={workout.title}
        loading="lazy"
      />
      <div className="absolute top-2 right-2">
        <DifficultyBadge difficulty={workout.difficulty} />
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-white">{workout.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{workout.subtitle}</p>
      <div className="grid grid-cols-2 gap-y-2">
        <div className="flex items-center gap-2 text-gray-300">
          <Clock size={16} />
          <span className="text-sm">{workout.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Flame size={16} />
          <span className="text-sm">{workout.calories} cal</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Target size={16} />
          <span className="text-sm">{workout.difficulty}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Dumbbell size={16} />
          <span className="text-sm">{workout.equipment}</span>
        </div>
      </div>
    </div>
  </div>
);

const WorkoutSection = ({ title, workouts, onCardClick }) => (
  <section className="space-y-6 animate-fadeIn">
    <h2 className="font-manrope font-bold text-3xl text-white flex items-center gap-2">
      <Dumbbell className="text-[#faa307]" />
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          onClick={() => onCardClick(workout.id)}
        />
      ))}
    </div>
  </section>
);

export default function Workout() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const filteredWorkouts = useMemo(() => {
    const filterWorkouts = (workouts) => {
      return workouts.filter((workout) => {
        const matchesSearch = workout.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDifficulty = difficultyFilter === "All" || workout.difficulty === difficultyFilter;
        return matchesSearch && matchesDifficulty;
      });
    };

    return {
      home: filterWorkouts(workoutData.home),
      gym: filterWorkouts(workoutData.gym)
    };
  }, [searchQuery, difficultyFilter]);

  const handleCardClick = (id) => {
    navigate(`/WorkoutDetails/${id}`);
  };

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterButtons selectedFilter={difficultyFilter} onFilterChange={setDifficultyFilter} />
        </div>

        <div className="space-y-16">
          {filteredWorkouts.home.length > 0 || filteredWorkouts.gym.length > 0 ? (
            <>
            {filteredWorkouts.gym.length > 0 && (
                <WorkoutSection 
                  title="Gym Workouts" 
                  workouts={filteredWorkouts.gym}
                  onCardClick={handleCardClick}
                />
              )}
              {filteredWorkouts.home.length > 0 && (
                
                <WorkoutSection 
                  title="Home Workouts" 
                  workouts={filteredWorkouts.home}
                  onCardClick={handleCardClick}
                />
              )}
              
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No workouts found matching your criteria</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setDifficultyFilter("All");
                }}
                className="mt-4 text-[#faa307] hover:text-[#faa307]/80 transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}