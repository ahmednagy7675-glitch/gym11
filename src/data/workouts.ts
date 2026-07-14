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

export interface MealItem {
  label: string;
  items: string[];
}

export interface Meal {
  name: string;
  time: string;
  items: MealItem[];
}

export interface NutritionPlan {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: Category;
  duration: string;
  calories: string;
  image: string;
  meals: Meal[];
  extras: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}

export const CATEGORIES: Record<Category, { label: string; slug: string; description: string }> = {
  beginner: { label: 'Beginner', slug: 'beginner', description: 'Start strong with a solid foundation.' },
  intermediate: { label: 'Intermediate', slug: 'intermediate', description: 'Level up your training and nutrition.' },
  advanced: { label: 'Advanced', slug: 'advanced', description: 'For seasoned athletes pushing limits.' },
};

export const GOALS: Record<Goal, { label: string; slug: string; description: string }> = {
  'muscle-gain': { label: 'Muscle Gain', slug: 'muscle-gain', description: 'Build lean mass and size.' },
  'fat-loss': { label: 'Fat Loss', slug: 'fat-loss', description: 'Shred fat and get defined.' },
  strength: { label: 'Strength', slug: 'strength', description: 'Move heavier, get powerful.' },
  ppl: { label: 'Push Pull Legs', slug: 'ppl', description: 'The classic split for serious gains.' },
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80`;

export const WORKOUTS: WorkoutPlan[] = [
  {
    id: '1',
    slug: 'push-day',
    title: 'Push Day',
    subtitle: 'Chest · Shoulders · Triceps',
    description:
      'Day 1 of the Push Pull Legs split. Hit your chest, shoulders, and triceps with heavy compound pressing followed by isolation work for maximum hypertrophy. Rest 60–90 seconds between sets.',
    category: 'beginner',
    goals: ['muscle-gain', 'ppl', 'strength'],
    duration: '60 min',
    daysPerWeek: 6,
    difficulty: 2,
    image: img('photo-1571019613454-1cb2f99b2d8b'),
    exercises: [
      { name: 'Bench Press', sets: 3, reps: '10', rest: '90s', notes: 'Barbell — control the descent.' },
      { name: 'Incline Dumbbell Press', sets: 3, reps: '10', rest: '75s' },
      { name: 'Decline Dumbbell Press', sets: 3, reps: '10', rest: '75s' },
      { name: 'Fly Machine', sets: 3, reps: '12', rest: '60s', notes: 'Squeeze at the top.' },
      { name: 'Shoulder Press Machine', sets: 3, reps: '12', rest: '75s' },
      { name: 'Dumbbell Lateral Raises (Side)', sets: 3, reps: '12', rest: '60s' },
      { name: 'Dumbbell Lateral Raises (Front)', sets: 3, reps: '12', rest: '60s' },
      { name: 'Triceps Push Down', sets: 4, reps: '10', rest: '60s', notes: 'Cable — keep elbows pinned.' },
    ],
  },
  {
    id: '2',
    slug: 'pull-day',
    title: 'Pull Day',
    subtitle: 'Back · Biceps · Rear Delts',
    description:
      'Day 2 of the PPL split. Build a wide, thick back with vertical and horizontal pulls, then finish with biceps and rear delt work. Rest 60–90 seconds between sets.',
    category: 'intermediate',
    goals: ['muscle-gain', 'ppl', 'strength'],
    duration: '60 min',
    daysPerWeek: 6,
    difficulty: 2,
    image: img('photo-1534438327275-aea6d88d1e4d'),
    exercises: [
      { name: 'Lat Pulldown', sets: 4, reps: '8-10', rest: '90s' },
      { name: 'Seated Row', sets: 4, reps: '8-10', rest: '75s', notes: 'Cable — squeeze shoulder blades.' },
      { name: 'T-Bar Row', sets: 4, reps: '8-10', rest: '90s' },
      { name: 'Face Pull', sets: 4, reps: '12', rest: '45s' },
      { name: 'Barbell Row (Pendlay)', sets: 4, reps: '8-10', rest: '90s' },
      { name: 'Barbell Bicep Curl', sets: 3, reps: '12', rest: '60s', notes: 'Strict form, no swinging.' },
      { name: 'Hammer Curl (Dumbbell)', sets: 3, reps: '12', rest: '60s' },
    ],
  },
  {
    id: '3',
    slug: 'legs-day',
    title: 'Legs Day',
    subtitle: 'Quads · Hamstrings · Calves',
    description:
      'Day 3 of the PPL split. Destroy your lower body with squats, presses, and isolation work, then finish with 10 minutes of cardio. Rest 90–120 seconds between heavy sets.',
    category: 'advanced',
    goals: ['strength', 'ppl', 'fat-loss'],
    duration: '70 min',
    daysPerWeek: 6,
    difficulty: 3,
    image: img('photo-1530549387789-4c1017266635'),
    exercises: [
      { name: 'Leg Press (Machine)', sets: 4, reps: '10-12', rest: '90s', notes: 'Full range of motion.' },
      { name: 'Bodyweight Squat', sets: 2, reps: '15', rest: '45s', notes: 'Warm-up / activation.' },
      { name: 'Leg Extension', sets: 3, reps: '12', rest: '60s', notes: 'Squeeze quads at the top.' },
      { name: 'Leg Curl (Hamstrings)', sets: 3, reps: '12', rest: '60s' },
      { name: 'Calf Raise (Machine)', sets: 4, reps: '15', rest: '45s', notes: 'Full stretch and contraction.' },
      { name: 'Treadmill Run', sets: 1, reps: '10 min', rest: '—', notes: 'Steady-state cardio to finish.' },
    ],
  },
];

export const NUTRITION_PLANS: NutritionPlan[] = [
  {
    id: '1',
    slug: 'beginner-plan',
    title: 'Beginner Nutrition',
    subtitle: 'Simple meals to start your journey',
    description:
      'A straightforward meal plan to build healthy eating habits. Four balanced meals plus a free day each week. Drink 4 liters of water daily.',
    category: 'beginner',
    duration: '20 days',
    calories: '~2,200 kcal',
    image: img('photo-1490645935447-4f59d31e9abb'),
    meals: [
      {
        name: 'Meal 1 — Breakfast',
        time: '8:00 AM',
        items: [
          { label: 'Eggs', items: ['2 whole eggs'] },
          { label: 'Carbs', items: ['2 slices toast'] },
          { label: 'Protein', items: ['Cottage cheese'] },
        ],
      },
      {
        name: 'Meal 2 — Pre-Workout',
        time: '11:00 AM',
        items: [
          { label: 'Fruit', items: ['1 banana', '2 dates'] },
          { label: 'Drink', items: ['1 cup black coffee or Nescafé'] },
        ],
      },
      {
        name: 'Meal 3 — Post-Workout',
        time: '1:30 PM',
        items: [
          { label: 'Carbs', items: ['100g rice'] },
          { label: 'Protein', items: ['200g chicken breast, chicken liver, or tuna'] },
          { label: 'Veggies', items: ['1 plate salad'] },
        ],
      },
      {
        name: 'Snack',
        time: '5:00 PM',
        items: [
          { label: 'Nuts', items: ['Cashews, almonds, or peanuts'] },
          { label: 'Fruit', items: ['Watermelon, grapes, apple, or banana'] },
        ],
      },
    ],
    extras: [
      '1 free day per week — enjoy your favorite meal!',
      'Drink 4 liters of water daily',
      '2 cups of parsley + celery juice daily',
    ],
  },
  {
    id: '2',
    slug: 'intermediate-plan',
    title: 'Intermediate Nutrition',
    subtitle: 'Precision fuel for serious gains',
    description:
      'A higher-protein, portion-controlled plan with 5 meals across the day. Designed to fuel intense training and optimize recovery. Drink 4 liters of water daily.',
    category: 'intermediate',
    duration: '20 days',
    calories: '~2,600 kcal',
    image: img('photo-1546069901-ba9599a7e93c'),
    meals: [
      {
        name: 'Meal 1 — Breakfast',
        time: '7:30 AM',
        items: [
          { label: 'Eggs', items: ['3 eggs (2 whole, 1 white)'] },
          { label: 'Carbs', items: ['70g oats'] },
          { label: 'Extras', items: ['1 banana + peanut butter + 1 cup milk'] },
        ],
      },
      {
        name: 'Pre-Workout',
        time: '10:30 AM',
        items: [
          { label: 'Fruit', items: ['1 banana', '2 dates'] },
          { label: 'Drink', items: ['1 cup black coffee or Nescafé'] },
        ],
      },
      {
        name: 'Meal 2 — Post-Workout',
        time: '1:00 PM',
        items: [
          { label: 'Carbs', items: ['80g rice'] },
          { label: 'Protein', items: ['100g chicken breast'] },
          { label: 'Veggies', items: ['1 plate salad'] },
        ],
      },
      {
        name: 'Meal 3 — Snack',
        time: '4:30 PM',
        items: [
          { label: 'Fruit', items: ['Watermelon, strawberries, grapes, or apple'] },
          { label: 'Nuts', items: ['Cashews, peanuts, or almonds'] },
        ],
      },
      {
        name: 'Meal 4 — Dinner',
        time: '7:30 PM',
        items: [
          { label: 'Carbs', items: ['Baked potato or 50g basmati rice'] },
          { label: 'Protein', items: ['150g — grilled fish, chicken liver, beef liver, tuna, or chicken breast'] },
          { label: 'Veggies', items: ['1 plate salad'] },
        ],
      },
      {
        name: 'Before Bed',
        time: '10:00 PM',
        items: [{ label: 'Dairy', items: ['Light yogurt'] }],
      },
    ],
    extras: [
      '1 free meal per week',
      'Drink 4 liters of water daily',
      '2 cups of parsley + celery juice daily',
    ],
  },
  {
    id: '3',
    slug: 'advanced-plan',
    title: 'Advanced Nutrition',
    subtitle: 'Elite-level nutrition for peak performance',
    description:
      'A precision macro plan with 5 structured meals and a pre-bed casein source. Built for athletes chasing maximum muscle and minimal fat. Drink 4 liters of water daily.',
    category: 'advanced',
    duration: '20 days',
    calories: '~2,800 kcal',
    image: img('photo-1512621776951-5712f7c57e88'),
    meals: [
      {
        name: 'Meal 1 — Breakfast',
        time: '7:00 AM',
        items: [
          { label: 'Carbs', items: ['2 slices brown toast'] },
          { label: 'Eggs', items: ['5 eggs'] },
          { label: 'Veggies', items: ['1 plate salad'] },
          { label: 'Drink', items: ['1 cup black coffee or Nescafé'] },
        ],
      },
      {
        name: 'Meal 2 — Lunch',
        time: '12:00 PM',
        items: [
          { label: 'Carbs', items: ['120g rice'] },
          { label: 'Protein', items: ['150g chicken breast or tuna'] },
          { label: 'Veggies', items: ['Salad — parsley, cucumber, carrot, tomato'] },
        ],
      },
      {
        name: 'Meal 3 — Snack',
        time: '4:00 PM',
        items: [
          { label: 'Fruit', items: ['1 apple', '1 banana'] },
          { label: 'Nuts', items: ['Peanuts, almonds, or cashews'] },
        ],
      },
      {
        name: 'Meal 4 — Dinner',
        time: '7:30 PM',
        items: [
          { label: 'Carbs', items: ['150g basmati rice'] },
          { label: 'Protein', items: ['150g — beef, chicken liver, beef liver, grilled fish, or tuna'] },
          { label: 'Veggies', items: ['1 large plate salad'] },
        ],
      },
      {
        name: 'Before Bed',
        time: '10:00 PM',
        items: [
          { label: 'Option A', items: ['1 plate cottage cheese'] },
          { label: 'Option B', items: ['Light yogurt + 2 whole eggs'] },
        ],
      },
    ],
    extras: [
      'Drink 4 liters of water daily',
      '2 cups of parsley + celery juice daily',
      'Follow for 20 days alongside the PPL training program',
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1',
    name: '1 Month',
    price: '2,500',
    period: 'EGP / month',
    description: 'Perfect for trying out online coaching.',
    features: ['Full PPL workout program', 'Personalized nutrition plan', 'Form check via video', 'WhatsApp support'],
  },
  {
    id: '2',
    name: '2 Months',
    price: '4,000',
    originalPrice: '5,000',
    period: 'EGP',
    description: 'Best value for visible results.',
    features: [
      'Everything in 1 Month',
      'Bi-weekly progress tracking',
      'Plan adjustments every 2 weeks',
      'Priority support',
    ],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: '3',
    name: '3 Months',
    price: '6,000',
    originalPrice: '7,500',
    period: 'EGP',
    description: 'Full transformation package.',
    features: [
      'Everything in 2 Months',
      'Weekly check-ins',
      'Custom supplement guidance',
      'Lifetime access to plan library',
    ],
  },
];

export const getWorkoutBySlug = (slug: string): WorkoutPlan | undefined =>
  WORKOUTS.find((w) => w.slug === slug);

export const getNutritionBySlug = (slug: string): NutritionPlan | undefined =>
  NUTRITION_PLANS.find((n) => n.slug === slug);
