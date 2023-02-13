<script setup>
import UbuntuTerminal from '../components/UbuntuTerminal.vue'
import ChooseLanguage from '../components/ChooseLanguage.vue'
import SkillsAndAbilities from '../components/SkillsAndAbilities.vue'
import { useMainStore } from '../stores/mainStore'

const mainStore = useMainStore()
</script>

<template>
  <div>
    <h1 class="main-title">Aurélien Ribéraud</h1>
    <ChooseLanguage />
    <h2 class="sub-title">* {{ (mainStore.language === 'en') ? 'About me' : 'À propos de moi' }} *</h2>
    <div v-if="mainStore.language === 'en'">
      <p class="text-justify">
        Welcome to my portfolio! I'm <strong class="text-indigo-500">@RyukShi</strong>, a junior web developer with a passion for 
        learning and creating. I'm mainly interested in web technologies, 
        <strong class="text-amber-500">Symfony</strong> and <strong class="text-amber-500">Vue.js</strong> 
        are my Frameworks of choice. I'm currently learning <strong class="text-amber-500">React.js</strong> 
        with <strong class="text-amber-500">TypeScript</strong> and <strong class="text-amber-500">.NET</strong>
        with <strong class="text-amber-500">C#</strong>. I have a preference for back-end programming because it's 
        the heart of a Web App, where the logic of its operation resides. It's the code that powers the user 
        interface and provides the data that the user interacts with. I'm very excited to develop an application 
        from scratch, make it useful to many people and contribute to society.
      </p>
      <p class="mt-4">
        I'm currently working on my personal projects, which you can discover 
        by visiting the projects page.
      </p>
      <p class="mt-4 text-justify">
        I'm currently looking for a full-time position in web development, 
        where I can use my skills and knowledge to create amazing things.
        If you're interested in working with me, please feel free to reach out. 
        I'm always happy to discuss potential projects and opportunities.
      </p>
    </div>
    <div v-else>
      <p class="text-justify">
        Bienvenue sur mon portfolio! Je suis <strong class="text-indigo-500">@RyukShi</strong>, un développeur web junior 
        passionné par l'apprentissage et la création. Je suis principalement intéressé par les 
        technologies web, <strong class="text-amber-500">Symfony</strong> et 
        <strong class="text-amber-500">Vue.js</strong> sont mes frameworks de prédilection. 
        Je suis actuellement en train d'apprendre <strong class="text-amber-500">React.js</strong> 
        avec <strong class="text-amber-500">TypeScript</strong> et <strong class="text-amber-500">.NET</strong> 
        avec <strong class="text-amber-500">C#</strong>. J'ai une préférence pour la programmation 
        back-end car c'est le cœur d'une Web App, là où réside la logique de son fonctionnement. 
        C'est le code qui alimente l'interface utilisateur et fournit les données avec lesquelles 
        l'utilisateur interagit. Ce que je trouve passionnant c'est de concevoir de toute pièce 
        une application qui sera utile à de nombreuses personnes et de contribuer à la société.
      </p>
      <p class="mt-4">
        Je travaille actuellement sur mes projets personnels, que vous pouvez découvrir 
        en visitant la page des projets.
      </p>
      <p class="mt-4 text-justify">
        Je suis actuellement à la recherche d'un poste à temps plein en tant que 
        développeur web junior. Si mon profile vous intéresse, n'hésitez pas 
        à me contacter. Je suis toujours heureux de discuter de projets 
        potentiels et d'opportunités.
      </p>
    </div>

    <div class="mt-4 flex">
      <a class="btn-lg btn-amber hover:-translate-y-1"
      href="mailto:aurelien.rb@outlook.fr">Contact me!</a>
    </div>

    <p v-if="mainStore.language === 'en'" class="mt-4">
      Thanks for taking the time to visit my portfolio. Have a nice visit!
    </p>
    <p v-else class="mt-4">
      Merci de prendre le temps de visiter mon portfolio. Bonne visite!
    </p>

    <div class="centered mt-10">
      <div class="border-2 border-slate-50 hover:border-amber-500 rounded-lg py-8 px-16 centered gap-x-28 duration-200">
        <div>
          <p class="font-bold text-2xl">CV Junior Web Developer</p>
          <p class="mt-2">Need to know more about my background, download my CV.</p>
        </div>
        <a href="./cv.pdf" class="btn-lg btn-amber hover:-translate-y-1"
        target="_blank" rel="noopener noreferrer">Download it!</a>
      </div>
    </div>

    <div class="my-10">
      <h2 class="sub-title">* Terminal *</h2>
      <p v-if="mainStore.language === 'en'">
        My idea was to create a terminal like interface to display my skills.
        There are some Easter eggs, try to find them!
      </p>
      <p v-else>
        Mon idée était de créer une interface de type terminal pour montrer mes 
        compétences. Il y a quelques surprises, essayez de les trouver!
      </p>
      <div class="centered">
        <UbuntuTerminal />
      </div>
    </div>

    <SkillsAndAbilities :skills="mainStore.skills" :language="mainStore.language" />

  </div>
</template>
