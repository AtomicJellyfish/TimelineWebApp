<template lang="html">

<li v-for="timePeriod in timePeriods" :key="timePeriod.id">
    <div class="time-period" :style="{width:duration[timePeriod.id.valueOf()] + 'em'}">
        {{ timePeriod.title }}
    </div>



</li> 
</template>
<script lang="ts">

import timePeriodData from '@/timePeriods.json'

var duration: number [] = [];

for (let index = 0; index < timePeriodData.length-1; index++) {
    var startDate = new Date(timePeriodData[index].start)
    var endDate = new Date(timePeriodData[index].end)
    duration[index] = (endDate.valueOf()-startDate.valueOf())/3.154e+10 // This is to convert miliseconds to years
    
};


export default {

    data() {
        return{
            timePeriods: timePeriodData,
            duration: duration,
        }
    }
    
}


</script>
<style lang="scss">
    .time-period{
        display: flex;
        align-items: center;
        background-color: purple;
        height:25px;
        margin: 5px;
        color:black;
        font-size: x-small;
    }
    li {
        list-style: none;
    }
</style>