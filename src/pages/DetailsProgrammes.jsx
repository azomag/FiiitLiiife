/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Clock, 
  Zap, 
  Star, 
  Check, 
  Trophy, 
  CreditCard,
  ArrowLeft,
  Play
} from 'lucide-react';

const programsData = {
  1: {
    id: 1,
    title: "Table of upper lower exercises",
    description: "A complete workout program for upper and lower body with detailed pictures.",
    duration: "4 weeks",
    intensity: "Medium",
    videoIframe: "https://www.youtube.com/embed/eWPj3ikAExk",
    programImg: "/img/upperlower.png",
    guid: "Ce programme d'entraînement de 4 semaines alterne séances pour le haut et le bas du corps, avec des jours de récupération et de cardio léger, tout en proposant une progression hebdomadaire en charges et intensité. Il suit une structure équilibrée : deux jours consacrés au haut du corps (lundi et jeudi), deux jours pour le bas du corps (mardi et vendredi), un jour de repos actif incluant étirements, yoga ou marche légère (mercredi), un jour de repos complet (samedi) et une séance de cardio léger (dimanche) pour maintenir la condition aérobie. La progression suit un plan précis : la première semaine privilégie des charges modérées avec 3 séries de 10 à 12 répétitions, la deuxième augmente les charges avec 4 séries de 8 à 10 répétitions, la troisième vise la force maximale avec 4 séries de 6 à 8 répétitions, et la quatrième développe l’endurance musculaire avec 3 séries de 12 à 15 répétitions. Les exercices combinent mouvements composés, comme le développé couché, le squat et le rowing, avec des exercices isolants, tels que le curl, l’extension triceps et le leg curl. Ce programme optimise le développement musculaire tout en assurant une récupération efficace et un bon équilibre entre intensité et repos.",
    titleGuid: "Table of Upper and lower body workouts",
    titleGuidImg: "Upper and lower body workouts",
    imagecover: "https://img.freepik.com/free-photo/training-with-kettlebells_1098-13320.jpg?t=st=1738772178~exp=1738775778~hmac=b6b42e264a73677cdea897e1c1080a62765f72400f60fe42c55b5cc4360445b8&w=900",
    image: "/img/img1.jpeg",
    specialFeature: "",
    icon: "💪",
    fullDetails: {
      overview: "Muscle amplification exercises program.",
      includes: [
        "Upper body exercises",
        "Lower body exercises",
        "Detailed pictures for each exercise",
        "Program suitable for all levels"
      ],
      prerequisite: "No prior experience required.",
      equipment: "Kettlebells, Dumbbells, Mat",
      price: "FREE",
      benefits: [
        "Improves strength",
        "Increases muscle mass",
        "Enhances endurance",
        "Suitable for beginners"
      ]
    }
  },
  2: {
    id: 2,
    title: "Table of bodybuilding exercises 6 days Split",
    description: "A 6-day split bodybuilding program to effectively target each muscle group.",
    duration: "6 weeks",
    intensity: "High",
    videoIframe: "https://www.youtube.com/embed/FE7y3iUb85Y",
    programImg: "/img/img2.png",
    imagecover: "https://img.freepik.com/free-photo/athlete-weightlifting_181624-12617.jpg?t=st=1738772235~exp=1738775835~hmac=acae4d29b94f6b41bd6ade39a93bf00aa0c0f8a02177533c74cd6ed18b0b3b93&w=900",
    guid: "This 5-day bodybuilding program is designed for beginners who want to build strength, improve muscle tone, and learn proper training techniques. It offers a progressive and balanced approach, targeting each muscle group while allowing time for recovery. The program emphasizes foundational movements that will help you develop proper form, which is crucial for long-term progress. With a moderate intensity, the focus is on gradually increasing weights and repetitions, ensuring steady improvement without overloading the body. This approach not only helps in building strength but also in preventing injuries, making it ideal for newcomers to bodybuilding.",
    titleGuid: "Table of Upper and lower body workouts",
    titleGuidImg: "Upper and lower body workouts",
    specialFeature: "",
    icon: "🏋️‍♂️",
    fullDetails: {
      overview: "Bodybuilding exercises with an advanced split schedule.",
      includes: [
        "Daily targeted muscle group exercises",
        "Detailed workout plan",
        "Intense muscle building regimen",
        "Program tailored for intermediate to advanced levels"
      ],
      prerequisite: "Experience with basic workouts.",
      equipment: "Barbell, Dumbbells, Weight plates",
      price: "FREE",
      benefits: [
        "Maximizes muscle growth",
        "Enhances muscle definition",
        "Increases overall strength",
        "Builds lean muscle"
      ]
    }
  },
  3: {
    id: 3,
    title: "Bodybuilding exercises schedule for beginners",
    description: "",
    duration: "8 weeks",
    intensity: "Low",
    videoIframe: "https://www.youtube.com/embed/3PMrt-1WDaI",
    programImg: "/img/img3.png",
    imagecover: "https://img.freepik.com/free-photo/wellness-health-lifestyle-workout-graphic-word_53876-13880.jpg?t=st=1738772268~exp=1738775868~hmac=a422ed38984ea49e85ba487148396de843dc4474852a7aae725310f41c4ea886&w=900",
    guid: "This bodybuilding workout schedule is designed for beginners to build a solid foundation in strength and muscle development by focusing on compound exercises that engage multiple muscle groups. Day 1 (Chest & Triceps) targets the chest and triceps with exercises like bench press and tricep dips to enhance pressing strength and tricep definition. Day 2 (Back & Biceps) includes barbell rows and lat pulldowns to develop a strong back and biceps, combining pulling movements for both muscle groups. Day 3 (Legs & Shoulders) focuses on leg strength with squats, lunges, and shoulder presses to build both legs and shoulder width. Day 4 (Rest or Active Recovery) provides a recovery day with options like stretching or light cardio to promote flexibility and circulation. Day 5 (Chest & Back) reinforces upper body strength and muscle mass with compound movements like barbell bench press and rows. Day 6 (Legs & Abs) focuses on leg development with deadlifts and calf raises, along with abdominal exercises like planks and Russian twists for a strong core. Day 7 (Rest or Active Recovery) is another rest day to allow recovery before starting the cycle again. This schedule ensures all major muscle groups are worked, with adequate rest for muscle growth, combining heavy lifts and accessory exercises to build muscle mass, improve strength, and prevent imbalances. ",
    titleGuid: "Bodybuilding exercises schedule for beginners",
    specialFeature: "Beginner-friendly",
    icon: "🏋️‍♀️",
    fullDetails: {
      overview: "A muscle amplification exercises program for those new to bodybuilding.",
      includes: [
        "Progressive exercises for muscle growth",
        "Basic strength building movements",
        "Step-by-step guidance for each exercise",
        "Program designed for gradual progress"
      ],
      prerequisite: "None.",
      equipment: "Dumbbells, Barbell, Bodyweight",
      price: "FREE",
      benefits: [
        "Builds muscle mass gradually",
        "Improves overall strength",
        "Suitable for beginners",
        "Increases body endurance"
      ]
    }
  },
  4: {
    id: 4,
    title: "Cardio fitness program for fat loss",
    description: "A 4-week cardio-focused fitness program to promote fat loss and improve cardiovascular health.",
    duration: "4 weeks",
    intensity: "Medium",
    videoIframe: "https://www.youtube.com/embed/B12MXF0bSFo",
    programImg: "/img/img4.png",
    imagecover: "https://img.freepik.com/free-photo/athletic-blond-male-holds-barbell-weight-slim-fitness-female-model-dark-grey-background_613910-15939.jpg?t=st=1738772319~exp=1738775919~hmac=6b9bee393d911572576b6afaf5e6d6026968e510a26e80c0f0181969b7c617bc&w=826",
    guid: "This 6-day bodybuilding program focuses on different muscle groups each day to build strength and mass. Day 1 (Chest) includes barbell bench press, dumbbell flyes, push-ups, and chest dips. Day 2 (Back) targets the back with pull-ups, barbell rows, lat pulldowns, and face pulls. Day 3 (Legs) works the legs with squats, leg press, lunges, and calf raises. Day 4 (Shoulders) focuses on shoulders with shoulder press, lateral raises, front raises, and rear delt flyes. Day 5 (Arms) targets the arms with bicep curls, tricep pushdowns, hammer curls, and skull crushers. Day 6 (Full Body) incorporates deadlifts, bench press, pull-ups, squats, and overhead press for an overall workout. Day 7 (Rest/Active Recovery) allows for light cardio or stretching. This routine combines compound and isolation exercises to target specific muscles, promoting overall muscle development and strength.",
    titleGuid: "Cardio fitness program for fat loss",
    titleGuidImg: "Cardio fitness",
    specialFeature: "Fat loss focused",
    icon: "🏃‍♂️",
    fullDetails: {
      overview: "A fat loss program that blends cardio and HIIT.",
      includes: [
        "HIIT workout routines",
        "Steady-state cardio sessions",
        "Weekly progression for fat loss",
        "Tailored for beginners and intermediates"
      ],
      prerequisite: "None.",
      equipment: "None, Bodyweight",
      price: "FREE",
      benefits: [
        "Improves cardiovascular health",
        "Maximizes fat burning",
        "Increases endurance",
        "Easy to follow"
      ]
    }
  },
  5: {
    id: 5,
    title: "HIIT training for beginners",
    description: "A high-intensity interval training program designed for beginners to burn fat and increase stamina.",
    duration: "6 weeks",
    intensity: "High",
    videoIframe: "https://www.youtube.com/embed/-K7n8HyEsW0",
    programImg: "/img/img5.png",
    imagecover: "https://img.freepik.com/free-photo/athlete-working-out_1098-14447.jpg?t=st=1738772372~exp=1738775972~hmac=b63e2964f6f506212e47c227e685af56d8c376effe94d507754b5b8b96740bcb&w=900",
    guid: "This 5-day bodybuilding program is designed to build muscle size quickly through heavy compound lifts and high-volume isolation exercises. Day 1 (Chest & Triceps) includes barbell bench press, dumbbell press, tricep dips, and pushdowns. Day 2 (Back & Biceps) targets the back and biceps with deadlifts, barbell rows, lat pulldowns, and curls. Day 3 (Legs) focuses on leg strength with squats, leg press, lunges, and calf raises. Day 4 (Shoulders & Abs) involves shoulder press, lateral raises, rear delt flyes, and ab exercises. Day 5 (Full Body) combines squats, bench press, pull-ups, and deadlifts for an overall workout. Days 6 and 7 are for rest or active recovery. The program emphasizes intensity and progressive overload to promote fast muscle growth, focusing on both strength and hypertrophy.",
    titleGuid: "HIIT training for beginners",
    titleGuidImg: "HIIT",
    specialFeature: "Burns fat and builds strength",
    icon: "🔥",
    fullDetails: {
      overview: "A high-intensity interval training program.",
      includes: [
        "Short burst workouts",
        "Fat burning and muscle toning",
        "Ideal for beginners",
        "Progressive weekly plans"
      ],
      prerequisite: "None.",
      equipment: "None, Bodyweight",
      price: "FREE",
      benefits: [
        "Builds stamina",
        "Increases fat burn",
        "Improves strength",
        "Ideal for beginners"
      ]
    }
  },
  6: {
    id: 6,
    title: "Total body strength program",
    description: "A full-body strength program to enhance muscle development and strength.",
    duration: "12 weeks",
    intensity: "High",
    videoIframe: "https://www.youtube.com/embed/rL5FdSd1tQ4",
    programImg: "/img/img6.png",
    imagecover: "https://img.freepik.com/photos-gratuite/jeune-sportif-puissant-s-entrainant-halteres-mur-sombre_176420-518.jpg?t=st=1738772033~exp=1738775633~hmac=80271cbe2c6b629a9442a1b9f3a5ef98ffb8bef2f51bb66b04585e003f5b1efe&w=740",
    guid: "This 4-day bodybuilding program is designed for maximum strength and muscle growth, focusing on heavy compound movements and targeted isolation exercises. Each session targets major muscle groups, ensuring progressive overload for rapid gains. Day 1 (Chest & Triceps) includes bench press, incline dumbbell press, and tricep dips to build upper body strength and definition. Day 2 (Back & Biceps) focuses on deadlifts, pull-ups, and barbell rows to develop a thick, powerful back and strong arms. Day 3 (Legs & Abs) combines squats, leg press, and lunges to strengthen the lower body, while core exercises improve stability. Day 4 (Shoulders & Full Body) incorporates overhead press, lateral raises, and full-body lifts like squats and deadlifts to enhance strength and balance. Days 5-7 are for rest or active recovery with light cardio, stretching, or mobility work. The program prioritizes intensity, muscle activation, and recovery, making it ideal for building strength and size efficiently.",
    titleGuid: "Total body strength program",
    titleGuidImg: "Strength training",
    specialFeature: "",
    icon: "🏋️‍♂️",
    fullDetails: {
      overview: "A comprehensive full-body strength program.",
      includes: [
        "Compound exercises",
        "Weekly progression in load",
        "Accessory exercises for balance",
        "Program for intermediate and advanced lifters"
      ],
      prerequisite: "Intermediate level of fitness.",
      equipment: "Barbell, Dumbbells, Weight plates",
      price: "FREE",
      benefits: [
        "Increases strength",
        "Builds lean muscle",
        "Progressive overload for growth",
        "Enhances muscular endurance"
      ]
    }
  },
  7: {
    id: 7,
    title: "Yoga for flexibility and strength",
    description: "A yoga-based program designed to improve flexibility, strength, and mental well-being.",
    duration: "8 weeks",
    intensity: "Low",
    videoIframe: "https://www.youtube.com/embed/eTxO5ZMxcsc",
    programImg: "/img/img7.png",
    imagecover: "https://img.freepik.com/free-photo/front-view-woman-training-gym_23-2150289967.jpg?t=st=1738772468~exp=1738776068~hmac=5ce35cb17e4c1d22b6fee5be88bb8f75a260e7c7cfa0f6a9520f55138a60d239&w=900",
    guid: "This 5-day bodybuilding program maximizes muscle growth through heavy compound lifts and targeted isolation exercises. Day 1 (Chest & Triceps) includes bench press, dips, and pushdowns; Day 2 (Back & Biceps) focuses on deadlifts, pull-ups, and curls; Day 3 (Legs) targets squats, lunges, and leg press; Day 4 (Shoulders & Abs) incorporates overhead press, lateral raises, and core work; and Day 5 (Full Body & Power) combines squats, deadlifts, and bench press. The Muscle Amplification Diet emphasizes high protein, complex carbs, healthy fats, and supplements like whey and creatine for strength and recovery. Rest days (Day 6-7) involve light cardio and stretching. This plan ensures rapid muscle gains, strength, and effective recovery.",
    titleGuid: "Yoga for flexibility and strength",
    titleGuidImg: "Yoga training",
    specialFeature: "Increases flexibility and strength",
    icon: "🧘‍♀️",
    fullDetails: {
      overview: "A yoga program for strength and flexibility.",
      includes: [
        "Flexibility and strength routines",
        "Breathing exercises",
        "Weekly focus on mental well-being",
        "Suitable for all fitness levels"
      ],
      prerequisite: "None.",
      equipment: "Yoga mat",
      price: "FREE",
      benefits: [
        "Increases flexibility",
        "Improves core strength",
        "Enhances mental clarity",
        "Promotes relaxation"
      ]
    }
  },
  8: {
    id: 8,
    title: "Advanced powerlifting program",
    description: "A 12-week powerlifting program focusing on the squat, deadlift, and bench press.",
    duration: "12 weeks",
    intensity: "High",
    videoIframe: "https://www.youtube.com/embed/KeNObkhENKQ",
    programImg: "/img/img8.png",
    imagecover: "https://img.freepik.com/free-photo/close-up-woman-doing-crossfit-workout_23-2149080439.jpg?t=st=1738772501~exp=1738776101~hmac=6500542e42a7f6ef70a4d4732de971c062afefe0941a1cfa7d8c644c227b17d8&w=900",
    guid: "This 3-day beginner bodybuilding program focuses on building strength, muscle, and endurance with simple yet effective exercises. Day 1 (Chest, Shoulders & Triceps) includes bench press and dumbbell presses for upper body strength, while tricep dips and pushdowns enhance arm definition. Day 2 (Back & Biceps) uses lat pulldowns and rows to strengthen the back, with curls to build bigger biceps. Day 3 (Legs & Abs) incorporates squats, leg press, and core exercises to improve lower body power and stability. Beginner tips include starting with light weights, focusing on form, and gradually increasing intensity, while a high-protein diet and proper recovery ensure optimal muscle growth. This structured plan helps beginners build a strong foundation efficiently!",
    titleGuid: "Advanced powerlifting program",
    titleGuidImg: "Powerlifting",
    specialFeature: "Targets max strength development",
    icon: "🏋️‍♂️",
    fullDetails: {
      overview: "An advanced strength program.",
      includes: [
        "Progressive overload",
        "Detailed strength-building workouts",
        "Focus on compound lifts",
        "Specialized program for intermediate lifters"
      ],
      prerequisite: "Experience with basic lifting techniques.",
      equipment: "Barbell, Weights, Squat rack",
      price: "FREE",
      benefits: [
        "Maximizes strength",
        "Improves lifting technique",
        "Ideal for experienced lifters",
        "Enhances muscular power"
      ]
    }
  },
  9: {
    id: 9,
    title: "Strength and conditioning for athletes",
    description: "A program designed to enhance athletic performance through strength and conditioning exercises.",
    duration: "6 weeks",
    intensity: "Medium",
    videoIframe: "https://www.youtube.com/embed/nO9_mzqgHKE",
    programImg: "/img/img9.png",
    imagecover: "https://img.freepik.com/free-photo/close-up-man-doing-crossfit-workout_23-2149080437.jpg?t=st=1738772525~exp=1738776125~hmac=545416c4c80a941277f72803b1516d5af81f371b6fdc068f522d7d016235235f&w=900",
    guid: "This 4-day bodybuilding program for 2024 is designed for maximum muscle amplification, focusing on progressive overload and compound movements to build strength and size. Day 1 (Chest & Triceps) includes bench press and dips to enhance upper body power and definition. Day 2 (Back & Biceps) uses deadlifts and pull-ups to develop a thick, muscular back and strong arms. Day 3 (Legs & Abs) incorporates squats, lunges, and leg presses to build lower body strength and endurance. Day 4 (Shoulders & Full Body) includes overhead presses and full-body lifts like deadlifts to maximize overall growth. Key focus areas include heavy lifting, high protein intake, and proper recovery for rapid gains, making this intense yet balanced plan ideal for amplifying muscle size and strength in 2024!",
    titleGuid: "Strength and conditioning for athletes",
    titleGuidImg: "Strength and conditioning",
    specialFeature: "",
    icon: "⚽",
    fullDetails: {
      overview: "A comprehensive strength and conditioning program for athletes.",
      includes: [
        "Explosive strength exercises",
        "Agility drills",
        "Endurance building workouts",
        "Program for sports performance"
      ],
      prerequisite: "Intermediate to advanced fitness level.",
      equipment: "Kettlebells, Dumbbells, Plyo box",
      price: "FREE",
      benefits: [
        "Enhances athletic performance",
        "Increases explosiveness",
        "Improves agility and speed",
        "Boosts endurance"
      ]
    }
  },
  10: {
    id: 10,
    title: "Functional fitness program",
    description: "A functional fitness program designed to improve overall mobility, balance, and strength for everyday activities.",
    duration: "10 weeks",
    intensity: "Medium",
    videoIframe: "https://www.youtube.com/embed/YbsCQ22TMIY",
    programImg: "/img/img10.png",
    imagecover: "https://img.freepik.com/free-photo/man-gym-weightlifting_181624-11444.jpg?t=st=1738772568~exp=1738776168~hmac=bb8a661e44622a51f3e91096fcf5082b79d66d5719d0ef192829dad55f79eace&w=900",
    guid: " This 5-day bodybuilding program for 2024 is designed to amplify muscle growth and strength with a focus on compound movements, progressive overload, and muscle recovery. Day 1 (Chest & Triceps) includes bench press, incline dumbbell press, and tricep dips to enhance upper body strength and definition. Day 2 (Back & Biceps) focuses on deadlifts, pull-ups, and barbell rows to develop a strong back and defined biceps. Day 3 (Legs & Abs) incorporates squats, leg presses, and lunges to build lower body strength, while core exercises strengthen your core. Day 4 (Shoulders & Traps) uses overhead presses and lateral raises to enhance shoulder strength and trap development. Day 5 (Full Body & Power) combines full-body compound lifts like deadlifts, squats, and bench press to maximize overall muscle growth and strength. Key focus areas include high-intensity training, proper nutrition with a high-protein diet, and rest for recovery to ensure muscle amplification. This structured program effectively builds muscle size and strength in 2024!",
    titleGuid: "Functional fitness program",
    titleGuidImg: "Functional fitness",
    specialFeature: "Improves everyday movement",
    icon: "🛠️",
    fullDetails: {
      overview: "Program for everyday functional strength.",
      includes: [
        "Mobility exercises",
        "Balance and coordination drills",
        "Full-body strength exercises",
        "Program suitable for all ages"
      ],
      prerequisite: "None.",
      equipment: "None, Bodyweight",
      price: "FREE",
      benefits: [
        "Improves daily movement",
        "Enhances mobility and balance",
        "Strengthens functional muscles",
        "Prevents injuries"
      ]
    }
  },
  
    11: {
      id: 11,
      title: "Crossfit for all levels",
      description: "A Crossfit program designed to increase strength, stamina, and overall conditioning.",
      duration: "8 weeks",
      intensity: "High",
      videoIframe: "https://www.youtube.com/embed/eMjyvIQbn9M",
      programImg: "/img/img11.png",
      imagecover: "https://img.freepik.com/free-photo/man-leaning-bench-press-machine_23-2147688222.jpg?t=st=1738771840~exp=1738775440~hmac=299f9b38eec16dabdf7dd440d154da8f064ab484f94c4ea681c6a404e9169c85&w=900",
      guid: "his 5-day beginner bodybuilding program for 2024 is designed to help you build strength, muscle mass, and improve overall fitness, focusing on compound movements, targeted isolation exercises, and proper recovery for muscle development. Day 1 (Chest & Triceps) includes exercises like bench press and tricep dips to enhance upper body strength and arm definition. Day 2 (Back & Biceps) uses lat pulldowns and barbell rows to develop a strong back and bigger biceps. Day 3 (Legs & Abs) incorporates squats, leg press, and core exercises to build leg strength and core stability. Day 4 (Shoulders & Abs) targets shoulder development and core strength with dumbbell shoulder presses and lateral raises. Day 5 (Full Body) includes compound lifts like deadlifts, squats, and bench presses to work multiple muscle groups for overall strength and endurance. Key tips include focusing on form, using progressive overload, and eating a high-protein diet to fuel muscle growth. This program ensures balanced muscle development while preparing you for more advanced training.",
      titleGuid: "Crossfit for all levels",
      titleGuidImg: "Crossfit training",
      specialFeature: "Great for all fitness levels",
      icon: "🏋️‍♀️",
      fullDetails: {
        overview: "A challenging Crossfit program for all levels.",
        includes: [
          "Strength workouts",
          "Cardio-based conditioning",
          "High-intensity interval training",
          "Progressive weekly plans"
        ],
        prerequisite: "None.",
        equipment: "Barbell, Dumbbells, Jump rope, Kettlebell",
        price: "FREE",
        benefits: [
          "Improves overall fitness",
          "Boosts stamina",
          "Enhances strength and power",
          "Burns fat quickly"
        ]
      }
    },
    12: {
      id: 12,
      title: "Pilates for flexibility and core strength",
      description: "A Pilates program that focuses on building core strength and improving flexibility.",
      duration: "10 weeks",
      intensity: "Low",
      videoIframe: "https://www.youtube.com/embed/ylStE7Bl-c8",
      programImg: "/img/img12.png",
      imagecover: "https://img.freepik.com/free-photo/gym-handsome-man-workout_144627-6218.jpg?t=st=1738771858~exp=1738775458~hmac=fda9a26335a1254775c11e6621c7e6094aabd9c77d18dca60dfa080ad47e8289&w=900",
      guid: " This 3-day bodybuilding workout plan for 2024 is designed to provide maximum muscle growth and strength by focusing on compound exercises and a well-structured training split. Day 1 (Chest & Triceps) targets the chest with compound movements like bench press and enhances tricep development through pushdowns and dips to build upper body strength. Day 2 (Back & Biceps) incorporates deadlifts, pull-ups, and rows to focus on the back, while bicep curls and hammer curls are used to enhance arm development. Day 3 (Legs & Shoulders) strengthens the lower body with squats and leg press, while shoulder presses and lateral raises target shoulder definition. Key focus areas include progressive overload, proper nutrition, and rest, which are essential to achieving maximum muscle growth and strength. This program is perfect for those who want to build a strong foundation and maximize results in 2024!",
      titleGuid: "Pilates for flexibility and core strength",
      titleGuidImg: "Pilates training",
      specialFeature: "Core stability focus",
      icon: "🧘‍♂️",
      fullDetails: {
        overview: "A Pilates program designed for core strength and flexibility.",
        includes: [
          "Core stabilization exercises",
          "Flexibility-building routines",
          "Breathing techniques for relaxation",
          "Suitable for beginners and intermediate levels"
        ],
        prerequisite: "None.",
        equipment: "Mat",
        price: "FREE",
        benefits: [
          "Improves core strength",
          "Increases flexibility",
          "Enhances posture",
          "Low-impact for joint health"
        ]
      }
    },
    13: {
      id: 13,
      title: "Full-body workout with dumbbells",
      description: "A full-body strength program using only dumbbells for a complete workout.",
      duration: "6 weeks",
      intensity: "Medium",
      videoIframe: "https://www.youtube.com/embed/XFpT41748hM",
      programImg: "/img/img13.png",
      imagecover: "https://img.freepik.com/free-photo/man-with-dumbbell_144627-11522.jpg?t=st=1738772670~exp=1738776270~hmac=7f467925e192f31853d7571b683809eee1bddc9da140a07696f54623aef0fccc&w=740",
      guid: "This 5-day bodybuilding workout program for all levels (2024) is designed to help you build muscle, increase strength, and improve overall fitness, regardless of your experience level. It balances compound exercises, isolation movements, and recovery to ensure a comprehensive approach to muscle growth. Day 1 (Chest & Triceps) targets the chest and triceps with heavy pressing movements like bench press and dumbbell press, along with tricep isolation exercises such as pushdowns and extensions. Day 2 (Back & Biceps) focuses on the back and biceps with compound lifts like deadlifts and rows, along with arm exercises such as bicep curls and hammer curls. Day 3 (Legs & Abs) builds leg strength with squats, leg press, and Romanian deadlifts, while strengthening the core with abs exercises like planks. Day 4 (Shoulders & Traps) develops shoulder strength with overhead presses, lateral raises, and shrugs for trap development. Day 5 (Full Body) integrates full-body movements like squats, bench press, and deadlifts to work multiple muscle groups at once for maximum strength and endurance. Key tips include flexibility for beginners to focus on higher reps and lighter weights, intermediates to add intensity with moderate weights, and advanced lifters to push heavier lifts with lower reps. Recovery is essential for growth, so focus on proper rest, sleep, and nutrition.",
      titleGuid: "Full-body workout with dumbbells",
      titleGuidImg: "Dumbbell training",
      specialFeature: "Uses minimal equipment",
      icon: "🦸‍♀️",
      fullDetails: {
        overview: "A dumbbell-based full-body strength program.",
        includes: [
          "Upper and lower body exercises",
          "Core strengthening movements",
          "Incorporates progressive load",
          "Suitable for home or gym"
        ],
        prerequisite: "None.",
        equipment: "Dumbbells",
        price: "FREE",
        benefits: [
          "Builds full-body strength",
          "Improves muscle endurance",
          "Increases stability and balance",
          "Ideal for home workouts"
        ]
      }
    },
    14: {
      id: 14,
      title: "Athletic conditioning for runners",
      description: "A specialized program for runners to improve endurance, speed, and strength.",
      duration: "8 weeks",
      intensity: "High",
      videoIframe: "https://www.youtube.com/embed/b6ouj88iBZs",
      programImg: "/img/img14.png",
      imagecover: "https://img.freepik.com/free-photo/young-man-lifting-weights-gym_23-2148353083.jpg?t=st=1738772854~exp=1738776454~hmac=28f2eb996955995bb192708e15c17cd65a1925cf36cb1ada419cd6dc50665d7a&w=900",
      guid: "This chest workout plan for 2023 is designed to help you build huge chest muscles by targeting all areas of your chest—upper, middle, and lower. It combines compound exercises like the barbell bench press and incline dumbbell press with isolation movements such as dumbbell flyes and cable chest flyes to ensure balanced growth and maximum development. The barbell bench press targets the entire chest, while the incline dumbbell press focuses on the upper chest, promoting full chest development. Flat dumbbell flyes help expand the chest and target the inner and outer muscles for better definition. Chest dips (lean forward) hit the lower chest, contributing to increased mass, and cable chest flyes enhance the stretch and contraction in the chest, ideal for outer chest definition. Push-ups finish the workout by improving muscle endurance and overall activation, and the decline barbell bench press completes lower chest development for a well-rounded chest. Key focus areas include consistent progressive overload, good form, and focusing on muscle contraction to achieve bigger and stronger chest muscles in 2023. Combining these effective exercises with proper nutrition and recovery will ensure you reach your goal of a huge chest!",
      titleGuid: "Athletic conditioning for runners",
      titleGuidImg: "Running conditioning",
      specialFeature: "Race-specific conditioning",
      icon: "🏃‍♂️",
      fullDetails: {
        overview: "A program to enhance running performance through conditioning.",
        includes: [
          "Speed drills",
          "Endurance-focused workouts",
          "Strength training for legs and core",
          "Program designed for intermediate to advanced runners"
        ],
        prerequisite: "Intermediate running experience.",
        equipment: "None, Bodyweight",
        price: "FREE",
        benefits: [
          "Improves running speed",
          "Increases running endurance",
          "Enhances leg strength",
          "Prevents injuries"
        ]
      }
    },
    15: {
      id: 15,
      title: "Bodyweight exercises for full-body strength",
      description: "A bodyweight training program designed to build full-body strength without any equipment.",
      duration: "4 weeks",
      intensity: "Medium",
      videoIframe: "https://www.youtube.com/embed/0xvdPDQTrrc",
      programImg: "/img/img15.png",
      imagecover: "https://img.freepik.com/photos-gratuite/jeune-sportif-puissant-s-entrainant-halteres-mur-sombre_176420-514.jpg?t=st=1738772613~exp=1738776213~hmac=a40537fc81393a91ad6bfeea18711330df995dd67153efe729f686200ffdc045&w=740",
      guid: "This back workout plan for 2023 is designed to help you amplify your back muscles with a mix of strength-building compound movements and muscle-defining isolation exercises. By targeting the upper, middle, and lower back, the workout promotes overall thickness, width, and definition. Deadlifts, a powerful compound exercise, work the lower back, hamstrings, and core, helping to build total back strength. Wide grip pull-ups focus on the upper back and lats, enhancing your back width and giving you that V-taper look. Bent-over barbell rows build middle back thickness and strengthen the traps, while lat pulldowns develop lat width for a wider back. One-arm dumbbell rows target each side of the back individually, improving muscle symmetry and emphasizing the lats. Seated cable rows are a controlled movement that targets the middle back and traps while improving muscle contraction. Face pulls strengthen the rear delts and improve posture, contributing to a balanced upper back. T-bar rows add thickness to the middle back and develop strong traps. Key tips include focusing on progressive overload, using controlled movements to avoid injury, and maintaining a mind-muscle connection during each set. With proper nutrition and recovery, this program will help you build a stronger, more defined back in 2023!",
      titleGuid: "Bodyweight exercises for full-body strength",
      titleGuidImg: "Bodyweight training",
      specialFeature: "No equipment needed",
      icon: "🤸‍♂️",
      fullDetails: {
        overview: "A full-body workout using only bodyweight exercises.",
        includes: [
          "Upper and lower body movements",
          "Core strengthening routines",
          "Cardio-based exercises for fat loss",
          "Progressive intensity for each week"
        ],
        prerequisite: "None.",
        equipment: "None",
        price: "FREE",
        benefits: [
          "Increases overall strength",
          "Improves endurance",
          "No equipment required",
          "Ideal for home workouts"
        ]
      }
    },
    16: {
      id: 16,
      title: "Resistance band training for toning",
      description: "A program using resistance bands to tone muscles and increase strength.",
      duration: "6 weeks",
      intensity: "Medium",
      videoIframe: "https://www.youtube.com/embed/tiJ5FDR1Xkg",
      programImg: "/img/img16.png",
      imagecover: "https://img.freepik.com/free-photo/people-working-out-indoors-together-with-weights_23-2149175355.jpg?t=st=1738773141~exp=1738776741~hmac=53a51ae39ad584bd255a5c79638a3abb5e9320779ada97c68b39392d7cee03b4&w=900",
      guid: "These exercises help photographers stay in shape and handle their equipment effectively. The plank strengthens the core for better stability with heavy equipment, while lunges improve leg strength for carrying gear over long distances. Push-ups develop upper body strength for handling the camera, and mountain climbers enhance cardiovascular endurance and agility. Squats strengthen the lower body for standing or crouching positions, and reverse lunges with a twist boost leg and core strength for balance during movement. Dumbbell rows build back strength for lifting heavy gear, and bicycle crunches target the abs for better core stability. Kettlebell swings improve hip mobility and power, while walking or hiking increases endurance for long photo sessions.",
      titleGuid: "Resistance band training for toning",
      titleGuidImg: "Resistance band training",
      specialFeature: "Compact and portable equipment",
      icon: "💪",
      fullDetails: {
        overview: "A resistance band program to improve muscle tone.",
        includes: [
          "Full-body resistance band exercises",
          "Focus on strength and muscle toning",
          "Can be done anywhere with portable bands",
          "Progressive intensity for muscle growth"
        ],
        prerequisite: "None.",
        equipment: "Resistance Bands",
        price: "FREE",
        benefits: [
          "Increases muscle tone",
          "Enhances strength",
          "Portable and convenient",
          "Suitable for all fitness levels"
        ]
      }
    },
    17: {
      id: 17,
      title: "Kettlebell workout for total body strength",
      description: "A kettlebell-based workout program designed for full-body strength and conditioning.",
      duration: "8 weeks",
      intensity: "High",
      videoIframe: "https://www.youtube.com/embed/nuzT2iJESFA",
      programImg: "/img/img17.png",
      imagecover: "https://img.freepik.com/free-photo/people-working-out-indoors-together-with-weights_23-2149175355.jpg?t=st=1738773141~exp=1738776741~hmac=53a51ae39ad584bd255a5c79638a3abb5e9320779ada97c68b39392d7cee03b4&w=900",
      guid: "This bodybuilding workout program is designed to balance strength, hypertrophy, and recovery, scaling from beginner to advanced levels. Day 1 focuses on Chest & Triceps, with exercises like barbell bench press, incline dumbbell press, chest dips, flyes, and tricep kickbacks, overhead extensions, and pushdowns. Day 2 targets Back & Biceps, with lat pulldowns, seated rows, deadlifts, pull-ups, and bicep curls, hammer curls, EZ bar curls, and preacher curls. Day 3 is dedicated to Legs & Abs, with squats, leg press, lunges, Romanian deadlifts, planks, and leg raises. Day 4 focuses on Shoulders & Traps, with dumbbell shoulder presses, lateral raises, front raises, Arnold press, shrugs, reverse flyes, and reverse pec deck. Day 5 is a Full Body (Advanced) day, featuring deadlifts, squats, bench press, pull-ups, dumbbell curls, and dumbbell shoulder press. Days 6-7 are for Rest or Active Recovery, including light cardio, stretching, and yoga. For a more specific back focus, Day 1 emphasizes Upper Back, with wide grip pull-ups, barbell rows, and seated cable rows. Day 2 targets Lower Back, with deadlifts, hyperextensions, and kettlebell swings, while Day 3 focuses on Full Back & Posture, featuring wide grip lat pulldowns and dumbbell rows.",
      titleGuid: "Kettlebell workout for total body strength",
      titleGuidImg: "Kettlebell training",
      specialFeature: "Total body focus",
      icon: "🏋️‍♂️",
      fullDetails: {
        overview: "A kettlebell training program to develop strength and endurance.",
        includes: [
          "Full-body kettlebell exercises",
          "Strength-building and conditioning drills",
          "Focus on explosive power and core strength",
          "Program designed for intermediate to advanced fitness levels"
        ],
        prerequisite: "Experience with kettlebell exercises.",
        equipment: "Kettlebell",
        price: "FREE",
        benefits: [
          "Boosts total body strength",
          "Enhances endurance",
          "Improves coordination",
          "Targets core and stability muscles"
        ]
      }
    },
    18: {
      id: 18,
      title: "Tabata workout for fat loss",
      description: "A high-intensity interval training program following the Tabata method to burn fat and increase cardiovascular health.",
      duration: "4 weeks",
      intensity: "High",
      videoIframe:"https://www.youtube.com/embed/zgfcOWuTeYA",
      programImg: "/img/img18.png",
      imagecover: "https://img.freepik.com/photos-gratuite/gros-plan-entrainement-athletes_23-2150845460.jpg?t=st=1738772339~exp=1738775939~hmac=409281cba2d8eed4cfe615da03d5ffa071668478cae778dcdd7333347251169e&w=740",
      guid: "This back workout program targets different areas of the back to improve strength and posture. Day 1 focuses on the Upper Back with wide grip pull-ups, barbell rows, and seated cable rows to target the lats, mid-back, and traps. Day 2 emphasizes the Lower Back with deadlifts, hyperextensions, and kettlebell swings, engaging the lower back, glutes, and hamstrings. Day 3 is a Full Back & Posture Focus, incorporating wide grip lat pulldowns to target the lats and upper back, along with dumbbell rows to engage the upper back and lats for better muscle development and posture.",
      titleGuid: "Tabata workout for fat loss",
      titleGuidImg: "Tabata training",
      specialFeature: "Maximizes fat loss",
      icon: "🔥",
      fullDetails: {
        overview: "A Tabata-based workout program for fat loss and endurance.",
        includes: [
          "High-intensity intervals",
          "Fat burning and cardiovascular conditioning",
          "Work-rest cycle to increase intensity",
          "Program suitable for all levels"
        ],
        prerequisite: "None.",
        equipment: "None, Bodyweight",
        price: "FREE",
        benefits: [
          "Maximizes fat loss",
          "Improves cardiovascular fitness",
          "Boosts metabolism",
          "Quick and effective"
        ]
      }
    },
    19: {
      id: 19,
      title: "Stretching for mobility and flexibility",
      description: "A mobility and flexibility program focusing on stretching techniques to improve joint health.",
      duration: "6 weeks",
      intensity: "Low",
      videoIframe: "https://www.youtube.com/embed/aJ1aGlWQHJ4",
      programImg: "/img/img19.png",
      imagecover: "https://img.freepik.com/photos-gratuite/homme-fort-cloture_144627-8474.jpg?t=st=1738771979~exp=1738775579~hmac=50d7123822ff5cef96bde6d8143ec2d305fc1cdbeefc9f1463e58b5e8f69a90f&w=740",
      guid: " This back and shoulder workout program is designed to build strength and size. Day 1 focuses on both back and shoulders, with wide grip pull-ups targeting the lats and upper back, barbell overhead presses for shoulder and trap development, dumbbell lateral raises for broader shoulders, and face pulls to engage the rear delts and improve shoulder stability. Day 2 emphasizes back strength, with deadlifts to work the lower back, glutes, and hamstrings, T-bar rows to focus on the mid-back and traps, and lat pulldowns to target the lats. Day 3 focuses on shoulders, including Arnold presses to engage all parts of the shoulders, barbell shrugs to build traps, and reverse pec deck exercises to target the rear delts and improve shoulder balance. This balanced program promotes overall back and shoulder strength and muscle development.",
      titleGuid: "Stretching for mobility and flexibility",
      titleGuidImg: "Stretching techniques",
      specialFeature: "Mobility improvement",
      icon: "🧘‍♀️",
      fullDetails: {
        overview: "A program designed to enhance flexibility and mobility.",
        includes: [
          "Joint mobility exercises",
          "Flexibility-building routines",
          "Daily stretching techniques",
          "Suitable for all fitness levels"
        ],
        prerequisite: "None.",
        equipment: "None",
        price: "FREE",
        benefits: [
          "Increases flexibility",
          "Improves joint health",
          "Prevents injury",
          "Enhances muscle recovery"
        ]
      }
    },
    20: {
      id: 20,
      title: "Dance cardio workout for fun fat loss",
      description: "A dance-based cardio workout program that makes fat loss fun and engaging.",
      duration: "6 weeks",
      intensity: "Medium",
      videoIframe: "https://www.youtube.com/embed/VAvVpAABrTs",
      programImg: "/img/img20.png",
      imagecover: "https://img.freepik.com/free-photo/strong-man-fence-with-chains_144627-8463.jpg?t=st=1738773075~exp=1738776675~hmac=45799f7ae2c4957783c2ffa3c93440506d49218d9785cec1ea8842db7a6c175d&w=900",
      guid: " This back workout program targets all areas of the back for well-rounded muscle development. Day 1 focuses on the upper back, with wide grip pull-ups to target the lats and upper back, barbell rows to work the mid-back, rhomboids, and traps, lat pulldowns to mimic pull-ups on a machine, and single-arm dumbbell rows to isolate each side of the back. Day 2 targets the mid and lower back, with deadlifts for full-body strength, T-bar rows for the mid-back and rhomboids, cable rows for adjustable resistance, and hyperextensions to strengthen the lower back and improve posture. Day 3 provides a full back focus, including seated cable rows and dumbbell rows to work the middle and upper back, chest-supported rows to isolate the upper and mid-back, and face pulls to target the rear delts and upper back for improved posture. This comprehensive routine ensures a complete back workout for maximum strength and definition.",
      titleGuid: "Dance cardio workout for fun fat loss",
      titleGuidImg: "Dance workout",
      specialFeature: "Fun and energetic",
      icon: "💃",
      fullDetails: {
        overview: "A fun, high-energy cardio workout program.",
        includes: [
          "Dance-based fat burning movements",
          "Cardiovascular conditioning",
          "Music-driven workouts",
          "Program for all fitness levels"
        ],
        prerequisite: "None.",
        equipment: "None, Bodyweight",
        price: "FREE",
        benefits: [
          "Burns fat quickly",
          "Improves cardiovascular fitness",
          "Boosts mood and energy",
          "Great for all ages"
        ]
      }
    }
  };
  
// Separate TabButton component for better reusability
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 capitalize transition-all duration-300 border-b-2 ${
      active 
      ? 'text-[#faa307] border-[#faa307] font-medium' 
      : 'text-gray-400 border-transparent hover:text-gray-200'
    }`}
  >
    {children}
  </button>
);

// Info card component for program details
const InfoCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl transition-all duration-300 hover:bg-white/10">
    <Icon className="text-[#faa307]" size={24} />
    <div>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-white">{value}</div>
    </div>
  </div>
);

const DetailsProgrammes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const program = programsData[id];

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!program) {
    return (
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-[#faa307] font-bold">Program Not Found</h1>
          <p className="text-gray-400">The program you’re looking for doesn’t exist.</p>
          <button 
            onClick={() => navigate('/programs')}
            className="bg-[#faa307] text-black px-6 py-3 rounded-lg hover:bg-[#faa307]/90 transition-all duration-300 flex items-center mx-auto"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Programs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="text-white">About</span>{' '}
            <span className="text-[#faa307]">Program</span>
          </h1>
          <button 
            onClick={() => navigate('/programs')} 
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 p-8">
            {/* Sidebar */}
            <div className="md:col-span-1 bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:border-[#faa307]/30">
              <div className="text-6xl text-center mb-8 animate-bounce">{program.icon}</div>
              <h1 className="text-3xl font-bold text-[#faa307] text-center mb-4">{program.title}</h1>
              <p className="text-gray-400 text-center mb-8">{program.description}</p>
              
              <div className="space-y-4">
                <InfoCard icon={Clock} label="Duration" value={program.duration} />
                <InfoCard icon={Zap} label="Intensity" value={program.intensity} />
                <InfoCard icon={Star} label="Special Feature" value={program.specialFeature || 'Standard Program'} />
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div className="flex border-b border-gray-700">
                {['overview', 'includes', 'benefits'].map((tab) => (
                  <TabButton
                    key={tab}
                    active={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </TabButton>
                ))}
              </div>

              <div className="min-h-[200px]">
                {activeTab === 'overview' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h2 className="text-2xl font-semibold text-[#faa307]">Program Overview</h2>
                    <p className="text-gray-300 leading-relaxed">{program.fullDetails.overview}</p>
                  </div>
                )}

                {activeTab === 'includes' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h2 className="text-2xl font-semibold text-[#faa307]">What’s Included</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {program.fullDetails.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-300 bg-white/5 p-4 rounded-xl">
                          <Check className="mr-3 text-[#faa307] flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h2 className="text-2xl font-semibold text-[#faa307]">Program Benefits</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {program.fullDetails.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300 bg-white/5 p-4 rounded-xl">
                          <Trophy className="mr-3 text-[#faa307] flex-shrink-0" /> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src={program.imagecover} 
                  alt="workout" 
                  className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#faa307] flex items-center">
                    <CreditCard className="mr-2" /> {program.fullDetails.price}
                  </span>
                  <Link 
                    to="/workout" 
                    className="bg-[#faa307] text-black px-8 py-3 rounded-lg hover:bg-[#faa307]/90 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 space-y-10">
            <div className="relative rounded-2xl overflow-hidden">
              {!isVideoPlaying ? (
                <div className="relative cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                  <img 
                    src={program.imagecover} 
                    alt="video thumbnail" 
                    className="w-full h-[550px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#faa307]/90 flex items-center justify-center animate-pulse">
                      <Play size={40} className="text-black ml-2" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="550"
                  src={program.videoIframe}
                  title="Workout Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            <div className="space-y-6 text-center">
              <h1 className="text-3xl font-bold text-[#faa307]">{program.titleGuid}</h1>
              <img 
                src={program.programImg} 
                alt="workout" 
                className="mx-auto lg:w-[50%] w-full rounded-2xl shadow-lg"
              />
              <p className="text-gray-300 bg-white/5 p-6 rounded-xl leading-relaxed max-w-4xl mx-auto">
                {program.guid}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProgrammes;