import { Vue } from 'vue';
import { VueRouter } from 'vue-router';
import HomePage from '@/views/HomePage';
import AboutPage from '@/views/AboutPage';
import RegisterPage from '@/views/RegisterPage';
import LoginPage from '@/views/LoginPage';
import ProfilePage from '@/views/ProfilePage';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/profile/:id',
        component: ProfilePage
    }
];

const router = new VueRouter({
  routes,
});

export default router;