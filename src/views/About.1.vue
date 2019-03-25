<template>
<div>
<transitionTemple>
  <div class="about" v-if="condition">
    <h1>This is an about page</h1>
    <p>1</p>
  </div>

</transitionTemple>
</div>
</template>
<style lang="less" scoped>
</style>
<script>
import {InitMixins} from '../lib/mixins/init.js'
import transitionTemple from '@/components/transition.vue'
export default {
  name: 'about.1',
  mixins: [InitMixins],
  components: {
    transitionTemple
  },
  data() {
    return {
      condition: false
    }
  },
  mounted() {
    this.$fetch('https://easy-mock.com/mock/5c7df07ac05ec81060cf5443/test/goodsList')
      .then((response) => {
        console.log(response)
        this.condition = true
    })
  }
}
</script>

