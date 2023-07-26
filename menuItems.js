export const menuItems = [
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Our Business',
    submenu: [
      {
        title: 'Manufacturing',
        submenu: [
          {
            title: 'Electrical & Mechanical Fitments',
            url: 'electrical-&-mechanical-fitments',
          },
          {
            title: 'Solar Power Products',
            url: 'solar-power-products',
          },
          {
            title: 'LED Lighting',
            url: 'LED-Lighting',
          },
          {
            title: 'Speciality Chemicals',
            url: 'speciality-chemicals',
          },
        ],
      },

      // Engineering
      {
        title: 'Engineering',
        submenu: [
          {
            title: 'Sector',
            url: 'sector',
          },
          {
            title: 'Services',
            url: 'services',
          },
        ],
      },

      // Infrastructure
      {
        title: 'Infrastructure',
        submenu: [
          {
            title: 'Road Infrastructure',
            url: 'Road-Infrastructure',
          },
          {
            title: 'Industrial Infrastructure',
            url: 'Industrial-Infrastructure',
          },
          {
            title: 'Urban Infrastructure',
            url: 'Urban-Infrastructure',
          },
          {
            title: 'Other Infrastructure',
            url: 'Other-Infrastructure',
          },
        ],
      },

      // Information Technology

      {
        title: 'Information Technology',
        submenu: [
          {
            title: 'Consulting Services',
            url: 'Consulting-Services',
          },
          {
            title: 'Business Services',
            url: 'Business-Services',
          },
          {
            title: 'Technology Services',
            url: 'Technology-Services',
          },
          // {
          //   title: 'Ecommerce',
          //   url: 'Ecommerce',
          // },
        ],
      },
      {
        title: 'Consumer & Retail',
        url: 'Consumer-&-Retail',
      },
    ],
  },

  {
    title: 'Our Leadership',
    url: '/our-leadership',
  },
  {
    title: 'Brands',
    url: '/brands',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];
