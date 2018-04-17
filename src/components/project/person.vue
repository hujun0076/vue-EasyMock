<template>
  <div class="container">
    <pro-header title="个人项目" icon-type="icon-userrect">
      <p slot="description">这里将展示你的个人项目，当然也包括协同项目。</p>
    </pro-header>
    <div class="main clearfix">
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
    name: "person",
    components: {
      ProHeader,
      ProMain
    }

  }
</script>

<style scoped lang="less">

  .main {
    width: 1020px;
    margin: 20px auto;
    .project-item {
      float: left;
      margin: 15px 10px;
    }

    .project-item:nth-child(2n) {
      animation: itemMoved-r 1s ease-in;
    }

    .project-item:nth-child(2n+1) {
      animation: itemMoved-l 1s ease-in-out;
    }
    @keyframes itemMoved-l {
      0% {
        opacity: 0;
        transform: translate(-1000px);
      }
      30% {
        opacity: 1;
        transform: translate(0px);
      }

      30% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes itemMoved-r {
      0% {
        opacity: 0;
        transform: translate(1000px);
      }
      30% {
        opacity: 1;
        transform: translate(0px);
      }

      30% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }

    }





  }


</style>
