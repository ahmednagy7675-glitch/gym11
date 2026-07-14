import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Workouts', href: getPermalink('/#workouts') },
    { text: 'Nutrition', href: getPermalink('/#nutrition') },
    { text: 'Pricing', href: getPermalink('/#pricing') },
    { text: 'About', href: getPermalink('/about') },
  ],
  actions: [
    {
      variant: 'primary',
      text: 'Start Now',
      href: getPermalink('/#pricing'),
      icon: 'tabler:bolt',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Training',
      links: [
        { text: 'Push Day', href: getPermalink('/workout/push-day') },
        { text: 'Pull Day', href: getPermalink('/workout/pull-day') },
        { text: 'Legs Day', href: getPermalink('/workout/legs-day') },
      ],
    },
    {
      title: 'Nutrition',
      links: [
        { text: 'Beginner Plan', href: getPermalink('/nutrition/beginner-plan') },
        { text: 'Intermediate Plan', href: getPermalink('/nutrition/intermediate-plan') },
        { text: 'Advanced Plan', href: getPermalink('/nutrition/advanced-plan') },
      ],
    },
    {
      title: 'Coach',
      links: [
        { text: 'About Fares', href: getPermalink('/about') },
        { text: 'Pricing', href: getPermalink('/#pricing') },
        { text: 'Contact', href: '#contact' },
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
    Engineered for results. <span class="text-amber-400 font-bold">TEM FARES</span> Online Coach.
  `,
};
