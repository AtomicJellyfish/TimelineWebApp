<script setup lang="ts">
import { ref } from 'vue'

import EventMarker from './LineTypes/EventMarker.vue';
import TimePeriod from './LineTypes/TimePeriod.vue';
</script>

<template>
  <div class="timeline-display-container">
    <p>HELLO WORLD</p>
    <hr />
    <EventMarker></EventMarker>
    <TimePeriod></TimePeriod>
  </div>
</template>

<style scoped>
hr {
  width: 500px;
  border: solid 1px red;
}

:p {
  color: red;
}

.timeline-display-contianer{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
