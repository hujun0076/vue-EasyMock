<template>
  <div class="container">
    <pro-header title="数据" :item-nav-show="false" icon-type="icon-shujutu">
      <p slot="description">
        这里将实时显示应用的使用情况。
      </p>
    </pro-header>
    <data-main></data-main>
  </div>
</template>

<script>
  import ProHeader from '@/components/project/header/pro-header'
  import DataMain from '@/components/dataview/main/datamain'
  export default {
    name: "dataview",
    components: {
      ProHeader,DataMain
    }
  }
</script>

<style scoped lang="less">

</style>
