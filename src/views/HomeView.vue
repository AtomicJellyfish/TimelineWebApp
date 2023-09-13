<script setup lang="ts">
import TimelineDisplay from '@/components/TimelineDisplay.vue'
</script>

<template>
  <div class="main-page-contianer">
    <h1>This is the main page!</h1>
    <div class="timeline-container">
      <TimelineDisplay />
    </div>
  </div>
</template>

<style>
.timeline-container {
  display: flex;

  color: red;
}
</style>
