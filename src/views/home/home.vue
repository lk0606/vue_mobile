<template>
<div class='home-container'>
  <mt-cell
      v-for="(item, index) in cell" :key="index"
      :title="item.title"
      :to="item.url"
      is-link
      :value="item.rightText">
  </mt-cell>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
  components: {
  },
  data() {
      return {
        cell: [
          {
            title: 'translate滚动',
            url: '/iscroll-table-test',
            rightText: '头部侧边可以固定'
          },
          {
            title: '项目中的',
            url: '/test',
            rightText: '可固定'
          },
          {
            title: '职业',
            url: '/profession',
            rightText: ''
          },
          {
            title: 'popup',
            url: '/popup',
            rightText: 'popup测试'
          },
          {
            title: 'range调用',
            url: '/range-demo',
            rightText: 'range调用'
          },
          {
            title: 'table调用',
            url: '/table-demo',
            rightText: 'table调用'
          },
          {
            title: 'index-list',
            url: '/index-list',
            rightText: '索引'
          },
        ]
      }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
  },
  mounted() {
  }
})
</script>

<style lang="scss" scoped>
.home-container {

}
</style>
