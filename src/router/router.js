import Vue from 'vue'
import router from 'vue-router'
import LogIn from '../components/admin/LogIn.vue'
import SignUp from '../components/admin/SignUp.vue'
import Home from '../components/Home.vue'

Vue.use(router);

export default new router({
    routes:[{
        path: '/',
        component: Home,
        children: [{
            path: '',
            components: {
                
            }
        },{
            path: 'login',
            component: LogIn
        },{
            path: 'signup',
            component: SignUp
        }]
    }]
})
