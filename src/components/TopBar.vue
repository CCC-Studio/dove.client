<template>
    <div id="TopBar">
      <div id="icon"><a href="/"/></div>
      <div id="navBar">
          <ul>
            <li :class="checkActive(1)" @click="changeIndex(1)">首页</li>
            <li :class="checkActive(2)" @click="changeIndex(2)">注册</li>
            <li :class="checkActive(3)" @click="changeIndex(3)">登录</li>
          </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      activeIndex: 1
    }
  },
  methods:{
    checkActive: function(navIndex){
      if(navIndex == this.activeIndex){
        return "activeTag";
      } else {
        return "";
      }
    },
    changeIndex: function(clickIndex){
      if(clickIndex != this.activeIndex){
        this.activeIndex = clickIndex
        switch(clickIndex){
          case 1:
            this.$router.push("/");
            break;
          case 2:
            this.$router.push("/signup");
            break;
          case 3:
            this.$router.push("/login");
            break;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
      
#TopBar {
  height: 75px;
  padding-left: 20%;
  padding-right: 20%;
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  #icon {
    height: 75px;
    width: 75px;
    background-image: url("../assets/icon-above-font.svg");
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    margin: 0%;
    position: absolute;
    left: 20%;

    a {
      display: block;
      height: 75px;
      width: 75px;
    }
  }

  #navBar {
    height: 75px;
    display: inline-block;
    margin: 0%;
    position: absolute;
    right: 25%;
    line-height: 75px;

    ul {
      display: inline;
      margin: 0%;
      padding: 0%;
      list-style: none;

      li {
        transition: 0.2s;
        display: inline-block;
        height: 55px;
        width: 55px;
        margin-left: 5px;
        cursor: pointer;
        line-height: 55px;
      }

      li:hover {
        background-color: #409EFF;
        color: white;
      }

      .activeTag{
        border-bottom: 2px solid #409EFF;
      }
    }
  }
}

</style>

