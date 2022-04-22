<template>
  <section class="flex flex-row w-screen h-screen font-display">
    <div class="sidenav h-screen py-4">
      <div class="flex items-center space-x-4 px-6">
        <img src="../../../assets/aone.png" alt="" class="h-20">
        <p class="text-white font-semibold text-2xl">AOne</p>
      </div>
      <button @click="about()" class="mt-8 px-7 py-4 flex items-center w-full">
        <font-awesome-icon icon="fa-solid fa-circle-info" class="mr-5 text-sm"/>
        <p>About</p>
      </button>
      <button @click="users()" class="px-7 py-4 flex items-center selected w-full">
        <font-awesome-icon icon="fa-solid fa-user-group" class="mr-5 text-sm"/>
        <p>Users</p>
      </button>
    </div>
    <div class="content px-7 py-9 h-screen overflow-x-auto">
      <div class="flex justify-between w-full">
        <p class="text-2xl font-bold">Users</p>
        <div class="flex space-x-2 items-center">
              <p class="text-sm">Jones Ferdinand</p>
              <div class="border-gray-200 border-2 rounded-full">
                <img src="../../../assets/ava.png" alt="" class="h-10 border-white border-2 rounded-full">
              </div>
        </div>
      </div>
      <div class="mt-14 w-1/2 rounded-md bg-white border border-gray-300 p-8" v-if="detail_user">
        <p class="text-lg font-bold">{{detail_user.first_name}} {{detail_user.last_name}}</p>
        <div class="grid grid-cols-2 gap-10 mt-7">
          <img :src="detail_user.avatar" alt="" class="h-full rounded-xl object-cover">
          <div class="flex flex-col space-y-9">
            <div class="flex flex-col space-y-2">
              <p class="font-semibold">First Name</p>
              <p class="text-gray-3">{{detail_user.first_name}}</p>
            </div>
            <div class="flex flex-col space-y-2">
              <p class="font-semibold">Last Name</p>
              <p class="text-gray-3">{{detail_user.last_name}}</p>
            </div>
            <div class="flex flex-col space-y-2">
              <p class="font-semibold">Email</p>
              <p class="text-gray-3">{{detail_user.email}}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="mt-9 detail rounded-full text-white text-xs font-bold py-3 px-7 flex items-center justify-center" @click="back()">BACK</button>
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

  .text-gray-3 {
    color: #828282;
  }
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      detail_user: null,
      loading: false
    }
  },
  mounted () {
    this.loading = true
    this.getDetailUser(this.$route.params.id)
    this.loading = false
  },
  methods: {
    async getDetailUser (name: any) {
      await this.$axios.$get(`users/${name}`).then((response) => {
        this.detail_user = response.data
      })
    },
    back () {
      this.$router.push('/users')
    },
    about () {
      this.$router.push('/about')
    },
    users () {
      this.$router.push('/users')
    }
  }
})
</script>

<style lang="scss">

</style>
