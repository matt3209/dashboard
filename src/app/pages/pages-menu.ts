import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'City of Ether',
    group: true,
  },
  {
    title: 'Story (Coming Soon)',
    icon: 'layout-outline',
    children: [
      {
        title: 'Act 1',
        link: '/pages/layout/stepper',
      },
    ],
  },
  {
    title: 'Quest Board',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Gathering Resources',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Potion Making',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Diplomacy',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Military',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Scholarship',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'Battle for Etheen (Coming Soon)',
    icon: 'edit-2-outline',
  },
  {
    title: 'Region Rankings',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Wizard Rankings',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
];
