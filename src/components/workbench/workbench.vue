<template>
  <div class="work-bench">
    <pro-header title="工作台" iconType="icon-weibiaoti46"
                :item-nav-show="false">
      <p slot="description">将正在进行的项目添加到工作台中以提高工作效率。</p>

    </pro-header>
    <div class="work-item clearfix">
      <pro-main title="vue-demo"></pro-main>
      <pro-main title="vuex-demo"></pro-main>
      <pro-main title="vue-router-demo"></pro-main>
      <pro-main title="jQuery-demo"></pro-main>
      <pro-main title="H5-demo"></pro-main>
      <pro-main title="CSS3-demo"></pro-main>
      <pro-main title="nodejs-demo"></pro-main>
      <pro-main title="webpack-demo"></pro-main>
    </div>


  </div>
</template>

<script>
  import ProHeader from '@/components/project/header/pro-header'
  import ProMain from '@/components/project/main/pro-main'

  export default {
    name: "workbench",
    components: {
      ProHeader,
      ProMain
    }
  }
</script>

<style scoped lang="less">
  .work-item {
    width: 1020px;
    margin: 20px auto;
    .project-item {
      float: left;
      margin: 15px 10px;
    }

  }


</style>
