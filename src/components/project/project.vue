<template>
  <transition name="component-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    name: "project"
  }
</script>

<style scoped>

</style>
