import { has } from 'lodash-es';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/RescueCenter.vue'),
		meta: {
			title: '管理中心',
		},
	},
	{
		path: '/dashboard/:id',
		name: 'Dashboard',
		component: () => import('@/views/Dashboard.vue'),
		props: true, // 将路由参数作为props传递给组件
		meta: {
			title: '数据大屏',
			requiresAuth: false, // 根据项目需求设置
		},
	},
	{
		path: '/:pathMatch(.*)*', // 捕获所有未匹配的路由
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue'),
		meta: {
			title: '页面不存在',
			hasLayout: false, // 不使用布局
		},
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	// 滚动行为控制
	scrollBehavior(to, from, savedPosition) {
		// 数据大屏通常不需要滚动恢复，直接返回顶部
		return { top: 0 };
	},
});

// 动态设置页面标题
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});

export default router;
