<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>haha?</p>
  </div>
</template>
<style lang="less" scoped>
</style>
<script>
import {InitMixins} from '../lib/mixins/init.js'
export default {
  name: 'hotgoods',
  mixins: [InitMixins],
  mounted() {
    console.log(this.brandId)
  }
}
</script>

