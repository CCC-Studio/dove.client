<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu mode="horizontal" text-color="#ffffff" active-text-color="#409EFF" background-color="#0D1F38" default-active="1" :router="true">
          <el-menu-item index="/login">登录</el-menu-item>
          <el-menu-item index="/signup">注册</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      activeIndex: 1,
    }
  }
}

</script>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .el-header{
    padding: 0%;

    .el-menu{

    }
  }

  .el-main{
  }

  .el-footer{
    height: 20%;
  }
}
</style>
