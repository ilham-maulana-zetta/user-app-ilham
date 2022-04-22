<template>
  <section class="flex flex-row w-screen h-screen font-display">
    <div class="sidenav h-screen py-4">
      <div class="flex items-center space-x-4 px-6">
        <img src="../../assets/aone.png" alt="" class="h-20">
        <p class="text-white font-semibold text-2xl">AOne</p>
      </div>
      <button @click="about()" class="mt-8 px-7 py-4 flex items-center w-full selected">
        <font-awesome-icon icon="fa-solid fa-circle-info" class="mr-5 text-sm"/>
        <p>About</p>
      </button>
      <button @click="users()" class="px-7 py-4 flex items-center w-full">
        <font-awesome-icon icon="fa-solid fa-user-group" class="mr-5 text-sm"/>
        <p>Users</p>
      </button>
    </div>
    <div class="content h-screen overflow-y-auto px-7 py-9">
      <div class="flex justify-between w-full">
        <p class="text-2xl font-bold">About</p>
        <div class="flex space-x-2 items-center">
              <p class="text-sm">Jones Ferdinand</p>
              <div class="border-gray-200 border-2 rounded-full">
                <img src="../../assets/ava.png" alt="" class="h-10 border-white border-2 rounded-full">
              </div>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 gap-10 mt-12">
          <div class="flex flex-col w-full text-sm">
              <p class="text-xl font-semibold">Lorem ipsum dolor sit amet</p>
              <p class="mt-6">
                  consectetur adipiscing elit. Nulla vel turpis turpis. Sed mauris mauris, aliquam sed ante ut, ullamcorper laoreet erat. Duis eu rutrum purus. Ut luctus bibendum tellus ut congue. Ut dolor nisi, maximus aliquam nulla sed, venenatis consequat arcu. Nulla hendrerit vehicula arcu. In consectetur, purus sed consequat posuere, orci nunc consequat ipsum, ut sodales urna massa at neque.
              </p>
              <p class="mt-6">
                  Nulla eget tellus sodales, venenatis lacus eget, lobortis libero. Cras scelerisque metus non mi condimentum, ac lacinia enim fermentum. Sed arcu tortor, hendrerit a eros ac, eleifend porta enim. Suspendisse molestie enim quam, a maximus massa faucibus nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tortor odio, iaculis eget lobortis iaculis, tempor nec ante. Aliquam venenatis nisl at ipsum commod
              </p>
          </div>
          <img src="../../assets/about.png" alt="" class="h-full object-cover">
      </div>
    </div>
  </section>
</template>

<style lang="css">
  .sidenav {
    width: 255px;
    background: #363740;
    color: #A4A6B3;
  }

  .content {
    width: calc(100vw - 255px);
    background: #F7F8FC;
    color: #252733;
  }

  .selected {
    background: #505050;
  }

  th {
    border-bottom: 1.5px solid #DFE0EB;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 32px;
    padding-right: 32px;
    color: #9FA2B4;
  }

  td {
    border-bottom: 1px solid #DFE0EB;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }

  .detail {
    background: #65A7DB;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import axios from '@nuxtjs/axios'

export default Vue.extend({
  data () {
    return {

    }
  },
  mounted () {

  },
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
