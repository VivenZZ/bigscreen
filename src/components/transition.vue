
<!-- 

 -->
 <template lang="">
  <transition v-if="transitionData === 'top'"
    name="bottom"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false">
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
import Velocity from "velocity-animate";
export default {
  name: "transitionTemple",
  props: {
    transitionData: {
      default: "fade" // 默认fade
    },
    bottomStart: {
      default: "-980px" // 默认fade
    },
    bottomEnd: {
      default: "100px" // 默认fade
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.top = this.bottomStart
      // el.style.width = 0
    },
    enter: function(el, done) {
      Velocity(
        el,
        {
          top: this.bottomEnd,
          // width: '500px'
        },
        {
          duration: 300,
          complete: done
        }
      );
    },
    leave: function(el, done) {
      Velocity(
        el,
        {
          top: this.bottomStart,
          // width: '0'
        },
        {
          duration: 300,
          complete: done
        }
      );
    },
    fadeVeforeEnter: el => {
      el.style.opacity = 0;
    },
    fadeEnter: (el, done) => {
      Velocity(
        el,
        {
          opacity: 1
        },
        {
          duration: 500,
          complete: done
        }
      );
    },
    fadeAfterEnter: () => {}
  }
};
</script>