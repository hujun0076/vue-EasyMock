<template>
  <div class="container">
    <pro-header title="团队项目" iconType="icon-chengyuanjituanduiguanli"
      :item-nav-show="false">
      <p slot="description"> 这里将展示你所创建的以及加入的团队。</p>
    </pro-header>
  </div>
</template>

<script>
  import ProHeader from '@/components/project/header/pro-header'
  export default {
    name: "team",
    components: {
      ProHeader
    }
  }
</script>

<style scoped>

</style>
