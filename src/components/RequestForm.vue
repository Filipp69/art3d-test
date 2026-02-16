<template>
    <form class="form" @submit.prevent="submit">
  
      <UiInput 
      v-model="form.name" 
      placeholder="NAME"
      :error="errors.name"
      />
      <UiInput
        v-model="form.phone"
        type="tel"
        placeholder="PHONE"
        :error="errors.phone"
      />
      <UiRange v-model="form.temp"/>
      <UiInput v-model="form.comments" placeholder="COMMENTS"/>
  
      <div class="form__actions">
  
        <button type="submit" class="form__btn">
          CALL ME
        </button>
  
        <p class="form__policy">
          BY PRESSING “SEND” BUTTON <br>
          I AGREE WITH
          <a href="#">PRIVACY POLICY</a>
        </p>
  
      </div>
  
    </form>
</template>

<script setup>
import { reactive } from 'vue'
import UiInput from '../components/UiInput.vue'
import UiRange from '../components/UiRange.vue'
import { validatePhone } from '../utils/validation'

const form = reactive({
  name: '',
  phone: '',
  temp: 50,
  comments: ''
})

const errors = reactive({
  name: '',
  phone: ''
})

const submit = () => {
  errors.name = ''
  errors.phone = ''

  let hasError = false

  if (!form.name.trim()) {
    errors.name = 'Please enter your name'
    hasError = true
  }

  if (!form.phone.trim()) {
    errors.phone = 'Please enter your phone number'
    hasError = true
  } else if (!validatePhone(form.phone)) {
    errors.phone = 'Please enter a valid phone number'
    hasError = true
  }

  if (hasError) return

  console.log(form)
}
</script>