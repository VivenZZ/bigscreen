<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>4?</p>
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
    console.log(this.brandId)
  }
}
</script>

