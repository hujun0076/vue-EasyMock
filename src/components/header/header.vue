<template>
  <div class="header">
    <div class="nav">
      <router-link tag="h1" to="/">
        <img src="@/assets/img/easy-mock.png" alt="">
      </router-link>
      <input type="text" auto-complete="off" class="search" placeholder="Search Easy Mock"></input>
      <el-menu :default-active="activeIndex2" class="el-menu-demo"
               mode="horizontal"  @select="handleSelect" background-color="#545c64"
               text-color="#fff" active-text-color="#ffd04b" :router="true">
        <el-submenu index="project">
          <template slot="title">
            <span class="iconfont icon-xiangmuguanli"></span>
            我的项目
          </template>
          <el-menu-item index="person">
            <span class="iconfont icon-yonghu"></span>
            个人项目
          </el-menu-item>
          <el-menu-item index="team">
            <span class="iconfont icon-tuandui"></span>
            团队项目
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="workbench">
          <span class="iconfont icon-agent"></span>
          工作台
        </el-menu-item>
        <el-menu-item index="dataview">
          <template slot="title">
            <span class="iconfont icon-shuju"></span>
            数据
          </template>
          <!--<el-menu-item index="3-1">数据中心</el-menu-item>
          <el-menu-item index="3-2">数据分析</el-menu-item>-->
        </el-menu-item>
        <el-menu-item index="docs">
          <span class="iconfont icon-wendang"></span>
          文档
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <span class="iconfont icon-egg"></span>
            彩蛋
          </template>
          <el-menu-item index="5-1">
            <span class="iconfont icon-lianjie"></span>
            GitHub
          </el-menu-item>
          <el-menu-item index="5-2">
            <span class="iconfont icon-lianjie"></span>
            API生成工具
          </el-menu-item>
          <el-menu-item index="5-3">
            <span class="iconfont icon-lianjie"></span>
            Mock语法
          </el-menu-item>
        </el-submenu>
        <el-submenu index="6" class="nav-li-last">
          <template slot="title">
            <img src="@/assets/img/headimg.png" alt="" class="head-img">
          </template>
          <el-menu-item index="/users">
            <span class="iconfont icon-bianji"></span>
            编辑资料
          </el-menu-item>
          <el-menu-item index="/login">
            <span class="iconfont icon-tuichu4"></span>
            退出
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    created() {

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    background: rgb(84, 92, 100);
  }
  .nav {
    width: 1020px;
    margin: 0 auto;
    position: relative;
    padding-left: 300px;
    box-sizing: border-box;
    h1{
      position: absolute;
      left: 0;
      top: 0;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      img {
        width: 100px;
      }
    }
    .search {
      width: 150px;
      height: 32px;
      box-sizing: border-box;
      position: absolute;
      left: 130px;
      top: 14px;
      background: hsla(0,0%,100%,.125);
      transition: background .3s,border;
      border-radius: 4px;
      color: #fff;
      padding-left: 10px;
      &:focus {
        background: hsla(0,0%,100%,.2);
      }
      &::-webkit-input-placeholder {
        color: rgba(180,180,180,.6);
      }
    }
    .iconfont {
      padding: 0 5px;
    }
    .icon-lianjie {
      font-size: 28px;
    }
    .head-img {
      width: 28px;
      height: 28px;
      border: 2px solid #fff;
      border-radius: 50%;
    }
    .nav-li-last {
      float: right;
    }
  }
  .el-menu--horizontal {
    border-bottom: 1px solid transparent;
  }


</style>
