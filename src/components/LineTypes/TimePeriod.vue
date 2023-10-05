<template lang="html">
    <div class="temp" :style="{width:duration + 'em'}">
        
    </div>
</template>
<script lang="ts">

import timePeriodData from '@/timePeriods.json'

var duration: number [] = [];


for (let index = 0; index < 1; index++) {
    var startDate = new Date(timePeriodData[index].start)
    var endDate = new Date(timePeriodData[index].end)
    duration[index] = (endDate.valueOf()-startDate.valueOf())/3.154e+10 // This is to convert miliseconds to years
    
};


export default {

    data() {
        return{
            timePeriods: timePeriodData,
            duration: duration
        }
    }
    
}


</script>
<style lang="scss">
    .temp{
        background-color: aqua;
        height:5px;
    }
</style>