import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import VueRouter from 'vue-router'
import VueModal from 'vue-js-modal'

import { IntroPage, MainPage, CommentPage, PostPage, EditPage, LoginPage, FindPassword, SignupEmail, SignupPage, MyInfoPage, Test, SharePage, InfoEditPage, PwEditPage } from './pages';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueModal, { dynamic: true });
Vue.use(VueClipboard);


const router = new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/',
            component: MainPage
        },
        {
            path: '/comment',
            component: CommentPage
        },
        {
            path: '/intro',
            component: IntroPage
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/findpassword',
            component: FindPassword
        },
        {
            path: '/signupemail',
            component: SignupEmail
        },
        {
            path: '/signup',
            component: SignupPage
        },
        {
            path: '/post',
            component: PostPage
        },
        {
            path: '/edit',
            component: EditPage
        },
        {
            path: '/myinfo',
            component: MyInfoPage
        },
        {
            path: '/share',
            component: SharePage
        },
        {
            path: '/infoedit',
            component: InfoEditPage
        },
        {
            path: '/pwedit',
            component: PwEditPage
        },
        {
            path: '/test',
            component: Test
        }
        
    ]
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')