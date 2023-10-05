<template lang="html">
    <li v-for="event in events" :key="event.id">
        {{ event.title}}
    </li>        
    </template>
    <script lang="ts">
    import eventData from '@/events.json'
    
    export default {
        data() {
            return{
                events: eventData,
            };
        }
    }
    </script>
    <style lang="scss">

    </style>