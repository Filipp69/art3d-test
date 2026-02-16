<template>
    <div class="ui-input" :class="{ 'is-error': error }">
        <input
        ref="inputRef"
        :type="type"
        :placeholder="placeholder"
        />
        <p v-if="error" class="ui-input__error">
        {{ error }}
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import IMask from 'imask'

const props = defineProps({
  placeholder: String,
  type: {
    type: String,
    default: 'text'
  },
  error: String
})

const modelValue = defineModel()
const inputRef = ref()

onMounted(() => {
  if (props.type === 'tel') {
    const mask = IMask(inputRef.value, {
      mask: '+{7} (000) 000-00-00'
    })
    mask.on('accept', () => {
      modelValue.value = mask.value
    })
  } else {
    inputRef.value.addEventListener('input', (e) => {
      modelValue.value = e.target.value
    })
  }
})
</script>