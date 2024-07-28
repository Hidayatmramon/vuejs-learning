    import './assets/main.css'

    import { createApp } from 'vue';
    import App from './App.vue';
    import Home from '@/pages/home.vue';
    import About from '@/pages/About.vue';
    import { createWebHashHistory, createRouter } from 'vue-router';
        
    const routes = [
        {
            path: '/',
            component: Home, name: "home"
        },
        {
            path: '/about',
            component: About, name: "about"
        }
    ];

    const router = createRouter({
        history: createWebHashHistory(),
        routes: routes
    });

    createApp(App).use(router).mount('#app')
