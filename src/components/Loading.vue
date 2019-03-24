<template>
  <div v-if="loadingShow" class="loading">
    loading
  </div>
</template>
<script>
import {InitMixins} from '../lib/mixins/init.js'
export default {
  name: 'Loading',
  mixins: [InitMixins],
}
</script>
<style lang="less" scoped>
.loading{
  padding: 20px 50px;
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: 8;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50px;
}
</style>
