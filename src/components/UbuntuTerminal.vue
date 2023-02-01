<script setup>
import { ref, onMounted } from 'vue'
import GameSnake from './GameSnake.vue'

onMounted(() => {
  let colors = ['text-red-500', 'text-amber-500', 'text-green-500']
  let index = 0
  setInterval(() => {
    document.getElementById('ascii-art')?.classList.remove(colors[index])
    index = (index + 1) % colors.length
    document.getElementById('ascii-art')?.classList.add(colors[index])
  }, 500)
})

const command = ref("")
const lines = ref([])
const gameMode = ref(false)
const selectedGame = ref(null)

const helpDescription = `Here is a list of the commands currently available:
- **whois ryukshi**: displays information about me.
- **skills**: displays all my skills.
- **clear**: clears the terminal screen.
- **games**: displays all available games.`

const skillsDescription = `My programming skills:
- Web Frameworks: React, Vue.js, Symfony.
- Basic web development: HTML, CSS, and JavaScript.
- Knowledge of relational databases (MySQL, PostgreSQL, MariaDB) and NoSQL (MongoDB).
- Understanding of Agile development principles and project management (Jira & SCRUM).`

const aboutMeDescription = `Fell free to contact me ! My E-mail 📫 : aurelien.rb@outlook.fr`

const allGames = `Here are the different games I have developed:
- **snake**
- **tetris** (Coming soon)
- **pac-man** (Coming soon)`

const memes = ['./images/meme-cat-1.gif', './images/meme-cat-2.gif']

const autofocus = () => {
  document.querySelector('.terminal-input').focus()
}

const runCommand = () => {
  let c = (command.value.trim().length > 0) ? command.value : null
  if (c) {
    if (c === 'help') {
      lines.value.push({ id: lines.value.length, c: c, text: helpDescription })
    } else if (c === 'clear') {
      lines.value = []
      document.getElementById('ascii-art')?.remove()
    } else if (c === 'whois ryukshi') {
      lines.value.push({ id: lines.value.length, c: c, text: aboutMeDescription })
    } else if (c === 'cat') {
      let src = memes[Math.floor(Math.random() * memes.length)]
      lines.value.push({ id: lines.value.length, c: c, srcImg: src })
    } else if (c === 'skills') {
      lines.value.push({ id: lines.value.length, c: c, text: skillsDescription })
    } else if (c === 'snake') {
      lines.value.push({ id: lines.value.length, c: c })
      gameMode.value = true
      selectedGame.value = c
    } else if (c === 'tetris') {
      lines.value.push({ id: lines.value.length, c: c, text: 'Coming soon!' })
      selectedGame.value = c
    } else if (c === 'pac-man') {
      lines.value.push({ id: lines.value.length, c: c, text: 'Coming soon!' })
      selectedGame.value = c
    } else if (c === 'games') {
      lines.value.push({ id: lines.value.length, c: c, text: allGames })
    } else {
      let errorMessage = `${c}: command not found, type 'help' to see available commands`
      lines.value.push({ id: lines.value.length, c: c, text: errorMessage })
    }
  } else {
    lines.value.push({id: lines.value.length, c: null})
  }
  command.value = ""
}
</script>

<template>
  <div class="terminal" @click="autofocus">
    <div class="terminal-header">
      <span class="terminal-header-button bg-red-500"></span>
      <span class="terminal-header-button bg-yellow-500"></span>
      <span class="terminal-header-button bg-green-500"></span>
      <div style="line-height: 1em;">ryukshi@ubuntu: ~</div>
    </div>
    <div v-if="!gameMode" class="terminal-body">
      <pre id="ascii-art">
   ____                     __                   __
  / __ \_   _____  _____   / /_  ___  ________  / /
 / / / / | / / _ \/ ___/  / __ \/ _ \/ ___/ _ \/ / 
/ /_/ /| |/ /  __/ /     / / / /  __/ /  /  __/_/  
\____/ |___/\___/_/     /_/ /_/\___/_/   \___(_)   
      </pre>
      <div v-for="l in lines" :key="l.id">
        <p>ryukshi@ubuntu:~$ {{ l.c }}</p>
        <div v-if="l?.text">
          <p v-for="(s, i) in l.text.split('\n')" :key="i">{{ s }}</p>
        </div>
        <img v-if="l?.srcImg" :src="l.srcImg" style="height: 130px; width: 180px;" alt="Cat meme" />
      </div>
      <div class="flex flex-row gap-x-2">
        <p class="text-indigo-500">ryukshi@ubuntu:~$</p>
        <input class="terminal-input" type="text" v-model="command" @keydown.enter="runCommand" />
      </div>
    </div>
    <div v-else class="terminal-body">
      <GameSnake v-if="selectedGame === 'snake'"/>
    </div>
  </div>
</template>
