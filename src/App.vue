<template>
  <div id="app">
    <my-header></my-header>
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
  import Header from '@/components/header/header'
  export default {
  name: 'App',
  components: {
    'my-header': Header
  }

}
</script>

<style lang="less">
  #app{
    margin-bottom: 20px;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .5s linear;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }

</style>
