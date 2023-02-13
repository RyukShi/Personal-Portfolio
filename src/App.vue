<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="centered">
    <nav class="nav-menu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
  </div>

  <RouterView class="mr-16 ml-16" v-slot="{ Component }">
    <Transition name="fade">
      <Component :is="Component" />
    </Transition>
  </RouterView>

  <footer class="w-full bg-slate-900 mt-10 border-t-2 pt-14 hover:border-t-amber-500 hover:bg-transparent duration-200">
      <div class="centered gap-x-16">
        <!-- github -->
        <a href="https://github.com/RyukShi" target="_blank" rel="noopener noreferrer">
          <img src="./assets/github.svg" alt="My github account" />
        </a>

        <!-- linkedin -->
        <a href="https://www.linkedin.com/in/aurelien-riberaud-ryukshi/" target="_blank" rel="noopener noreferrer">
          <img src="./assets/linkedin.svg" alt="My linkedin account" />
        </a>

        <!-- stackoverflow -->
        <a href="https://stackoverflow.com/users/19858610/ryukshi" target="_blank" rel="noopener noreferrer">
          <img src="./assets/stackoverflow.svg" alt="My stackoverflow account" />
        </a>
      </div>

      <!-- copyright -->
      <p class="mt-14 text-center text-sm">&copy; {{ currentYear }} Aurélien Ribéraud</p>
  </footer>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
