<script lang="ts">
  import  {VueHorizontalTimeline} from "vue-horizontal-timeline";
  import Timeline from "@/Timeline.json"

  export default{
    data() {
      return {
        TimelineData: Timeline
      }
    }
  }
</script>

<template>
  <div class="greetings">
    <hr>
    <vue-horizontal-timeline :items = "TimelineData" />
  </div>
  <div class="events">
      <p v-for="events in TimelineData.events" :key="events.title">{{ events.title }}</p>
  </div>
</template>

<style scoped>
:hr{
  border-color: red;
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
