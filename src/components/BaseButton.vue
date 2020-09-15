<template>
  <div class="base-button"
    :class="classList"
    v-on="handlers">
    <span v-if="text">{{ text }}</span>
    <span v-if="icon">{{ icon }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    icon: {
      type: String,
    },
    circle: {
      type: Boolean,
    },
    transparent: {
      type: Boolean,
    },
    accent: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    noripple: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    const vm = this
    return {
      pressed: false,
      active: false,
      handlers: {
        mousedown: vm.down,
        mouseup: vm.reset,
        touchstart: vm.down,
        touchend: vm.reset,
        mouseleave: vm.reset,
        mouseover: vm.hover,
      },
    }
  },
  methods: {
    hover () {
      this.active = true
    },
    down () {
      this.active = true
      this.pressed = true
    },
    reset () {
      this.active = false
      this.pressed = false
    },
  },
  computed: {
    classList () {
      return {
        '--circle': this.circle,
        '--pressed': this.pressed,
        '--hover': this.active,
        '--transparent': this.transparent,
        '--accent': this.accent,
        '--disabled': this.disabled,
        '--no-ripple': this.noripple,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/BaseButton/index";
</style>
