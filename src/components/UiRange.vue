<template>
    <div class="range">
  
      <span class="range__label">TEMP</span>
  
      <input
        type="range"
        min="0"
        max="100"
        v-model="modelValue"
        :style="trackStyle"
      />
  
      <div class="range__legend">
        <span>HOT</span>
        <span>COLD</span>
      </div>
  
    </div>
</template>
  
<script setup>
import { computed } from 'vue'

const modelValue = defineModel()

const percent = computed(() => {
  return (modelValue.value / 100) * 100
})

const trackStyle = computed(() => {
  return {
    background: `
      linear-gradient(
        to right,
        #FF69B4 0%,
        #FF69B4 ${percent.value}%,
        #5BAAF9 ${percent.value}%,
        #5BAAF9 100%
      )
    `
  }
})
</script>