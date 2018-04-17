<template>
  <div class="header">
    <div class="item">
      <div class="item-user">
        <i class="iconfont" :class="iconType"></i>
      </div>
      <div class="item-info">
        <h2>{{ title }}</h2>
        <slot name="description">默认项目描述</slot>
      </div>
      <div class="item-nav" v-if="itemNavShow">
        <el-radio-group v-model="tabPosition">
          <el-radio-button label="left">全部</el-radio-button>
          <el-radio-button label="center">我创建的</el-radio-button>
          <el-radio-button label="right">我加入的</el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pro-header",
    data(){
      return {
        tabPosition: 'left'
      }
    },
    props: {
      title: {
        type: String,
        default: '项目标题'
      },
      iconType: {
        type: String,
        default: ''
      },
      itemNavShow: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    background: linear-gradient(#e1e2e3,#f1f2f4);
    border-bottom: 2px solid #ddd;
    padding: 30px 0;
  .item {
    width: 1020px;
    margin: 0 auto;
    height: 50px;
  .item-user {
    margin-right: 20px;
    line-height: 50px;
  }
  .item-user,.item-info {
    float: left;

  }
  .item-info {
  h2 {
    font-weight: 700;
  }
  p {
    color: #666;
  }
  }
  .item-nav {
    float: right;
  }
  .icon-userrect,.icon-chengyuanjituanduiguanli,.icon-weibiaoti46,.icon-shujutu,.icon-msnui-help-doc {
    font-size: 50px;
    color: #2d8cf0;
  }
  .item-nav {
    padding-top: 5px;
  }
  }
  }
</style>
