<template>
  <div class="chart">

    <img src="/images/pie.jpg" class="chart__img"/>

    <svg viewBox="0 0 514 514" class="chart__svg">

      <path
        fill="#000"
        fill-opacity=".2"
        :opacity="active === 'pink' ? 1 : 0"
        d="M514,257C514,115.1,398.9,0,257,0c-39.1,0-76.2,8.8-109.4,24.4L257,257H514z"
        @mouseenter="setActive('pink')"
        @mouseleave="clearActive"
      />

      <path
        fill="#000"
        fill-opacity=".2"
        :opacity="active === 'gray' ? 1 : 0"
        d="M257,257l-49.6,252.2c16,3.1,32.6,4.8,49.6,4.8c141.9,0,257-115.1,257-257H257z"
        @mouseenter="setActive('gray')"
        @mouseleave="clearActive"
      />

      <path
        fill="#000"
        fill-opacity=".2"
        :opacity="active === 'green' ? 1 : 0"
        d="M147.6,24.4C60.4,65.5,0,154.2,0,257c0,125,89.2,229.1,207.4,252.2L257,257L147.6,24.4z"
        @mouseenter="setActive('green')"
        @mouseleave="clearActive"
      />

    </svg>

  </div>
</template>

<script setup>
defineProps({
  active: String,
  setActive: Function,
  clearActive: Function
})
</script>

