<script setup>
import RequestForm from '../components/RequestForm.vue'
</script>

<template>
  <section class="request">
    <div class="request__wrapper">
      <div class="request__left">
        <h1 class="request__title">
          SEND <br>
          A REQUEST
        </h1>
        <p class="request__desc">
          LEAVE YOUR CONTACTS <br>
          AND WE WILL CONTACT <br>
          YOU AS SOON AS POSSIBLE
        </p>
        <router-link to="/" class="request__logo">
          <svg>
            <use xlink:href="#icon-logo"></use>
          </svg>
        </router-link>
      </div>
      <div class="request__right">
        <RequestForm/>
      </div>
    </div>
    <div class="request__footer">
      <div class="request__copyright">© 2022 LUXURY RESIDENCE</div>
      <a class="request__policy" href="#">Privacy Policy</a>
    </div>
  </section>
  
</template>
