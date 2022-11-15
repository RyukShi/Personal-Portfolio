<script setup>
import { ref } from 'vue'

const command = ref(null)

const helpDescription = ''

const aboutMeDescription = ''

const memes = [
'src/assets/images/meme-cat-1.gif',
'src/assets/images/meme-cat-2.gif']

//const asciiWelcome = ""
const newLine = 'ryukshi@ubuntu:~$'

const autofocus = () => {
  document.querySelector('.terminal-input').focus()
}

const runCommand = (command) => {
  if (command === 'help') {
    document.querySelector('.terminal-body').innerHTML += helpDescription
  } else if (command === 'clear') {
    document.querySelector('.terminal-body').innerHTML = ''
  } else if (command === 'whois ryukshi') {
    document.querySelector('.terminal-body').innerHTML += aboutMeDescription
  } else if (command === 'cat') {
    let memeImg = document.createElement('img')
    memeImg.src = memes[Math.floor(Math.random() * memes.length)]
    memeImg.style = 'height: 130px; width: 180px;'
    document.querySelector('.terminal-body').appendChild(memeImg)
  } else {
    document.querySelector('.terminal-body').innerHTML += `<p><strong>${command}</strong>: command not found, type help to see available commands</p>`
  }
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
      <div class="flex flex-row gap-x-2">
        <p>{{ newLine }}</p>
        <input class="terminal-input" type="text" v-model="command" @keyup.enter="runCommand(command)" />
      </div>
    </div>
  </div>
</template>
