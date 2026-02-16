<script setup>
import { ref } from 'vue'
import PieChart from '../components/PieChart.vue'
import Legend from '../components/Legend.vue'

const active = ref(null)

const setActive = (id) => active.value = id
const clearActive = () => active.value = null
</script>

<template>
  <div class="page">

    <PieChart
      :active="active"
      :setActive="setActive"
      :clearActive="clearActive"
    />

    <Legend
      :active="active"
      :setActive="setActive"
      :clearActive="clearActive"
    />

  </div>
</template>
