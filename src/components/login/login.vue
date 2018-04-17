<template>
  <div class="container">
    <div class="login-form">
      <el-form>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return {
        usename: ''
      }
    },
    methods: {
      sendLogin(){

        console.log(this.userName);
        //this.$router.push('/');
      }
    }
  }
</script>

<style scoped lang="less">

  .container {
    width: 1020px;
    margin: 10px auto;
  }
  .login-form {
    width: 40%;
    margin: 120px auto;
    .el-button--primary {
      display: block;
      width: 100%;
    }
  }

</style>
