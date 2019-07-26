<template>
  <div>
    <NavigationBar />
    <nuxt />
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'

export default {
  components: {
    NavigationBar
  },
}
</script>

<style>
html {
  @apply bg-gray-200
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
