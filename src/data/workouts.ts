export type Category = 'beginner' | 'intermediate' | 'advanced';
export type Goal = 'muscle-gain' | 'fat-loss' | 'strength' | 'ppl';

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  notes?: string;
}

export interface WorkoutPlan {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: Category;
  goals: Goal[];
  duration: string;
  daysPerWeek: number;
  difficulty: number;
  image: string;
  exercises: Exercise[];
}

export const CATEGORIES: Record<Category, { label: string; slug: string; description: string }> = {
  beginner: { label: 'Beginner', slug: 'beginner', description: 'Just starting out? Build a solid foundation.' },
  intermediate: { label: 'Intermediate', slug: 'intermediate', description: 'Ready to level up your training.' },
  advanced: { label: 'Advanced', slug: 'advanced', description: 'For seasoned athletes pushing their limits.' },
};

export const GOALS: Record<Goal, { label: string; slug: string; description: string }> = {
  'muscle-gain': { label: 'Muscle Gain', slug: 'muscle-gain', description: 'Build lean mass and size.' },
  'fat-loss': { label: 'Fat Loss', slug: 'fat-loss', description: 'Shred fat and get defined.' },
  strength: { label: 'Strength', slug: 'strength', description: 'Move heavier weight, get powerful.' },
  ppl: { label: 'Push Pull Legs', slug: 'ppl', description: 'The classic split for serious gains.' },
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80`;

export const WORKOUTS: WorkoutPlan[] = [
  {
    id: '1',
    slug: 'full-body-foundation',
    title: 'Full Body Foundation',
    subtitle: 'Build your base with full-body training',
    description:
      'A beginner-friendly full body program that hits every major muscle group 3 days a week. Learn the fundamental movement patterns, build a base of strength, and develop clean form that carries into every future program.',
    category: 'beginner',
    goals: ['strength', 'muscle-gain'],
    duration: '6 weeks',
    daysPerWeek: 3,
    difficulty: 1,
    image: img('photo-1534438327275-aea6d88d1e4d'),
    exercises: [
      { name: 'Barbell Squat', sets: 3, reps: '8-10', rest: '90s', notes: 'Keep chest up, knees tracking over toes.' },
      { name: 'Dumbbell Bench Press', sets: 3, reps: '8-12', rest: '75s' },
      { name: 'Bent-Over Row', sets: 3, reps: '8-10', rest: '75s', notes: 'Squeeze shoulder blades together.' },
      { name: 'Overhead Press', sets: 3, reps: '8-12', rest: '60s' },
      { name: 'Plank', sets: 3, reps: '30-45s', rest: '45s', notes: 'Brace core, don\'t let hips sag.' },
    ],
  },
  {
    id: '2',
    slug: 'beginner-fat-burner',
    title: 'Beginner Fat Burner',
    subtitle: 'High-energy circuits to torch fat',
    description:
      'A circuit-based program designed for beginners who want to lose fat while building a fitness base. Short on time, high on intensity — each session blends resistance training with metabolic conditioning.',
    category: 'beginner',
    goals: ['fat-loss'],
    duration: '4 weeks',
    daysPerWeek: 4,
    difficulty: 1,
    image: img('photo-1571019613454-1cb2f99b2d8b'),
    exercises: [
      { name: 'Goblet Squat', sets: 4, reps: '12', rest: '45s' },
      { name: 'Push-Up', sets: 4, reps: '10-12', rest: '45s', notes: 'Drop to knees if needed.' },
      { name: 'Kettlebell Swing', sets: 4, reps: '15', rest: '45s' },
      { name: 'Mountain Climbers', sets: 4, reps: '30s', rest: '30s' },
      { name: 'Jumping Jacks', sets: 4, reps: '45s', rest: '30s' },
    ],
  },
  {
    id: '3',
    slug: 'core-and-conditioning',
    title: 'Core & Conditioning',
    subtitle: 'Strengthen your center',
    description:
      'A beginner program focused on building a rock-solid core and improving overall conditioning. Perfect for those returning to fitness or building a base for more intense training.',
    category: 'beginner',
    goals: ['fat-loss', 'strength'],
    duration: '5 weeks',
    daysPerWeek: 3,
    difficulty: 1,
    image: img('photo-1605296867304-46d5465a13ef'),
    exercises: [
      { name: 'Dead Bug', sets: 3, reps: '10/side', rest: '30s' },
      { name: 'Bird Dog', sets: 3, reps: '10/side', rest: '30s' },
      { name: 'Russian Twist', sets: 3, reps: '15', rest: '30s' },
      { name: 'Bicycle Crunch', sets: 3, reps: '20', rest: '30s' },
      { name: 'Side Plank', sets: 3, reps: '20s/side', rest: '30s' },
    ],
  },
  {
    id: '4',
    slug: 'hypertrophy-builder',
    title: 'Hypertrophy Builder',
    subtitle: 'Pack on serious muscle mass',
    description:
      'An intermediate hypertrophy-focused split designed to maximize muscle growth. Higher volume, controlled tempo, and strategic exercise selection drive growth across every muscle group.',
    category: 'intermediate',
    goals: ['muscle-gain'],
    duration: '8 weeks',
    daysPerWeek: 5,
    difficulty: 2,
    image: img('photo-1581009145309-3d820f685b47'),
    exercises: [
      { name: 'Incline Dumbbell Press', sets: 4, reps: '8-12', rest: '75s' },
      { name: 'Lat Pulldown', sets: 4, reps: '8-12', rest: '75s' },
      { name: 'Leg Press', sets: 4, reps: '10-15', rest: '90s' },
      { name: 'Dumbbell Lateral Raise', sets: 4, reps: '12-15', rest: '45s' },
      { name: 'Cable Fly', sets: 3, reps: '12-15', rest: '60s', notes: 'Focus on the stretch.' },
      { name: 'Hammer Curl', sets: 3, reps: '10-12', rest: '45s' },
    ],
  },
  {
    id: '5',
    slug: 'intermediate-strength',
    title: 'Intermediate Strength',
    subtitle: 'Move heavier, get powerful',
    description:
      'A structured strength program built around the big compound lifts. Progressive overload on squats, deadlifts, bench, and overhead press will push your numbers up week after week.',
    category: 'intermediate',
    goals: ['strength'],
    duration: '10 weeks',
    daysPerWeek: 4,
    difficulty: 2,
    image: img('photo-1530549387789-4c1017266635'),
    exercises: [
      { name: 'Back Squat', sets: 5, reps: '5', rest: '180s', notes: 'RPE 7-8, add weight weekly.' },
      { name: 'Deadlift', sets: 3, reps: '5', rest: '180s' },
      { name: 'Bench Press', sets: 5, reps: '5', rest: '150s' },
      { name: 'Overhead Press', sets: 4, reps: '6', rest: '150s' },
      { name: 'Weighted Pull-Up', sets: 4, reps: '6-8', rest: '120s' },
    ],
  },
  {
    id: '6',
    slug: 'shred-circuit',
    title: 'Shred Circuit',
    subtitle: 'Burn fat, keep the muscle',
    description:
      'An intermediate fat-loss program that combines resistance training with high-intensity intervals. Designed to preserve muscle while maximizing calorie burn and metabolic rate.',
    category: 'intermediate',
    goals: ['fat-loss'],
    duration: '6 weeks',
    daysPerWeek: 4,
    difficulty: 2,
    image: img('photo-1517836357463-d25dfe029c38'),
    exercises: [
      { name: 'Dumbbell Thruster', sets: 4, reps: '12', rest: '60s' },
      { name: 'Box Jump', sets: 4, reps: '10', rest: '60s' },
      { name: 'Rowing Machine Sprint', sets: 4, reps: '250m', rest: '60s' },
      { name: 'Burpee', sets: 4, reps: '12', rest: '60s' },
      { name: 'Battle Ropes', sets: 4, reps: '30s', rest: '45s' },
    ],
  },
  {
    id: '7',
    slug: 'ppl-intermediate',
    title: 'Push Pull Legs',
    subtitle: 'The classic 6-day split',
    description:
      'The Push Pull Legs split done right. Six days a week, hitting each movement pattern twice for maximum volume and recovery. A proven structure for serious intermediate lifters.',
    category: 'intermediate',
    goals: ['ppl', 'muscle-gain'],
    duration: '12 weeks',
    daysPerWeek: 6,
    difficulty: 2,
    image: img('photo-1583454110551-9f9f6f4b3e3e'),
    exercises: [
      { name: 'Bench Press', sets: 4, reps: '6-8', rest: '120s' },
      { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
      { name: 'Weighted Dip', sets: 3, reps: '8-12', rest: '90s' },
      { name: 'Deadlift', sets: 4, reps: '5', rest: '180s' },
      { name: 'Pull-Up', sets: 4, reps: '8-10', rest: '90s' },
      { name: 'Back Squat', sets: 4, reps: '6-8', rest: '150s' },
    ],
  },
  {
    id: '8',
    slug: 'powerlifting-peak',
    title: 'Powerlifting Peak',
    subtitle: 'Maximize your 1RM',
    description:
      'An advanced peaking program for lifters preparing for a powerlifting meet or a new personal record. Heavy triples, doubles, and singles on the competition lifts with strategic deload.',
    category: 'advanced',
    goals: ['strength'],
    duration: '12 weeks',
    daysPerWeek: 4,
    difficulty: 3,
    image: img('photo-1517963879397-7595420e048b'),
    exercises: [
      { name: 'Competition Squat', sets: 5, reps: '3', rest: '240s', notes: 'Work up to 90% 1RM.' },
      { name: 'Paused Bench Press', sets: 4, reps: '3', rest: '180s' },
      { name: 'Deficit Deadlift', sets: 4, reps: '3', rest: '240s' },
      { name: 'Front Squat', sets: 3, reps: '5', rest: '150s' },
      { name: 'Close-Grip Bench', sets: 4, reps: '6', rest: '120s' },
    ],
  },
  {
    id: '9',
    slug: 'advanced-hypertrophy',
    title: 'Advanced Hypertrophy',
    subtitle: 'Sculpt a championship physique',
    description:
      'An advanced bodybuilding split with high volume, intensity techniques, and strategic exercise order. Drop sets, rest-pause, and supersets push past plateaus for elite-level muscle growth.',
    category: 'advanced',
    goals: ['muscle-gain'],
    duration: '16 weeks',
    daysPerWeek: 6,
    difficulty: 3,
    image: img('photo-1567013127542-490d757e51b9'),
    exercises: [
      { name: 'Barbell Bench Press', sets: 5, reps: '6-8', rest: '90s' },
      { name: 'Incline Dumbbell Press', sets: 4, reps: '10-12', rest: '75s' },
      { name: 'Machine Chest Press', sets: 4, reps: '12-15', rest: '60s', notes: 'Drop set on last set.' },
      { name: 'Cable Crossover', sets: 4, reps: '15-20', rest: '45s' },
      { name: 'Triceps Pushdown', sets: 4, reps: '12-15', rest: '45s' },
      { name: 'Overhead Extension', sets: 3, reps: '12-15', rest: '45s' },
    ],
  },
  {
    id: '10',
    slug: 'elite-fat-loss',
    title: 'Elite Fat Loss',
    subtitle: 'Get shredded, stay strong',
    description:
      'An advanced conditioning and fat-loss program that preserves strength while stripping body fat. Metabolic resistance training, finishers, and strategic cardio keep the intensity high.',
    category: 'advanced',
    goals: ['fat-loss'],
    duration: '8 weeks',
    daysPerWeek: 5,
    difficulty: 3,
    image: img('photo-1546483875-ad9014c88eba'),
    exercises: [
      { name: 'Barbell Complex', sets: 5, reps: '6 each', rest: '90s', notes: 'Squat, row, press, RDL.' },
      { name: 'Sled Push', sets: 5, reps: '20m', rest: '60s' },
      { name: 'Assault Bike Sprint', sets: 6, reps: '15s', rest: '45s' },
      { name: 'Farmer\'s Carry', sets: 4, reps: '40m', rest: '60s' },
      { name: 'Sandbag Clean', sets: 4, reps: '10', rest: '60s' },
    ],
  },
  {
    id: '11',
    slug: 'ppl-advanced',
    title: 'Advanced PPL',
    subtitle: 'Push Pull Legs, maxed out',
    description:
      'The PPL split taken to the advanced level. Higher frequency, higher volume, and intensity techniques on every push, pull, and leg day. Built for athletes who recover fast and train hard.',
    category: 'advanced',
    goals: ['ppl', 'muscle-gain'],
    duration: '12 weeks',
    daysPerWeek: 6,
    difficulty: 3,
    image: img('photo-1581009145309-3d820f685b47'),
    exercises: [
      { name: 'Weighted Dip', sets: 5, reps: '6-8', rest: '90s' },
      { name: 'Arnold Press', sets: 4, reps: '10-12', rest: '75s' },
      { name: 'Cable Lateral Raise', sets: 4, reps: '15-20', rest: '45s', notes: 'Rest-pause final set.' },
      { name: 'Weighted Pull-Up', sets: 5, reps: '6-8', rest: '90s' },
      { name: 'Pendlay Row', sets: 4, reps: '8-10', rest: '75s' },
      { name: 'Romanian Deadlift', sets: 4, reps: '8-10', rest: '90s' },
    ],
  },
  {
    id: '12',
    slug: 'athletic-performance',
    title: 'Athletic Performance',
    subtitle: 'Train like an elite athlete',
    description:
      'A performance-focused program combining strength, power, and conditioning for sport. Plyometrics, explosive lifts, and agility work build a body that performs as good as it looks.',
    category: 'advanced',
    goals: ['strength', 'fat-loss'],
    duration: '10 weeks',
    daysPerWeek: 5,
    difficulty: 3,
    image: img('photo-1461896844351-398d8b1212d3'),
    exercises: [
      { name: 'Box Jump', sets: 5, reps: '5', rest: '120s', notes: 'Max height, full recovery.' },
      { name: 'Power Clean', sets: 5, reps: '3', rest: '150s' },
      { name: 'Bulgarian Split Squat', sets: 4, reps: '8/leg', rest: '90s' },
      { name: 'Sled Sprint', sets: 6, reps: '20m', rest: '90s' },
      { name: 'Med Ball Slam', sets: 4, reps: '10', rest: '60s' },
    ],
  },
];

export const getWorkoutBySlug = (slug: string): WorkoutPlan | undefined =>
  WORKOUTS.find((w) => w.slug === slug);

export const filterWorkouts = (opts: { category?: Category; goal?: Goal } = {}): WorkoutPlan[] => {
  return WORKOUTS.filter((w) => {
    if (opts.category && w.category !== opts.category) return false;
    if (opts.goal && !w.goals.includes(opts.goal)) return false;
    return true;
  });
};
