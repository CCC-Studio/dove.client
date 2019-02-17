<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu mode="horizontal" text-color="#FFFFFF" active-text-color="#283C46">
          <el-menu-item index="1">登录</el-menu-item>
          <el-menu-item index="2">注册</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import LogIn from './components/LogIn.vue'

export default {
  name: 'app',
  components: {
    LogIn
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
      background-color: #0D1F38;

    }
  }
}
</style>
