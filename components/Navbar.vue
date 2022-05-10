<template>
    <div class="flex justify-between w-full">
        <p class="text-2xl font-bold">{{title}}</p>
        <div class="flex space-x-2 items-center">
              <p class="text-sm hidden md:flex">Jones Ferdinand</p>
              <div class="border-gray-200 border-2 rounded-full">
                <img src="../assets/ava.png" alt="" class="h-10 border-white border-2 rounded-full">
              </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: [
        'title'
    ],
})
</script>

