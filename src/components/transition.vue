<template lang="">
  <transition
    name="fade"
    @before-enter="handleVeforeEnter"
    @enter="handleEnter"
    @after-enter="handleAfterEnter">
    <slot></slot>
  </transition>
</template>
<script>
import  Velocity from 'velocity-animate'
export default {
  name: 'transitionTemple',
  methods: {
    handleVeforeEnter: (el) => {
      el.style.opacity = 0
    },
    handleEnter: (el, done) => {
      Velocity(el, {
        opacity: 1
      }, {
        duration: 1000,
        complete: done
      })
    },
    handleAfterEnter: () => {
      console.log('动画结束')
    }
  }
}
</script>