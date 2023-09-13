<script setup lang="ts">
import {ref} from 'vue'

</script>

<template>
  <p>HELLO WORLD</p>
  <div class="events">
    
  </div>
</template>

<style scoped>
:hr{
  border-color: red;
}

:p{
  color: red;
}
.events{
    color:magenta;
  }
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
