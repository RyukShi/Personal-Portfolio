<script setup>
import { ref } from 'vue'

const command = ref("")
const lines = ref([])

const helpDescription = `Here is a list of the commands currently available:
- **whois ryukshi**: displays information about me.
- **clear**: clears the terminal screen.`

const aboutMeDescription = `Fell free to contact me ! 
My E-mail 📫 : aurelien.rb@outlook.fr`

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
  <div class="terminal" style="width: 800px; height: 400px;" @click="autofocus">
    <div class="terminal-header">
      <span class="terminal-header-button bg-red-500"></span>
      <span class="terminal-header-button bg-yellow-500"></span>
      <span class="terminal-header-button bg-green-500"></span>
      <div style="line-height: 1em;">ryukshi@ubuntu: ~</div>
    </div>
    <div class="terminal-body" style="width: 80%;">
      <pre id="ascii-art" style="font-family: 'Courier New', Courier, monospace; font-size: large;">
   ____                     __                   __
  / __ \_   _____  _____   / /_  ___  ________  / /
 / / / / | / / _ \/ ___/  / __ \/ _ \/ ___/ _ \/ / 
/ /_/ /| |/ /  __/ /     / / / /  __/ /  /  __/_/  
\____/ |___/\___/_/     /_/ /_/\___/_/   \___(_)   
      </pre>
      <div v-for="l in lines" :key="l.id">
        <p>ryukshi@ubuntu:~$ {{ l.c }}</p>
        <p v-if="l?.text">{{ l.text }}</p>
        <img v-if="l?.srcImg" :src="l.srcImg" style="height: 130px; width: 180px;" alt="Cat meme" />
      </div>
      <div class="flex flex-row gap-x-2">
        <p>ryukshi@ubuntu:~$</p>
        <input class="terminal-input" type="text" v-model="command" @keyup.enter="runCommand" />
      </div>
    </div>
  </div>
</template>
