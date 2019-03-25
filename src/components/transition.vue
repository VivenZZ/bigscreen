<template lang="">
  <transition v-if="transitionData === 'bottom'"
    name="bottom"
    @before-enter="bottomVeforeEnter"
    @enter="bottomEnter"
    @after-enter="bottomAfterEnter">
    <slot></slot>
  </transition>
  <transition v-else-if="transitionData === 'fade'"
    name="fade"
    @before-enter="fadeVeforeEnter"
    @enter="fadeEnter"
    @after-enter="fadeAfterEnter">
    <slot></slot>
  </transition>
</template>
<script>
import  Velocity from 'velocity-animate'
export default {
  name: 'transitionTemple',
  props: {
     transitionData: {
       default: 'fade' // 默认fade
     },
     bottomStart: {
       default: '0' // 默认fade
     },
     bottomEnd: {
       default: '-200px' // 默认fade
     }
  },
  methods: {
    bottomVeforeEnter: (el) => {
      el.style.bottom = this.bottomEnd
    },
    bottomEnter: (el, done) => {
      Velocity(el, {
        bottom: this.bottomStart
      }, {
        duration: 1000,
        complete: done
      })
    },
    bottomAfterEnter: () => {
      console.log('从下方出现隐藏动画结束')
    },
    fadeVeforeEnter: (el) => {
      el.style.opacity = 0
    },
    fadeEnter: (el, done) => {
      Velocity(el, {
        opacity: 1
      }, {
        duration: 1000,
        complete: done
      })
    },
    fadeAfterEnter: () => {
      console.log('渐隐渐现动画结束')
    }
  }
}
</script>