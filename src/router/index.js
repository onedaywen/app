import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Index = () => import('src/pages/index/index.vue');
const PageA = () => import('src/pages/page_a/index.vue');
const PageB = () => import('src/pages/page_b/index.vue');
const PageC = () => import('src/pages/page_c/index.vue');
const routes = [
	{
		path: '/',
		component: Index
	},
	{
		path: '/a',
		component: PageA
	},
    {
        path: '/b',
        component: PageB
    },
    {
        path: '/c',
        component: PageC
    }
];

const router = new VueRouter({
	routes
});


module.exports = router;