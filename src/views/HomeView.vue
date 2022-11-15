<script setup>
import UbuntuTerminal from '../components/UbuntuTerminal.vue';
</script>

<template>
  <div>
    <h1 class="main-title">Aurélien Ribéraud</h1>
    <p class="text-justify">
      Welcome to my portfolio! I'm @RyukShi, a junior web developer with a passion for 
      learning and creating. I'm mainly interested in web technologies, 
      <strong class="text-amber-500">Symfony</strong> and <strong class="text-amber-500">Vue.js</strong> 
      are my Frameworks of choice. I'm currently working on a few projects, which you can view on projects page.
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
          <p class="font-bold text-2xl">CV Junior Web Developper</p>
          <p class="mt-2">Need to know more about my background, download my CV.</p>
        </div>
        <a href="src/assets/cv.pdf" class="btn-lg btn-amber hover:-translate-y-1"
        target="_blank" rel="noopener noreferrer">Download it!</a>
      </div>
    </div>

    <div class="mt-10 flex">
      <a class="btn-lg btn-amber hover:-translate-y-1"
      href="mailto:aurelien.rb@outlook.fr">Contact me!</a>
    </div>

  </div>
</template>
