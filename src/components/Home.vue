<template>
    <div id="Index">
      <TopBar />
      <transition name="el-fade-in" mode="out-in">
        <router-view />
      </transition>
      <transition name="el-fade-in" mode="out-in">
        <router-view name="middleScreen" />
      </transition>
      <transition name="el-fade-in" mode="out-in">
        <router-view name="bottomScreen" />
      </transition>
    </div>
</template>

<script>
import TopBar from './TopBar.vue'

export default {
  name: 'app',
  components: {
    TopBar
  },
  data(){
    return {
      isHeaderShow: false,

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

#Index {
    width: 100%;
    
    
    #top {
      width: 100%;
      height: 750px;
      
      #topBar {
        height: 75px;
        padding-left: 20%;
        padding-right: 20%;
        position: relative;
        
        #topBarLeft {
          position: absolute;
          left: 20%;

          #icon {
            height: 75px;
            width: 75px;
            background-image: url("../assets/icon-above-font.svg");
            background-size: contain;
            background-repeat: no-repeat;
            display: inline-block;
            margin: 0%;

            a {
              display: block;
              height: 75px;
              width: 75px;
            }
          }

          #navBar {
            display: inline-block;
            height: 75px;

            ul {
              display: inline;
              margin: 0%;
              padding: 0%;
              list-style: none;

              li {
                display: inline-block;
                margin: 10px;
              }
            }
          }
        }
      }
    }

    #middle {

    }

    #bottom {

    }
}

</style>

