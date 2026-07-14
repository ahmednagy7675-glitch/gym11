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
  beginner: { label: 'مبتدئ', slug: 'beginner', description: 'ابدأ بقوة مع أساس متين.' },
  intermediate: { label: 'متوسط', slug: 'intermediate', description: 'ارتقِ بتدريبك وتغذيتك للمستوى التالي.' },
  advanced: { label: 'متقدم', slug: 'advanced', description: 'للرياضيين المخضرمين الذين يتخطون الحدود.' },
};

export const GOALS: Record<Goal, { label: string; slug: string; description: string }> = {
  'muscle-gain': { label: 'زيادة الكتلة', slug: 'muscle-gain', description: 'ابنِ عضلات صافية وحجم.' },
  'fat-loss': { label: 'حرق الدهون', slug: 'fat-loss', description: 'تخلص من الدهون وبرز عضلاتك.' },
  strength: { label: 'القوة', slug: 'strength', description: 'ارفع أوزان أثقل واصبح أقوى.' },
  ppl: { label: 'Push Pull Legs', slug: 'ppl', description: 'التقسيم الكلاسيكي لمضاعفة المكاسب.' },
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80`;

export const WORKOUTS: WorkoutPlan[] = [
  {
    id: '1',
    slug: 'push-day',
    title: 'يوم Push',
    subtitle: 'صدر · أكتاف · ترايسبس',
    description:
      'اليوم الأول من تقسيم Push Pull Legs. استهدف الصدر والأكتاف والترايسبس بضغط مركب ثقيل متبوع بتمارين عزل لأقصى تضخم. راحة 60-90 ثانية بين المجموعات.',
    category: 'beginner',
    goals: ['muscle-gain', 'ppl', 'strength'],
    duration: '60 دقيقة',
    daysPerWeek: 6,
    difficulty: 2,
    image: img('photo-1571019613454-1cb2f99b2d8b'),
    exercises: [
      { name: 'Bench Press', sets: 3, reps: '10', rest: '90ث', notes: 'بار — تحكم في النزول.' },
      { name: 'Incline Dumbbell Press', sets: 3, reps: '10', rest: '75ث' },
      { name: 'Decline Dumbbell Press', sets: 3, reps: '10', rest: '75ث' },
      { name: 'Fly Machine', sets: 3, reps: '12', rest: '60ث', notes: 'اعصر في الأعلى.' },
      { name: 'Shoulder Press Machine', sets: 3, reps: '12', rest: '75ث' },
      { name: 'Dumbbell Lateral Raises (Side)', sets: 3, reps: '12', rest: '60ث' },
      { name: 'Dumbbell Lateral Raises (Front)', sets: 3, reps: '12', rest: '60ث' },
      { name: 'Triceps Push Down', sets: 4, reps: '10', rest: '60ث', notes: 'كايل — ثبّت المرفقين.' },
    ],
  },
  {
    id: '2',
    slug: 'pull-day',
    title: 'يوم Pull',
    subtitle: 'ظهر · بايسبس · ديلت خلفي',
    description:
      'اليوم الثاني من تقسيم PPL. ابنِ ظهراً عريضاً وسميكاً بتمارين سحب عمودية وأفقية، ثم أنهي بتمارين البايسبس والديلت الخلفي. راحة 60-90 ثانية بين المجموعات.',
    category: 'intermediate',
    goals: ['muscle-gain', 'ppl', 'strength'],
    duration: '60 دقيقة',
    daysPerWeek: 6,
    difficulty: 2,
    image: img('photo-1534438327275-aea6d88d1e4d'),
    exercises: [
      { name: 'Lat Pulldown', sets: 4, reps: '8-10', rest: '90ث' },
      { name: 'Seated Row', sets: 4, reps: '8-10', rest: '75ث', notes: 'كايل — اعصر لوحي الكتف.' },
      { name: 'T-Bar Row', sets: 4, reps: '8-10', rest: '90ث' },
      { name: 'Face Pull', sets: 4, reps: '12', rest: '45ث' },
      { name: 'Barbell Row (Pendlay)', sets: 4, reps: '8-10', rest: '90ث' },
      { name: 'Barbell Bicep Curl', sets: 3, reps: '12', rest: '60ث', notes: 'شكل صارم، بدون تأرجح.' },
      { name: 'Hammer Curl (Dumbbell)', sets: 3, reps: '12', rest: '60ث' },
    ],
  },
  {
    id: '3',
    slug: 'legs-day',
    title: 'يوم الأرجل',
    subtitle: 'أمامي · خلفي · سمانة',
    description:
      'اليوم الثالث من تقسيم PPL. دمّر الجزء السفلي بتمارين سكوات وضغط وعزل، ثم أنهي بـ 10 دقائق كارديو. راحة 90-120 ثانية بين المجموعات الثقيلة.',
    category: 'advanced',
    goals: ['strength', 'ppl', 'fat-loss'],
    duration: '70 دقيقة',
    daysPerWeek: 6,
    difficulty: 3,
    image: img('photo-1530549387789-4c1017266635'),
    exercises: [
      { name: 'Leg Press (Machine)', sets: 4, reps: '10-12', rest: '90ث', notes: 'مدى حركة كامل.' },
      { name: 'Bodyweight Squat', sets: 2, reps: '15', rest: '45ث', notes: 'إحماء / تفعيل.' },
      { name: 'Leg Extension', sets: 3, reps: '12', rest: '60ث', notes: 'اعصر الأمامي في الأعلى.' },
      { name: 'Leg Curl (Hamstrings)', sets: 3, reps: '12', rest: '60ث' },
      { name: 'Calf Raise (Machine)', sets: 4, reps: '15', rest: '45ث', notes: 'تمدد و انقباض كامل.' },
      { name: 'Treadmill Run', sets: 1, reps: '10 دقائق', rest: '—', notes: 'كارديو ثابت للإنهاء.' },
    ],
  },
];

export const NUTRITION_PLANS: NutritionPlan[] = [
  {
    id: '1',
    slug: 'beginner-plan',
    title: 'تغذية المبتدئين',
    subtitle: 'وجبات بسيطة لبدء رحلتك',
    description:
      'نظام غذائي مبسط لبناء عادات صحية. أربع وجبات متوازنة بالإضافة ليوم حر أسبوعياً. اشرب 4 لتر ماء يومياً.',
    category: 'beginner',
    duration: '20 يوم',
    calories: '~2,200 سعرة',
    image: img('photo-1490645935447-4f59d31e9eabb'),
    meals: [
      {
        name: 'الوجبة الأولى — الإفطار',
        time: '8:00 ص',
        items: [
          { label: 'بيض', items: ['2 بيضة كاملة'] },
          { label: 'كربوهيدرات', items: ['2 شريحة توست'] },
          { label: 'بروتين', items: ['جبنة قريش'] },
        ],
      },
      {
        name: 'الوجبة الثانية — قبل التمرين',
        time: '11:00 ص',
        items: [
          { label: 'فاكهة', items: ['1 موزة', '2 بلحة'] },
          { label: 'مشروب', items: ['1 كوب قهوة سادة أو نسكافيه'] },
        ],
      },
      {
        name: 'الوجبة الثالثة — بعد التمرين',
        time: '1:30 م',
        items: [
          { label: 'كربوهيدرات', items: ['100 جرام رز'] },
          { label: 'بروتين', items: ['200 جرام صدور دجاج أو كبده دجاج أو تونة'] },
          { label: 'خضار', items: ['1 طبق سلطة'] },
        ],
      },
      {
        name: 'سناك',
        time: '5:00 م',
        items: [
          { label: 'مكسرات', items: ['كاجو أو لوز أو سوداني'] },
          { label: 'فاكهة', items: ['بطيخ أو عنب أو تفاح أو موز'] },
        ],
      },
    ],
    extras: [
      'يوم حر واحد في الأسبوع — استمتع بوجبتك المفضلة!',
      'اشرب 4 لتر ماء يومياً',
      '2 كوب عصير بقدونس وكرفس يومياً',
    ],
  },
  {
    id: '2',
    slug: 'intermediate-plan',
    title: 'تغذية المتوسطين',
    subtitle: 'وقود دقيق لمكاسب جدية',
    description:
      'نظام عالي البروتين بتحكم في الحصص مع 5 وجبات خلال اليوم. مصمم لتغذية تدريب مكثف وتحسين التعافي. اشرب 4 لتر ماء يومياً.',
    category: 'intermediate',
    duration: '20 يوم',
    calories: '~2,600 سعرة',
    image: img('photo-1546069901-ba9599a7e93c'),
    meals: [
      {
        name: 'الوجبة الأولى — الإفطار',
        time: '7:30 ص',
        items: [
          { label: 'بيض', items: ['3 بيضات (2 كاملة + 1 بياض)'] },
          { label: 'كربوهيدرات', items: ['70 جرام شوفان'] },
          { label: 'إضافات', items: ['1 موزة + زبدة فول سوداني + 1 كوب لبن'] },
        ],
      },
      {
        name: 'قبل التمرين',
        time: '10:30 ص',
        items: [
          { label: 'فاكهة', items: ['1 موزة', '2 بلحة'] },
          { label: 'مشروب', items: ['1 كوب قهوة سادة أو نسكافيه'] },
        ],
      },
      {
        name: 'الوجبة الثانية — بعد التمرين',
        time: '1:00 م',
        items: [
          { label: 'كربوهيدرات', items: ['80 جرام رز'] },
          { label: 'بروتين', items: ['100 جرام صدور دجاج'] },
          { label: 'خضار', items: ['1 طبق سلطة'] },
        ],
      },
      {
        name: 'الوجبة الثالثة — سناك',
        time: '4:30 م',
        items: [
          { label: 'فاكهة', items: ['بطيخ أو فراولة أو عنب أو تفاح'] },
          { label: 'مكسرات', items: ['كاجو أو سوداني أو لوز'] },
        ],
      },
      {
        name: 'الوجبة الرابعة — العشاء',
        time: '7:30 م',
        items: [
          { label: 'كربوهيدرات', items: ['بطاطس مشوية أو 50 جرام رز بسمتي'] },
          { label: 'بروتين', items: ['150 جرام — سمك مشوي أو كبده دجاج أو كبده لحمة أو تونة أو صدور دجاج'] },
          { label: 'خضار', items: ['1 طبق سلطة'] },
        ],
      },
      {
        name: 'قبل النوم',
        time: '10:00 م',
        items: [{ label: 'ألبان', items: ['زبادي لايت'] }],
      },
    ],
    extras: [
      'وجبة حرة واحدة في الأسبوع',
      'اشرب 4 لتر ماء يومياً',
      '2 كوب عصير بقدونس وكرفس يومياً',
    ],
  },
  {
    id: '3',
    slug: 'advanced-plan',
    title: 'تغذية المتقدمين',
    subtitle: 'تغذية احترافية لأداء ذروة',
    description:
      'نظام ماكروز دقيق مع 5 وجبات منظمة ومصدر كازين قبل النوم. مصمم للرياضيين الساعين لأقصى عضلة وأقل دهون. اشرب 4 لتر ماء يومياً.',
    category: 'advanced',
    duration: '20 يوم',
    calories: '~2,800 سعرة',
    image: img('photo-1512621776951-5712f7c57e88'),
    meals: [
      {
        name: 'الوجبة الأولى — الإفطار',
        time: '7:00 ص',
        items: [
          { label: 'كربوهيدرات', items: ['2 شريحة توست بني'] },
          { label: 'بيض', items: ['5 بيضات'] },
          { label: 'خضار', items: ['1 طبق سلطة'] },
          { label: 'مشروب', items: ['1 كوب قهوة سادة أو نسكافيه'] },
        ],
      },
      {
        name: 'الوجبة الثانية — الغداء',
        time: '12:00 م',
        items: [
          { label: 'كربوهيدرات', items: ['120 جرام رز'] },
          { label: 'بروتين', items: ['150 جرام صدور دجاج أو تونة'] },
          { label: 'خضار', items: ['سلطة — بقدونس، خيار، جزر، طماطم'] },
        ],
      },
      {
        name: 'الوجبة الثالثة — سناك',
        time: '4:00 م',
        items: [
          { label: 'فاكهة', items: ['1 تفاحة', '1 موزة'] },
          { label: 'مكسرات', items: ['سوداني أو لوز أو كاجو'] },
        ],
      },
      {
        name: 'الوجبة الرابعة — العشاء',
        time: '7:30 م',
        items: [
          { label: 'كربوهيدرات', items: ['150 جرام رز بسمتي'] },
          { label: 'بروتين', items: ['150 جرام — لحمة أو كبده دجاج أو كبده لحمة أو سمك مشوي أو تونة'] },
          { label: 'خضار', items: ['1 طبق سلطة كبير'] },
        ],
      },
      {
        name: 'قبل النوم',
        time: '10:00 م',
        items: [
          { label: 'خيار أ', items: ['1 طبق جبنة قريش'] },
          { label: 'خيار ب', items: ['زبادي لايت + 2 بيضة كاملة'] },
        ],
      },
    ],
    extras: [
      'اشرب 4 لتر ماء يومياً',
      '2 كوب عصير بقدونس وكرفس يومياً',
      'اتبع النظام لمدة 20 يوم مع برنامج تدريب PPL',
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1',
    name: 'شهر واحد',
    price: '2,500',
    period: 'جنيه / شهرياً',
    description: 'مثالي لتجربة الكوتشينج الأونلاين.',
    features: ['برنامج تدريب PPL كامل', 'خطة تغذية مخصصة', 'مراجعة أداء عبر فيديو', 'دعم واتساب'],
  },
  {
    id: '2',
    name: 'شهرين',
    price: '4,000',
    originalPrice: '5,000',
    period: 'جنيه',
    description: 'أفضل قيمة لنتائج واضحة.',
    features: [
      'كل مزايا الشهر الواحد',
      'متابعة تقدم كل أسبوعين',
      'تعديل الخطة كل أسبوعين',
      'دعم أولوية',
    ],
    highlight: true,
    badge: 'الأكثر طلباً',
  },
  {
    id: '3',
    name: '3 شهور',
    price: '6,000',
    originalPrice: '7,500',
    period: 'جنيه',
    description: 'باقة التحول الكامل.',
    features: [
      'كل مزايا الشهرين',
      'متابعة أسبوعية',
      'إرشاد مكملات مخصص',
      'وصول دائم لمكتبة الخطط',
    ],
  },
];

export const getWorkoutBySlug = (slug: string): WorkoutPlan | undefined =>
  WORKOUTS.find((w) => w.slug === slug);

export const getNutritionBySlug = (slug: string): NutritionPlan | undefined =>
  NUTRITION_PLANS.find((n) => n.slug === slug);
