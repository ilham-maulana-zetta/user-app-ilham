<template>
    <div class="sidenav w-sidenav-sm md:w-sidenav-md h-screen py-4">
      <div class="flex items-center space-x-4 px-6">
        <img src="../assets/aone.png" alt="" class="h-auto md:h-20">
        <p class="text-white font-semibold text-2xl hidden md:flex">AOne</p>
      </div>
      <button @click="about()" class="mt-8 px-7 py-4 flex items-center w-full" v-bind:class="{ 'selected': this.$route.path.includes('/about') }">
        <font-awesome-icon icon="fa-solid fa-circle-info" class="text-sm"/>
        <p class="hidden md:flex ml-5">About</p>
      </button>
      <button @click="users()" class="px-7 py-4 flex items-center w-full" v-bind:class="{ 'selected': this.$route.path.includes('/users') }">
        <font-awesome-icon icon="fa-solid fa-user-group" class="text-sm"/>
        <p class="hidden md:flex ml-5">Users</p>
      </button>
    </div>
</template>

<style>
  .sidenav {
    background: #363740;
    color: #A4A6B3;
  }

  .selected {
    background: #505050;
  }
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: [
        'title'
    ],
    methods: {
        about () {
            this.$router.push('/about')
        },
        users () {
            this.$router.push('/users')
        }
    }
})
</script>

