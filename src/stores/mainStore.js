import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main_store', () => {
  // set default language to english
  const language = ref('en')

  const setLanguage = (l) => {
    language.value = l
  }

  /* This array represents the all projects that I have developed */
  const projects = [
    {
      id: 1,
      name: 'Home Made Cook',
      description: {
        en: "This Web App is a recipe sharing platform. It allows users to share their recipes with other users. Users can also search for recipes by ingredients, categories, and other users. Users can also add recipes to their favorites.",
        fr: "Cette application Web est une plateforme de partage de recettes. Elle permet aux utilisateurs de partager leurs recettes avec d'autres utilisateurs. Les utilisateurs peuvent également rechercher des recettes par ingrédients, catégories et autres utilisateurs.Les utilisateurs peuvent également ajouter des recettes à leurs favoris."
      },
      technologies: ['Symfony 6', 'Twig', 'PHP 8.1', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Webpack'],
      githubUrl: 'https://github.com/RyukShi/Home-Made-Cook',
      website: ''
    },
    {
      id: 2,
      name: 'Virtual Crypto Wallet',
      description: {
        en: "This Vue App is a crypto virtual wallet, it allows to buy cryptocurrencies, listing crypto assets, the data comes from CoinAPI.io.",
        fr: "Cette application à été conçue avec le Framework Vue.js, Elle implémente les fonctionnalités de base d'un portefeuille crypto virtuel, elle permet d'acheter des crypto-monnaies, de lister des actifs crypto, les données proviennent de CoinAPI.io."
      },
      technologies: ['Vue 3 & Vite', 'Pinia', 'Tailwind CSS', 'Supabase'],
      githubUrl: 'https://github.com/RyukShi/Virtual-Crypto-Wallet',
      website: ''
    },
    {
      id: 3,
      name: 'Museum Of Art',
      description: {
        en: "Symfony Application to visualize data from The Metropolitan Museum of Art, located in New York, this museum is one of the largest museums in the USA.",
        fr: "Application Symfony pour visualiser les données du Metropolitan Museum of Art, situé à New York, ce musée est l'un des plus grands musées des États-Unis."
      },
      technologies: ['Symfony 5', 'PHP 7.4', 'PostgreSQL', 'Bootstrap'],
      githubUrl: 'https://github.com/RyukShi/Museum-Of-Art',
      website: ''
    },
    {
      id: 4,
      name: 'Web Scraping Project',
      description: {
        en: "This project aims to represent in graphic form the web technologies most used in business web projects in many differents countries. The data comes mainly from jobboards: LinkedIn and Indeed.",
        fr: "Ce projet vise à représenter sous forme graphique les technologies web les plus utilisées dans les projets web d'entreprise dans de nombreux pays différents. Les données proviennent principalement des sites d'emploi : LinkedIn et Indeed."
      },
      technologies: ['Python', 'BeautifulSoup', 'Pandas', 'Plotly', 'MySQL', 'Jupyter-NoteBooks', 'Google Cloud'],
      githubUrl: 'https://github.com/RyukShi/Web-Scraping-Project'
    },
    {
      id: 5,
      name: 'What Are We Eating Tonight',
      description: {
        en: "What are we eating tonight? That's a great question! Thanks to this application, you'll never run out of inspiration for dinner, all you have to do is fill in what you have left in your fridge and you'll be presented with several recipe suggestions, click on any of them to get detailed instructions.",
        fr: "Qu'est- ce qu'on mange ce soir? C'est une excellente question! Grâce à cette application, vous ne serez jamais à court d'inspiration pour le dîner, il vous suffit de renseigner ce qu'il vous reste dans votre réfrigérateur et plusieurs suggestions de recettes vous seront présentées, cliquez sur l'une d'entre elles pour obtenir des instructions détaillées."
      },
      technologies: ['React.js', 'TypeScript', 'Vite', 'OpenAI API', 'Vite'],
      githubUrl: 'https://github.com/RyukShi/What-Are-We-Eating-Tonight',
      website: ''
    },
    {
      id: 6,
      name: 'Writing Number In Letters',
      description: {
        en: "This little Web App allows to write a number in letters in many different languages.",
        fr: "Cette petite application Web permet d'écrire un nombre en lettres dans de nombreuses langues différentes."
      },
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

  return { projects, skills, language, setLanguage }
})
