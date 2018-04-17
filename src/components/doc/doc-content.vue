<template>
  <div class="doc-content">
    <h1>Easy Mock</h1>

    <p>Easy Mock 是一个可视化，并且能快速生成 模拟数据 的持久化服务。 忘掉下面这些实用但麻烦的 Mock 方式吧。在你用了 Easy Mock 之后，你肯定会爱不释手的。另外，如果使用时让你不快乐，那么请一定要记得 反馈。</p>
    <span class="ul-title">常见的 Mock 方式：</span>
    <ul>
      <li>将模拟数据直接写在代码里</li>
      <li>利用 JavaScript 拦截请求</li>
      <li>利用 Charles、 Fiddler 等代理工具拦截请求</li>
    </ul>

    <h2>快速开始</h2>

    <h3>演示项目</h3>
    <blockquote>每个接口旁都有一个小箭头，点击之后会展开并显示该接口的详细信息。</blockquote>
    <p>所有 新注册 的用户都会为其创建一个演示项目，如下图所示。这个项目中已经创建了大部分场景下的演示接口，点击接口旁的 预览按钮 即可。如果你已经掌握了 Easy Mock 的使用，可以将其删除。</p>
    <img src="@/assets/img/demo.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "doc-content"
  }
</script>

<style scoped lang="less">
  .doc-content {
    margin: 0 auto;
    width: 1020px;
    color: #333;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    box-sizing: border-box;
    padding: 20px 50px;
    font: 16px/2 '';
    h1,h2,h3 {
      margin: 10px 0 15px 0;
    }
    h1 {
      font:600 28px/50px 'Microsoft yahei';
      border-bottom: 1px solid #eee;
    }
    h2 {
      font:600 26px/50px 'Microsoft yahei';
      border-bottom: 1px solid #eee;
    }
    h3 {
      font:600 22px 'Microsoft yahei';
    }
    blockquote {
      padding: 0px 10px;
      border-left: 5px solid #eee;
      color: #6a737d;
    }
    p {
      text-indent: 32px;
      padding: 5px 0;
    }
    .ul-title {
      font: 600 16px/40px 'Microsoft YaHei';
    }
    ul {
      padding-left: 35px;
      li{
        list-style-type: inherit;
      }
    }
    img {
      width: 100%;
      border-radius: 5px;
      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
      margin: 10px 0;
    }
  }
</style>
