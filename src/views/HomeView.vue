<script setup>
import UbuntuTerminal from '../components/UbuntuTerminal.vue';
</script>

<template>
  <div>
    <h1 class="main-title">Aurélien Ribéraud</h1>
    <h2 class="sub-title">About me</h2>
    <p class="text-justify">
      Welcome to my portfolio! I'm @RyukShi, a junior web developer with a passion for 
      learning and creating. I'm mainly interested in web technologies, 
      <strong class="text-amber-500">Symfony</strong> and <strong class="text-amber-500">Vue.js</strong> 
      are my Frameworks of choice. I'm currently learning <strong class="text-amber-500">React.js</strong> 
      with <strong class="text-amber-500">TypeScript</strong> and <strong class="text-amber-500">.NET</strong>
      with <strong class="text-amber-500">C#</strong>. I have a preference for back-end programming because it's 
      the heart of a Web App, where the logic of its operation resides. It is the code that powers the user 
      interface and provides the data that the user interacts with. I'm very excited to develop an application 
      from scratch, make it useful to many people and contribute to society.
    </p>
    <p class="mt-4">
      I'm currently working on my personal projects, which you can discover by visiting the projects page.
    </p>
    <p class="mt-4 text-justify">
      I'm currently looking for a full-time position in web development, 
      where I can use my skills and knowledge to create amazing things.
      If you're interested in working with me, please feel free to reach out. 
      I'm always happy to discuss potential projects and opportunities.
    </p>
    <div class="mt-4 flex">
      <a class="btn-lg btn-amber hover:-translate-y-1"
      href="mailto:aurelien.rb@outlook.fr">Contact me!</a>
    </div>
    <p class="mt-4">
      Thanks for taking the time to visit my portfolio. Have a nice visit!
    </p>

    <div class="mt-10 mb-10">
      <h2 class="sub-title">Terminal</h2>
      <p>
        My idea was to create a terminal like interface to display my skills.
        There are some Easter eggs, try to find them!
      </p>
      <div class="centered">
        <UbuntuTerminal />
      </div>
    </div>

    <div class="centered w-full">
      <div class="bg-transparent border-2 border-slate-50 hover:border-amber-500 rounded-lg w-full py-8 flex justify-center items-center gap-x-28 duration-200">
        <div>
          <p class="font-bold text-2xl">CV Junior Web Developer</p>
          <p class="mt-2">Need to know more about my background, download my CV.</p>
        </div>
        <a href="src/assets/cv.pdf" class="btn-lg btn-amber hover:-translate-y-1"
        target="_blank" rel="noopener noreferrer">Download it!</a>
      </div>
    </div>
  </div>
</template>
