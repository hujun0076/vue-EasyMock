<template>
  <div class="doc-nav">
    <ul class="nav clearfix">
      <li class="item" v-for="item,index in navData">
        <h2>
          {{ item.title }}
          <i class="iconfont icon-rotate" :class="{'icon-less':item.lists}"></i>
        </h2>
          <div class="list" v-if="item.lists">
            <span v-for="list in item.lists">{{ list }}</span>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
  var navData = [
    {
      title: '快速开始',
      lists: [
        '演示项目',
        '基础语法',
        '数据占位符',
        '创建一个项目'
      ]
    },
    {
      title: '进阶指南',
      lists: [
        '善用工作台',
        'Swagger',
        'API自动生成工具',
        '响应式数据',
        '响应式数据注意事项',
        '自定义响应'
      ]
    },
    {
      title: 'TIPS',
      lists: [
        '快捷键',
        '语法提示',
        '批量操作',
        '移动端调试'
      ]
    },
    {
      title: '特性',
      lists: [
        '接口代理',
        'JSONP',
        '协同编辑',
        '团队项目',
        'Restful'
      ]
    },
    {
      title: '常见问题',
      lists: [
        '忘记密码',
        '如何本地部署',
        '数据如何联动',
        '响应式数据返回异常',
        '加入团队不用审核吗',
        '如何定义参数/响应状态',
        '没有Swagger文档',
        '内网Swagger文档'
      ]
    },
    {
      title: '其他',
      lists: [
        '反馈'
      ]
    },
    {
      title: '更新日志'
    }

  ]
  export default {
    name: "doc-nav",
    data(){
      return {
        navData
      }
    }
  }
</script>

<style scoped lang="less">
  .doc-nav {
    width: 1020px;
    margin: 20px auto 0 auto;

    .nav {
      background: #f0f0f1;
      border: 1px solid #eee;
      border-bottom: 2px solid #eaecef;
      padding: 0 20px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      box-shadow: 0 -1px 2px rgba(0,0,0,.2);
    }
    .item {
      float: left;
      padding: 0 25px;
      position: relative;
      cursor: pointer;
      background: #f0f0f1;
      z-index: 999;
      h2 {
        font: 14px/50px '微软雅黑';
        color: #333;
      }
      .icon-rotate:before {
        font-size: 14px;
        display: inline-block;
        transform: rotate(-180deg);
        transition: transform .2s ease-in-out;
      }
      .list {
        opacity: 0;
        position: absolute;
        top: 57px;
        left: 0;
        transform: scale(0.1);
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
        border-radius: 4px;
        white-space: nowrap;
        padding: 15px 0;
        z-index: 900;
        background: #f8f8f8;
        transform-origin: top center;
        transition: all .5s ease-in-out;
        &::before {
          content: '';
          width: 100%;
          height: 10px;
          display: block;
          background: transparent;
          position: absolute;
          top: -10px;
          left: 0;
        }
        span {
          display: block;
          padding: 8px 20px;
          overflow: auto;
          &:hover {
            background: #eee;
          }
        }
      }
      &:hover {
        .icon-rotate:before {
          transform: rotate(0deg);
        }
        .list {
          opacity: 1;
          transform: scale(1.0);
        }
      }
    }
  }

</style>
