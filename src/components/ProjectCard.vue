<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <h2 class="card-title">{{ project.name }}</h2>

    <p class="card-text">{{ project.description }}</p>

    <h3 class="text-lg mb-4 mt-4">Technologies</h3>

    <div>
      <span class="tag" v-for="t in project.technologies" :key="t.id">
        {{ t }}
      </span>
    </div>

    <div class="flex flex-row">
      <!-- noopener noreferrer, for security reasons. -->
      <a class="btn btn-amber mt-4" role="button" :href="project.githubUrl" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  </div>
</template>
