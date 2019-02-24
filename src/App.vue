<template>
  <div id="app">
    <el-container>
      <div id="icon"><img src="../public/icon.svg"/></div>
      <el-header>
        <el-menu mode="horizontal" text-color="#ffffff" active-text-color="#409EFF" :default-active="activeIndex" background-color="#0D1F38" :router="true">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/login">登录</el-menu-item>
          <el-menu-item index="/signup">注册</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <transition name="el-fade-in" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      
    }
  },
  computed:{
    activeIndex: function(){
      return this.$route.path;
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

  #icon{
    position: fixed;
    height: 60px;
    width: 60px;
    background-color: #0D1F38;
  }

  .el-header{
    padding: 0%;
    width: 100%;
    position: fixed;
    left: 60px;

    .el-menu{
      
    }
  }

  .el-main{
    margin-top: 10%;
  }

  .el-footer{
    height: 20%;
  }
}

</style>
