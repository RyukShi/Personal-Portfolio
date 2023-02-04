<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { hexaColors } from '../constant'

/* Object refs */
const snake = ref({ x: 50, y: 50, length: 1, body: [] })
const food = ref({ x: 0, y: 0 })
/* String refs */
const direction = ref('right')
/* Boolean refs */
const tutorialMode = ref(false)
const pause = ref(true)
const gameOver = ref(false)
/* Number refs */
const score = ref(0)
const speed = ref(200)
/* Computed ref */
const checkFood = computed(() => {
  return snake.value.x === food.value.x
    && snake.value.y === food.value.y
})
const checkWallCollisions = computed(() => {
  return snake.value.y > canvas.height || snake.value.y < 0 ||
    snake.value.x > canvas.width || snake.value.x < 0
})
const checkBodyCollisions = computed(() => {
  return snake.value.body.some(segment =>
    segment[0] === snake.value.x && segment[1] === snake.value.y)
})

/* Options for game difficulty  */
const difficulties = [
  { value: 200, label: 'Easy' },
  { value: 100, label: 'Medium' },
  { value: 75, label: 'Hard' }
]

/* Global variables */
const cellSize = 5
const colors = hexaColors
var canvas = null
var ctx = null

/* All function, life cycle hooks and watch ref  */
const commandsKey = (event) => {
  let k = event.key
  if (k === 'q' || k === 'ArrowLeft') direction.value = 'left'
  else if (k === 'z' || k === 'ArrowUp') direction.value = 'up'
  else if (k === 'd' || k === 'ArrowRight') direction.value = 'right'
  else if (k === 's' || k === 'ArrowDown') direction.value = 'down'
  else if (k === 'p' && !tutorialMode.value) pause.value = !pause.value
}

const play = () => {
  ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
  drawSnake()
  drawFood()
}

const restart = () => {
  gameOver.value = false
  score.value = 0
  snake.value = { x: 50, y: 50, length: 1, body: [] }
  direction.value = 'right'
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  play()
}

onMounted(() => {
  document.addEventListener('keydown', commandsKey)
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  play()
})

var moveIntervalId = null

watch(pause, (isPaused) => {
  if (isPaused) {
    clearInterval(moveIntervalId)
  } else {
    moveIntervalId = setInterval(moveSnake, speed.value)
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', commandsKey)
  clearInterval(moveIntervalId)
})

const moveSnake = () => {
  if (checkFood.value) {
    score.value += 20
    snake.value.length += 1
    drawFood()
  }
  if (direction.value === 'right') snake.value.x += cellSize
  else if (direction.value === 'left') snake.value.x -= cellSize
  else if (direction.value === 'up') snake.value.y -= cellSize
  else if (direction.value === 'down') snake.value.y += cellSize
  if (checkBodyCollisions.value || checkWallCollisions.value) {
    pause.value = true
    gameOver.value = true
  }
  drawSnake()
}

const drawSnake = () => {
  snake.value.body.push([snake.value.x, snake.value.y])
  ctx.fillRect(snake.value.x, snake.value.y, cellSize, cellSize)
  if (snake.value.body.length > snake.value.length) {
    let first = snake.value.body.shift()
    ctx.clearRect(first[0], first[1], cellSize, cellSize)
  }
}

const drawFood = () => {
  let randPoint = [
    Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize,
    Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize
  ]
  while (snake.value.body.some(segment => {
    return segment[0] === randPoint[0] && segment[1] === randPoint[1]
  })) {
    randPoint = [
      Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize,
      Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize
    ]
  }
  food.value = { x: randPoint[0], y: randPoint[1] }
  ctx.fillRect(food.value.x, food.value.y, cellSize, cellSize)
}
</script>

<template>
  <div v-show="!gameOver">
    <div class="text-center" v-if="!tutorialMode">
      <p class="text-2xl">Score : {{ score }}</p>
      <p class="text-amber-500" v-show="pause">PAUSE, press "P" to start!</p>
    </div>
    <div class="m-2" v-else>
      <p>To go Up press "Arrow Up" or "Z".</p>
      <p>To go Down press "Arrow Down" or "S".</p>
      <p>To go Right press "Arrow Right" or "D".</p>
      <p>To go left press "Arrow Left" or "Q".</p>
      <p>Press "P" to pause the game, and press again to exit pause mode.</p>
    </div>
    <div v-show="!tutorialMode" class="centered">
      <canvas id="canvas">
        What a shame! You can't play Snake because your browser doesn't support canvas.
      </canvas>
    </div>
    <div class="centered gap-x-4">
      <button v-if="!tutorialMode" class="btn btn-amber" @click="pause = !pause">
        {{ (pause) ? 'START' : 'PAUSE' }}
      </button>
      <button v-if="pause" class="btn btn-amber" @click="tutorialMode = !tutorialMode">
        {{ (tutorialMode) ? 'Exit Tutorial' : 'Show Tutorial' }}
      </button>
      <select v-if="pause && !tutorialMode" v-model="speed">
        <option v-for="d in difficulties" :key="d.label" :value="d.value">
          {{ d.label }}
        </option>
      </select>
      <button v-if="pause" class="btn btn-red" @click="$emit('changeMode', false)">
        Exit game
      </button>
    </div>
  </div>
  <div v-show="gameOver">
    <p class="text-2xl text-center">Game Over! Your score : {{ score }} point(s)</p>
    <div class="centered mt-4">
      <button class="btn btn-amber" @click="restart">Play again!</button>
    </div>
  </div>
</template>

<style scoped>
#canvas {
  @apply border-8 border-double border-amber-500 mb-4 mt-4;
  width: 66%;
}
</style>
