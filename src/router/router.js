import Vue from 'vue'
import router from 'vue-router'
import LogIn from '../components/admin/LogIn.vue'
import SignUp from '../components/admin/SignUp.vue'
import Home from '../components/Home.vue'
import TopScreen from '../components/homepage/TopScreen.vue'
import MiddleScreen from '../components/homepage/MiddleScreen.vue'
import BottomScreen from '../components/homepage/BottomScreen.vue'

Vue.use(router);

export default new router({
    routes:[{
        path: '/',
        component: Home,
        children: [{
            path: '/',
            components: {
                default: TopScreen,
                middleScreen: MiddleScreen,
                bottomScreen: BottomScreen
            }
        },{
            path: 'login',
            components:{
                default: LogIn
            }
        },{
            path: 'signup',
            components:{
                default: SignUp
            }
        }]
    }]
})
