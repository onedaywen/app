import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Index = () => import('src/pages/index/index.vue');
const Shopcar = () => import('src/pages/shopcar/index.vue');
const PersonalCenter = () => import('src/pages/personal_center/index.vue');
const routes = [
	{
		path: '/',
		component: Index
	},
	{
		path: '/index',
		component: Index
	},
	{
		path: '/shopcar',
		component: Shopcar
	},
	{
		path: '/personal_center',
		component: PersonalCenter
	}
];

const router = new VueRouter({
	routes
});


module.exports = router;