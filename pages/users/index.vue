<template>
  <section class="flex flex-row w-screen h-screen font-display">
    <div class="sidenav h-screen py-4">
      <div class="flex items-center space-x-4 px-6">
        <img src="../../assets/aone.png" alt="" class="h-20">
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
    <div class="content h-screen overflow-y-auto px-7 py-9">
      <div class="flex justify-between w-full">
        <p class="text-2xl font-bold">Users</p>
        <div class="flex space-x-2 items-center">
              <p class="text-sm">Jones Ferdinand</p>
              <div class="border-gray-200 border-2 rounded-full">
                <img src="../../assets/ava.png" alt="" class="h-10 border-white border-2 rounded-full">
              </div>
        </div>
      </div>
      <div class="mt-14 w-full rounded-md bg-white border border-gray-300 p-8">
        <p class="text-lg font-bold">All users</p>
        <table class="w-full mt-10">
          <tr>
            <th></th>
            <th class="text-left text-sm">Full Name</th>
            <th class="text-left text-sm">Email</th>
            <th></th>
          </tr>
          <tr v-for="(item, idx) in users" :key="`${idx}`">
            <td>
              <img :src="item.avatar" alt="" class="h-10 w-10 rounded-full">
            </td>
            <td>{{item.first_name}}</td>
            <td>{{item.email}}</td>
            <td>
              <button class="detail rounded-full text-white text-xs font-bold py-3 px-2 flex items-center justify-center" @click="getDetail(item.id)">VIEW DETAIL</button>
            </td>
          </tr>
        </table>
        <div class="flex w-full justify-end p-6">
          <div class="flex space-x-8 items-center text-gray-400">
            <p class="text-sm">1-8 of 1240</p>
            <div class="flex space-x-6">
              <button class="cursor-pointer"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
              <button class="cursor-pointer"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
            </div>
          </div>
        </div>
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
      users: [],
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      await this.$axios.$get('users').then((response: any) => {
        this.users = response.data
        console.log(this.users)
      })
    },
    getDetail (id: any) {
      this.$router.push(`/users/detail/${id}`)
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
