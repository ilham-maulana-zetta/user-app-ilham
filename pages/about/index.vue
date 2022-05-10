<template>
  <section class="flex flex-row w-screen h-screen font-display">
    <Sidebar />
    <div class="content h-screen overflow-y-auto px-7 py-9">
      <Navbar title='About'/>
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
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

export default Vue.extend({
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
})
</script>
