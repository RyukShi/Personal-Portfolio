<script setup>
import { ref, onBeforeMount } from 'vue'

const props = defineProps({
  game: {
    type: String,
    required: true
  },
  limit: {
    type: Number,
    default: 10
  }
})

const topPlayers = ref(null)
const loading = ref(false)

const fetchTopPlayers = () => {
  loading.value = true
  fetch("http://localhost:3333/top-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(
      {
        game: props.game,
        limit: props.limit
      }
    )
  })
  .then(async (response) => {
    let jsonData = await response.json()
    topPlayers.value = jsonData
  })
  .catch(err => console.error(err))
  .finally(() => loading.value = false)
}

onBeforeMount(() => fetchTopPlayers())
</script>

<template>
  <h2 class="sub-title text-center">* Ranking Score Table *</h2>

  <p v-if="loading" class="text-center text-lg">Loading ...</p>

  <div class="centered">
    <table v-if="topPlayers" class="border-collapse border-2 border-amber-500 w-1/2 text-center">
      <thead>
        <tr>
          <th class="px-4 py-2">Ranking</th>
          <th class="px-4 py-2">Players</th>
          <th class="px-4 py-2">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in topPlayers" :key="p.nickname">
          <td class="px-4 py-2">#{{ i + 1 }}</td>
          <td class="px-4 py-2">{{ p.nickname }}</td>
          <td class="px-4 py-2">{{ p.score }} pts</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="text-center text-lg">No records found in database.</p>
  </div>
</template>
