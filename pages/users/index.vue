<template>
  <section class="flex flex-row w-screen h-screen font-display">
    <Sidebar />
    <div class="content h-screen overflow-y-auto px-7 py-9">
      <Navbar title='Users'/>
      <div class="mt-14 w-full rounded-md bg-white border border-gray-300 p-8">
        <p class="text-lg font-bold">All users</p>
        <div class="flex overflow-x-auto">
          <table class="w-full mt-10">
            <tr>
              <th></th>
              <th class="text-left text-sm whitespace-nowrap">Full Name</th>
              <th class="text-left text-sm whitespace-nowrap">Email</th>
              <th></th>
            </tr>
            <tr v-for="(item, idx) in users" :key="`${idx}`">
              <td>
                <img :src="item.avatar" alt="" class="h-10 w-10 rounded-full">
              </td>
              <td>{{item.first_name}}</td>
              <td>{{item.email}}</td>
              <td>
                <button class="detail whitespace-nowrap rounded-full text-white text-xs font-bold py-3 px-2 flex items-center justify-center" @click="getDetail(item.id)">VIEW DETAIL</button>
              </td>
            </tr>
          </table>
        </div>
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

  .content {
    width: 100%;
    background: #F7F8FC;
    color: #252733;
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
  computed: {
    users: {
      get() {
        return this.$store.state.users
      },
      set(value) {
        this.$store.commit('SET_USERS', value)
      } 
    }
  },
  async fetch() {
    await this.getUsers()
  },
  methods: {
    async getUsers () {
      await this.$axios.$get('users').then((response: any) => {
        this.users = response.data
      })
    },
    getDetail (id: any) {
      this.$router.push(`/users/detail/${id}`)
    },
    about () {
      this.$router.push('/about')
    },
    usersPage () {
      this.$router.push('/users')
    }
  }
})
</script>
