import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Workouts',
      href: getPermalink('/#workouts'),
    },
    {
      text: 'Categories',
      links: [
        { text: 'Beginner', href: getPermalink('/#beginner') },
        { text: 'Intermediate', href: getPermalink('/#intermediate') },
        { text: 'Advanced', href: getPermalink('/#advanced') },
      ],
    },
    {
      text: 'Filters',
      links: [
        { text: 'Muscle Gain', href: getPermalink('/#muscle-gain') },
        { text: 'Fat Loss', href: getPermalink('/#fat-loss') },
        { text: 'Strength', href: getPermalink('/#strength') },
        { text: 'Push Pull Legs', href: getPermalink('/#ppl') },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [
    {
      variant: 'primary',
      text: 'Start Training',
      href: getPermalink('/#workouts'),
      icon: 'tabler:bolt',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Workouts',
      links: [
        { text: 'All Plans', href: getPermalink('/#workouts') },
        { text: 'Beginner', href: getPermalink('/#beginner') },
        { text: 'Intermediate', href: getPermalink('/#intermediate') },
        { text: 'Advanced', href: getPermalink('/#advanced') },
      ],
    },
    {
      title: 'Goals',
      links: [
        { text: 'Muscle Gain', href: getPermalink('/#muscle-gain') },
        { text: 'Fat Loss', href: getPermalink('/#fat-loss') },
        { text: 'Strength', href: getPermalink('/#strength') },
        { text: 'Push Pull Legs', href: getPermalink('/#ppl') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Instagram', href: '#' },
        { text: 'YouTube', href: '#' },
        { text: 'TikTok', href: '#' },
        { text: 'X', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `
    Built for athletes. <span class="text-primary font-semibold">IRONPULSE</span> — Train Harder.
  `,
};
