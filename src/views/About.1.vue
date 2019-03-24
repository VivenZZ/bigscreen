<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>1</p>
  </div>
</template>
<style lang="less" scoped>
</style>
<script>
import {InitMixins} from '../lib/mixins/init.js'
export default {
  name: 'about.1',
  mixins: [InitMixins],
  mounted() {
    this.$fetch('https://easy-mock.com/mock/5c7df07ac05ec81060cf5443/test/goodsList')
      .then((response) => {
        console.log(response)
    })
  }
}
</script>

