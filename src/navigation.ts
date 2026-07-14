import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'الرئيسية', href: getPermalink('/') },
    { text: 'التدريب', href: getPermalink('/#workouts') },
    { text: 'التغذية', href: getPermalink('/#nutrition') },
    { text: 'الأسعار', href: getPermalink('/#pricing') },
    { text: 'عن الكوتش', href: getPermalink('/about') },
  ],
  actions: [
    {
      variant: 'primary',
      text: 'ابدأ الآن',
      href: getPermalink('/#pricing'),
      icon: 'tabler:bolt',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'التدريب',
      links: [
        { text: 'يوم Push', href: getPermalink('/workout/push-day') },
        { text: 'يوم Pull', href: getPermalink('/workout/pull-day') },
        { text: 'يوم الأرجل', href: getPermalink('/workout/legs-day') },
      ],
    },
    {
      title: 'التغذية',
      links: [
        { text: 'خطة المبتدئين', href: getPermalink('/nutrition/beginner-plan') },
        { text: 'خطة المتوسطين', href: getPermalink('/nutrition/intermediate-plan') },
        { text: 'خطة المتقدمين', href: getPermalink('/nutrition/advanced-plan') },
      ],
    },
    {
      title: 'الكوتش',
      links: [
        { text: 'عن فارس', href: getPermalink('/about') },
        { text: 'الأسعار', href: getPermalink('/#pricing') },
        { text: 'تواصل معنا', href: '#contact' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
  ],
  footNote: `
    مصممة لنتائج حقيقية. <span class="text-amber-400 font-bold">تم فارس</span> كوتش أونلاين.
  `,
};
