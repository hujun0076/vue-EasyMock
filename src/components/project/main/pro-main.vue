<template>
  <div class="project-item">
    <div class="collect">
      <i class="iconfont icon-active" :class="[iconStatus ? 'icon-shoucang': 'icon-shoucang1']" @click="changIcon"></i>
    </div>
    <h2>{{ title }}</h2>
    <div class="description">
      {{ desc ? desc : title}}
    </div>
    <div class="url">
      {{ url }}
    </div>
    <div class="member">
      <img src="@/assets/img/headimg.png" alt="">
    </div>
    <div class="control">
      <button>
        <i class="iconfont icon-lianjie"></i>
      </button>
      <button>
        <i class="iconfont icon-wendang"></i>
      </button>
      <button>
        <i class="iconfont icon-shanchu"></i>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pro-main',
    props: {
      title: {
        type: String,
        default: '项目标题'
      },
      desc: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: '/'
      }

    },
    data(){
      return {
        iconStatus: false
      }
    },
    methods: {
      changIcon(){
        this.iconStatus = !this.iconStatus;
      }
    }
  }
</script>

<style scoped lang="less">


  .project-item {
    cursor: pointer;
    box-sizing: border-box;
    width: 230px;
    padding: 0 14px 20px;
    background: #fff;
    box-shadow: 0 1px 5px #e5e5e5;
    border-radius: 4px;
    transition: all .3s ease-in-out;
    &:hover {
      box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
      background: #fbfbfb;
      transform: scale(1.02);
      .icon-active {
        display: inline-block;
        animation: actived 1s linear infinite alternate;
      }

    }
    @keyframes actived {
      0% {
        transform: scale(0.95);
      }
      100% {
        transform: scale(1.15);
      }
    }
    .collect {
      height: 40px;
      line-height: 40px;
      text-align: center;
      .icon-shoucang,.icon-shoucang1 {
        font-size: 26px;
        color: #f84c5b;
      }
      .icon-shoucang {
        font-size: 22px;
      }

    }

    h2 {
      font-size: 14px;
      font-weight: 700;
    }

    .description,.url,.member{
      padding: 10px;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-top: 10px;
      background: #f5f5f5;
    }
    .member {
      img {
        width: 20px;
        height: 20px;
      }
    }

    .control {
      display: flex;
      margin-top: 10px;
      button {
        flex: 1;
        text-align: center;
        height: 32px;
        border: 1px solid #ddd;
        cursor: pointer;
        background: #fff;
        margin-left: -1px;
        transition: color .5s,border .3s;
        &:hover {
          position: relative;
          border: 1px solid #2d8cf0;
          color: #2d8cf0;
        }
        &:nth-child(1) {
          border-radius: 4px 0 0 4px;
        }
        &:nth-child(3) {
          border-radius: 0 4px 4px 0;
        }
      }
      .icon-lianjie {
        font-size: 30px;
      }
    }
  }


</style>
