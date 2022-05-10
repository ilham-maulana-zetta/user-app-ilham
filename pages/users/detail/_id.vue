<template>
  <section class="flex flex-row w-screen h-screen font-display">
    <Sidebar />
    <div class="content px-7 py-9 h-screen overflow-x-auto">
      <Navbar title="Users" />
      <div
        class="mt-14 lg:w-1/2 w-full rounded-md bg-white border border-gray-300 p-8"
        v-if="detail_user"
      >
        <p class="text-lg font-bold">
          {{ detail_user.first_name }} {{ detail_user.last_name }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-7">
          <img
            :src="detail_user.avatar"
            alt=""
            class="w-full lg:w-auto h-full rounded-xl object-cover"
          />
          <div class="flex flex-col space-y-9">
            <div class="flex flex-col space-y-2">
              <p class="font-semibold">First Name</p>
              <p class="text-gray-3">{{ detail_user.first_name }}</p>
            </div>
            <div class="flex flex-col space-y-2">
              <p class="font-semibold">Last Name</p>
              <p class="text-gray-3">{{ detail_user.last_name }}</p>
            </div>
            <div class="flex flex-col space-y-2">
              <p class="font-semibold">Email</p>
              <p class="text-gray-3">{{ detail_user.email }}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="mt-9 detail rounded-full text-white text-xs font-bold py-3 px-7 flex items-center justify-center"
        @click="back()"
      >
        BACK
      </button>
    </div>
  </section>
</template>

<style lang="css">
.content {
  width: 100%;
  background: #f7f8fc;
  color: #252733;
}

th {
  border-bottom: 1.5px solid #dfe0eb;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 32px;
  padding-right: 32px;
  color: #9fa2b4;
}

td {
  border-bottom: 1px solid #dfe0eb;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 32px;
}

.detail {
  background: #65a7db;
}

.text-gray-3 {
  color: #828282;
}
</style>

<script lang="ts">
import Vue from "vue";
import Sidebar from "~/components/Sidebar.vue";
export default Vue.extend({
  components: { Sidebar },
  computed: {
    detail_user() {
      return this.$store.state.detail_user;
    },
  },
  async fetch() {
    const id = this.$route.params.id;
    await this.$store.dispatch("getDetailUser", id);
  },
  methods: {
    async getDetailUser(name: any) {
      await this.$axios.$get(`users/${name}`).then((response) => {
        this.detail_user = response.data;
      });
    },
    back() {
      this.$router.push("/users");
    },
    about() {
      this.$router.push("/about");
    },
    users() {
      this.$router.push("/users");
    },
  },
});
</script>

<style lang="scss"></style>
