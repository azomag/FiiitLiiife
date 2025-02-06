/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const workoutData = 
  [
    {
      "id": 1,
      "title": "Chest Workout",
      "video": "https://www.youtube.com/embed/ZB4ru6VyU4Y",
      "description": "Build a stronger chest with these effective exercises.",
      "duration": "50 minutes",
      "difficulty": "Intermediate",
      "calories": "350-450",
      "equipment": ["Barbell", "Dumbbells", "Bench"],
      "exercises": [
          {
              "name": "Bench Press",
              "sets": "4",
              "reps": "8",
              "notes": "Keep your back flat on the bench"
          },
          {
              "name": "Push-ups",
              "sets": "3",
              "reps": "12",
              "notes": "Maintain a straight body line"
          },
          {
              "name": "Dumbbell Flyes",
              "sets": "3",
              "reps": "10",
              "notes": "Control the movement, avoid locking elbows"
          }
      ],
      "muscles": {
          "primary": ["Pectorals"],
          "secondary": ["Triceps", "Shoulders"]
      },
      "tips": [
          "Warm up your chest with light weights",
          "Focus on full range of motion",
          "Rest 60-90 seconds between sets"
      ]
  },
  {
        "id": 2,
        "title": "Back Workout",
        "video": "https://www.youtube.com/embed/NXtlO8IBoVU",
        "description": "Strengthen your back with these effective exercises.",
        "duration": "50 minutes",
        "difficulty": "Intermediate",
        "calories": "350-450",
        "equipment": ["Barbell", "Dumbbells"],
        "exercises": [
            {
                "name": "Deadlifts",
                "sets": "4",
                "reps": "6",
                "notes": "Keep your back straight, engage your core"
            },
            {
                "name": "Pull-ups",
                "sets": "3",
                "reps": "10",
                "notes": "Use a full range of motion"
            },
            {
                "name": "Bent-over Rows",
                "sets": "3",
                "reps": "8",
                "notes": "Keep your back flat, avoid arching"
            }
        ],
        "muscles": {
            "primary": ["Latissimus Dorsi", "Trapezius"],
            "secondary": ["Rhomboids", "Erector Spinae"]
        },
        "tips": [
            "Warm up your lower back with light stretches",
            "Focus on proper form to avoid injury",
            "Rest 90 seconds between sets"
        ]
    },
    {
        "id": 3,
        "title": "Shoulder Workout",
        "video": "https://www.youtube.com/embed/C3JIpg8tYnE",
        "description": "Strengthen your shoulders with these effective exercises.",
        "duration": "45 minutes",
        "difficulty": "Intermediate",
        "calories": "300-400",
        "equipment": ["Dumbbells", "Resistance bands"],
        "exercises": [
            {
                "name": "Warm-up Rotations",
                "sets": "2",
                "reps": "1 minute each direction",
                "notes": "Perform slow, controlled movements"
            },
            {
                "name": "Overhead Press",
                "sets": "3",
                "reps": "10",
                "notes": "Keep core tight, maintain straight back"
            },
            {
                "name": "Side Lateral Raises",
                "sets": "3",
                "reps": "12",
                "notes": "Control the descent, avoid swinging"
            },
            {
                "name": "Front Raises",
                "sets": "3",
                "reps": "12",
                "notes": "Alternate arms, maintain steady pace"
            }
        ],
        "muscles": {
            "primary": ["Deltoids", "Trapezius"],
            "secondary": ["Rotator cuffs", "Core"]
        },
        "tips": [
            "Stay hydrated throughout the workout",
            "Focus on form over weight",
            "Rest 60-90 seconds between sets"
        ]
    },
    
    {
        "id": 4,
        "title": "Biceps Workout",
        "video": "https://www.youtube.com/embed/vOYPZgVS31Y",
        "description": "Target your biceps with these effective exercises.",
        "duration": "40 minutes",
        "difficulty": "Beginner",
        "calories": "200-300",
        "equipment": ["Dumbbells", "Barbell"],
        "exercises": [
            {
                "name": "Bicep Curls",
                "sets": "3",
                "reps": "12",
                "notes": "Keep elbows close to your body"
            },
            {
                "name": "Hammer Curls",
                "sets": "3",
                "reps": "10",
                "notes": "Use a neutral grip"
            },
            {
                "name": "Concentration Curls",
                "sets": "3",
                "reps": "10",
                "notes": "Focus on isolating the biceps"
            }
        ],
        "muscles": {
            "primary": ["Biceps"],
            "secondary": ["Forearms"]
        },
        "tips": [
            "Avoid swinging your body",
            "Use controlled movements",
            "Rest 60 seconds between sets"
        ]
    },
    {
        "id": 5,
        "title": "Triceps Workout",
        "video": "https://www.youtube.com/embed/3i8X4MioO7A",
        "description": "Strengthen your triceps with these effective exercises.",
        "duration": "45 minutes",
        "difficulty": "Intermediate",
        "calories": "300-400",
        "equipment": ["Dumbbells", "Cable Machine"],
        "exercises": [
            {
                "name": "Tricep Dips",
                "sets": "3",
                "reps": "10",
                "notes": "Keep your body upright"
            },
            {
                "name": "Overhead Tricep Extension",
                "sets": "3",
                "reps": "12",
                "notes": "Use a controlled motion"
            },
            {
                "name": "Cable Pushdowns",
                "sets": "3",
                "reps": "12",
                "notes": "Focus on squeezing the triceps"
            }
        ],
        "muscles": {
            "primary": ["Triceps"],
            "secondary": ["Shoulders"]
        },
        "tips": [
            "Warm up your elbows with light weights",
            "Avoid locking your elbows",
            "Rest 60-90 seconds between sets"
        ]
    },
    {
        "id": 6,
        "title": "Abdominal Workout",
        "video": "https://www.youtube.com/embed/p30MacT85ak",
        "description": "Strengthen your core with these effective exercises.",
        "duration": "30 minutes",
        "difficulty": "Beginner",
        "calories": "150-250",
        "equipment": ["Mat"],
        "exercises": [
            {
                "name": "Crunches",
                "sets": "3",
                "reps": "15",
                "notes": "Engage your core, avoid pulling your neck"
            },
            {
                "name": "Plank",
                "sets": "3",
                "duration": "30 seconds",
                "notes": "Keep your body in a straight line"
            },
            {
                "name": "Leg Raises",
                "sets": "3",
                "reps": "12",
                "notes": "Control the movement, avoid swinging"
            }
        ],
        "muscles": {
            "primary": ["Rectus Abdominis"],
            "secondary": ["Obliques", "Core"]
        },
        "tips": [
            "Focus on breathing during each exercise",
            "Keep your core engaged",
            "Rest 30-60 seconds between sets"
        ]
    },
    
    {
        "id": 7,
        "title": "Legs Workout",
        "video": "https://www.youtube.com/embed/owWaqXV2sXE",
        "description": "Strengthen your legs with these effective exercises.",
        "duration": "60 minutes",
        "difficulty": "Intermediate",
        "calories": "400-500",
        "equipment": ["Barbell", "Dumbbells"],
        "exercises": [
            {
                "name": "Squats",
                "sets": "4",
                "reps": "10",
                "notes": "Keep your knees aligned with your toes"
            },
            {
                "name": "Lunges",
                "sets": "3",
                "reps": "12",
                "notes": "Step forward, keep your torso upright"
            },
            {
                "name": "Leg Press",
                "sets": "3",
                "reps": "10",
                "notes": "Avoid locking your knees at the top"
            }
        ],
        "muscles": {
            "primary": ["Quadriceps", "Hamstrings"],
            "secondary": ["Glutes", "Calves"]
        },
        "tips": [
            "Warm up your legs with dynamic stretches",
            "Focus on full range of motion",
            "Rest 90 seconds between sets"
        ]
    },

    {
      "id": 8,
      "title": "Chest Workout",
      "video": "https://www.youtube.com/embed/ZB4ru6VyU4Y",
      "description": "Build a stronger chest with these effective exercises.",
      "duration": "50 minutes",
      "difficulty": "Intermediate",
      "calories": "350-450",
      "equipment": ["Barbell", "Dumbbells", "Bench"],
      "exercises": [
          {
              "name": "Bench Press",
              "sets": "4",
              "reps": "8",
              "notes": "Keep your back flat on the bench"
          },
          {
              "name": "Push-ups",
              "sets": "3",
              "reps": "12",
              "notes": "Maintain a straight body line"
          },
          {
              "name": "Dumbbell Flyes",
              "sets": "3",
              "reps": "10",
              "notes": "Control the movement, avoid locking elbows"
          }
      ],
      "muscles": {
          "primary": ["Pectorals"],
          "secondary": ["Triceps", "Shoulders"]
      },
      "tips": [
          "Warm up your chest with light weights",
          "Focus on full range of motion",
          "Rest 60-90 seconds between sets"
      ]
  },
  {
        "id": 9,
        "title": "Back Workout",
        "video": "https://www.youtube.com/embed/NXtlO8IBoVU",
        "description": "Strengthen your back with these effective exercises.",
        "duration": "50 minutes",
        "difficulty": "Intermediate",
        "calories": "350-450",
        "equipment": ["Barbell", "Dumbbells"],
        "exercises": [
            {
                "name": "Deadlifts",
                "sets": "4",
                "reps": "6",
                "notes": "Keep your back straight, engage your core"
            },
            {
                "name": "Pull-ups",
                "sets": "3",
                "reps": "10",
                "notes": "Use a full range of motion"
            },
            {
                "name": "Bent-over Rows",
                "sets": "3",
                "reps": "8",
                "notes": "Keep your back flat, avoid arching"
            }
        ],
        "muscles": {
            "primary": ["Latissimus Dorsi", "Trapezius"],
            "secondary": ["Rhomboids", "Erector Spinae"]
        },
        "tips": [
            "Warm up your lower back with light stretches",
            "Focus on proper form to avoid injury",
            "Rest 90 seconds between sets"
        ]
    },
    {
        "id": 10,
        "title": "Shoulder Workout",
        "video": "https://www.youtube.com/embed/C3JIpg8tYnE",
        "description": "Strengthen your shoulders with these effective exercises.",
        "duration": "45 minutes",
        "difficulty": "Intermediate",
        "calories": "300-400",
        "equipment": ["Dumbbells", "Resistance bands"],
        "exercises": [
            {
                "name": "Warm-up Rotations",
                "sets": "2",
                "reps": "1 minute each direction",
                "notes": "Perform slow, controlled movements"
            },
            {
                "name": "Overhead Press",
                "sets": "3",
                "reps": "10",
                "notes": "Keep core tight, maintain straight back"
            },
            {
                "name": "Side Lateral Raises",
                "sets": "3",
                "reps": "12",
                "notes": "Control the descent, avoid swinging"
            },
            {
                "name": "Front Raises",
                "sets": "3",
                "reps": "12",
                "notes": "Alternate arms, maintain steady pace"
            }
        ],
        "muscles": {
            "primary": ["Deltoids", "Trapezius"],
            "secondary": ["Rotator cuffs", "Core"]
        },
        "tips": [
            "Stay hydrated throughout the workout",
            "Focus on form over weight",
            "Rest 60-90 seconds between sets"
        ]
    },
    
    {
        "id": 11,
        "title": "Biceps Workout",
        "video": "https://www.youtube.com/embed/vOYPZgVS31Y",
        "description": "Target your biceps with these effective exercises.",
        "duration": "40 minutes",
        "difficulty": "Beginner",
        "calories": "200-300",
        "equipment": ["Dumbbells", "Barbell"],
        "exercises": [
            {
                "name": "Bicep Curls",
                "sets": "3",
                "reps": "12",
                "notes": "Keep elbows close to your body"
            },
            {
                "name": "Hammer Curls",
                "sets": "3",
                "reps": "10",
                "notes": "Use a neutral grip"
            },
            {
                "name": "Concentration Curls",
                "sets": "3",
                "reps": "10",
                "notes": "Focus on isolating the biceps"
            }
        ],
        "muscles": {
            "primary": ["Biceps"],
            "secondary": ["Forearms"]
        },
        "tips": [
            "Avoid swinging your body",
            "Use controlled movements",
            "Rest 60 seconds between sets"
        ]
    },
    {
        "id": 12,
        "title": "Triceps Workout",
        "video": "https://www.youtube.com/embed/3i8X4MioO7A",
        "description": "Strengthen your triceps with these effective exercises.",
        "duration": "45 minutes",
        "difficulty": "Intermediate",
        "calories": "300-400",
        "equipment": ["Dumbbells", "Cable Machine"],
        "exercises": [
            {
                "name": "Tricep Dips",
                "sets": "3",
                "reps": "10",
                "notes": "Keep your body upright"
            },
            {
                "name": "Overhead Tricep Extension",
                "sets": "3",
                "reps": "12",
                "notes": "Use a controlled motion"
            },
            {
                "name": "Cable Pushdowns",
                "sets": "3",
                "reps": "12",
                "notes": "Focus on squeezing the triceps"
            }
        ],
        "muscles": {
            "primary": ["Triceps"],
            "secondary": ["Shoulders"]
        },
        "tips": [
            "Warm up your elbows with light weights",
            "Avoid locking your elbows",
            "Rest 60-90 seconds between sets"
        ]
    },
    {
        "id": 13,
        "title": "Abdominal Workout",
        "video": "https://www.youtube.com/embed/p30MacT85ak",
        "description": "Strengthen your core with these effective exercises.",
        "duration": "30 minutes",
        "difficulty": "Beginner",
        "calories": "150-250",
        "equipment": ["Mat"],
        "exercises": [
            {
                "name": "Crunches",
                "sets": "3",
                "reps": "15",
                "notes": "Engage your core, avoid pulling your neck"
            },
            {
                "name": "Plank",
                "sets": "3",
                "duration": "30 seconds",
                "notes": "Keep your body in a straight line"
            },
            {
                "name": "Leg Raises",
                "sets": "3",
                "reps": "12",
                "notes": "Control the movement, avoid swinging"
            }
        ],
        "muscles": {
            "primary": ["Rectus Abdominis"],
            "secondary": ["Obliques", "Core"]
        },
        "tips": [
            "Focus on breathing during each exercise",
            "Keep your core engaged",
            "Rest 30-60 seconds between sets"
        ]
    },
    
    {
        "id": 14,
        "title": "Legs Workout",
        "video": "https://www.youtube.com/embed/owWaqXV2sXE",
        "description": "Strengthen your legs with these effective exercises.",
        "duration": "60 minutes",
        "difficulty": "Intermediate",
        "calories": "400-500",
        "equipment": ["Barbell", "Dumbbells"],
        "exercises": [
            {
                "name": "Squats",
                "sets": "4",
                "reps": "10",
                "notes": "Keep your knees aligned with your toes"
            },
            {
                "name": "Lunges",
                "sets": "3",
                "reps": "12",
                "notes": "Step forward, keep your torso upright"
            },
            {
                "name": "Leg Press",
                "sets": "3",
                "reps": "10",
                "notes": "Avoid locking your knees at the top"
            }
        ],
        "muscles": {
            "primary": ["Quadriceps", "Hamstrings"],
            "secondary": ["Glutes", "Calves"]
        },
        "tips": [
            "Warm up your legs with dynamic stretches",
            "Focus on full range of motion",
            "Rest 90 seconds between sets"
        ]
    }
]


const ExerciseCard = ({ exercise, index, isCompleted, onToggle }) => (
  <div className="bg-white/10 rounded-lg p-4 mb-4">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-xl font-semibold">{exercise.name}</h3>
      <button
        onClick={() => onToggle(index)}
        className={`px-3 py-1 rounded-full ${
          isCompleted ? 'bg-green-500' : 'bg-white/10'
        } transition-colors`}
      >
        {isCompleted ? '✓ Done' : 'Mark Done'}
      </button>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-2 text-sm text-gray-300">
      <div>Sets: {exercise.sets}</div>
      <div>Reps: {exercise.reps}</div>
    </div>
    <p className="text-sm text-gray-400">{exercise.notes}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-700">{title}</h2>
    {children}
  </div>
);

export default function WorkoutDetails() {
  const { id } = useParams();
  const workout = workoutData.find(w => w.id === parseInt(id));
  const navigate = useNavigate();
  const [completedExercises, setCompletedExercises] = useState(new Set());
  const [showVideo, setShowVideo] = useState(true);

  if (!workout) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-300">
          <h2 className="text-2xl font-bold mb-4">Workout Not Found</h2>
          <button 
            onClick={() => navigate('/workout')}
            className="px-4 py-2 bg-[#faa307] rounded-lg hover:bg-[#faa307]/80 transition-colors"
          >
            Back to Workouts
          </button>
        </div>
      </div>
    );
  }

  const toggleExercise = (index) => {
    setCompletedExercises(prev => {
      const updated = new Set(prev);
      if (updated.has(index)) {
        updated.delete(index);
      } else {
        updated.add(index);
      }
      return updated;
    });
  };

  const progress = (completedExercises.size / workout.exercises.length) * 100;

  return (
    <div className="bg-black pt-24 min-h-screen py-12 text-white">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate('/workout')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back
          </button>
          <div className="text-right">
            <div className="text-sm text-white pb-3">Progress</div>
            <div className="w-40 h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#faa307] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">{workout.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white/10 p-4 rounded-lg text-center">
            <div className="text-sm text-gray-400">Duration</div>
            <div className="font-semibold">{workout.duration}</div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg text-center">
            <div className="text-sm text-gray-400">Difficulty</div>
            <div className="font-semibold">{workout.difficulty}</div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg text-center">
            <div className="text-sm text-gray-400">Calories</div>
            <div className="font-semibold">{workout.calories}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Section title="Video Guide">
              <div className="relative">
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="absolute top-2 right-2 px-3 py-1 bg-black/50 rounded text-sm"
                >
                  {showVideo ? 'Hide' : 'Show'} Video
                </button>
                {showVideo && (
                  <iframe
                    className="w-full aspect-video rounded-lg"
                    src={workout.video}
                    title={workout.title}
                    allowFullScreen
                  />
                )}
              </div>
            </Section>

            <Section title="Description">
              <p className="text-gray-300">{workout.description}</p>
            </Section>

            <Section title="Equipment Needed">
              <div className="flex flex-wrap gap-2">
                {workout.equipment.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </Section>
          </div>

          <div>
            <Section title="Exercise List">
              {workout.exercises.map((exercise, index) => (
                <ExerciseCard
                  key={index}
                  exercise={exercise}
                  index={index}
                  isCompleted={completedExercises.has(index)}
                  onToggle={toggleExercise}
                />
              ))}
            </Section>

            <Section title="Targeted Muscles">
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-400 mb-2">Primary</h3>
                  <div className="flex flex-wrap gap-2">
                    {workout.muscles.primary.map((muscle, index) => (
                      <span key={index} className="px-3 py-1 bg-[#faa307]/20 rounded-full text-[#faa307] text-sm">
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-400 mb-2">Secondary</h3>
                  <div className="flex flex-wrap gap-2">
                    {workout.muscles.secondary.map((muscle, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            <Section title="Pro Tips">
              <ul className="space-y-2 text-gray-300">
                {workout.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#faa307] mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}