import Vue from 'vue'
import router from 'vue-router'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import Index from '../components/Index.vue'

Vue.use(router);

export default new router({
    routes:[
        {path: '/', component: Index},
        {path: '/login', component: LogIn},
        {path: '/signup', component: SignUp}
    ]
})
