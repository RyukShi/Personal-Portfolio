import { defineStore } from 'pinia'

export const useMainStore = defineStore('main_store', () => {

  /* This array represents the all projects that I have developed */
  const projects = [
    {
      id: 1,
      name: 'Home Made Cook',
      description: 'This Web App is a recipe sharing platform. It allows users to share their recipes with other users. Users can also search for recipes by ingredients, categories, and other users. Users can also add recipes to their favorites.',
      technologies: ['Symfony 6', 'Twig', 'PHP 8.1', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Webpack'],
      githubUrl: 'https://github.com/RyukShi/Home-Made-Cook'
    },
    {
      id: 2,
      name: 'Virtual Crypto Wallet',
      description: 'This Vue App is a crypto virtual wallet, it allows to buy cryptocurrencies, listing crypto assets, the data comes from CoinAPI.io.',
      technologies: ['Vue 3 & Vite', 'Pinia', 'Tailwind CSS', 'Supabase'],
      githubUrl: 'https://github.com/RyukShi/Virtual-Crypto-Wallet'
    },
    {
      id: 3,
      name: 'Museum Of Art',
      description: 'Symfony Application to visualize data from The Metropolitan Museum of Art.',
      technologies: ['Symfony 5', 'PHP 7.4', 'PostgreSQL', 'Bootstrap'],
      githubUrl: 'https://github.com/RyukShi/Museum-Of-Art'
    },
    {
      id: 4,
      name: 'Writing Number In Letters',
      description: 'This little Web App allows to write a number in letters in many different languages.',
      technologies: ['Vue 3 & Vite', 'Pinia', 'CSS'],
      githubUrl: 'https://github.com/RyukShi/Writing-Number-In-Letters'
    }
  ]

  /* This object represents my skills */
  const skills = {
    hardSkills: [
      {
        name: 'Back-End',
        technologies: [
          {name: 'PHP', svg: ''},
          {name: 'Symfony', svg: ''},
          {name: 'Node.js', svg: ''},
          {name: 'Supabase', svg: ''},
          {name: 'PostgreSQL', svg: ''},
          {name: 'MySQL', svg: ''},
          {name: 'MongoDB', svg: ''}
        ]
      },
      {
        name: 'Front-End',
        technologies: [
          {name: 'HTML', svg: ''},
          {name: 'CSS', svg: ''},
          {name: 'JavaScript', svg: ''},
          {name: 'Vue.js', svg: ''},
          {name: 'Tailwind CSS', svg: ''},
          {name: 'Bootstrap', svg: ''}
        ]
      }
    ],
    softSkills: [
      {
        name: 'Communication',
        svg: ''
      },
      {
        name: 'Teamwork',
        svg: ''
      },
      {
        name: 'Problem Solving',
        svg: ''
      },
      {
        name: 'Adaptability',
        svg: ''
      }
    ]
  }

  return { projects, skills }
})
