<template>
  <div class="legend">

    <div
      class="legend__item pink"
      :class="{ active: active === 'pink' }"
      @mouseenter="setActive('pink')"
      @mouseleave="clearActive"
    >
      <span class="legend__color" style="background:#FF69B4"/>
      <span class="legend__text">РОЗОВЫЙ СЕГМЕНТ</span>
    </div>

    <div
      class="legend__item gray"
      :class="{ active: active === 'gray' }"
      @mouseenter="setActive('gray')"
      @mouseleave="clearActive"
    >
      <span class="legend__color" style="background:#CFCFCF"/>
      <span class="legend__text">СЕРЫЙ СЕГМЕНТ</span>
    </div>

    <div
      class="legend__item green"
      :class="{ active: active === 'green' }"
      @mouseenter="setActive('green')"
      @mouseleave="clearActive"
    >
      <span class="legend__color" style="background:#9DBB2F"/>
      <span class="legend__text">ЗЕЛЕНЫЙ СЕГМЕНТ</span>
    </div>

  </div>
</template>

<script setup>
defineProps({
  active: String,
  setActive: Function,
  clearActive: Function
})
</script>