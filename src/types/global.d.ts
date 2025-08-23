// 扩展全局类型
declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module '@/router/*' {
	const router: any;
	export default router;
}

// Mock.js类型扩展
declare module 'mockjs' {
	export function mock(template: any): any;
	export class Random {
		static id(): string;
		static city(prefix?: boolean): string;
		static now(unit?: string, format?: string): string;
		// 添加更多你需要的类型
	}
}

// ECharts类型增强
declare module 'echarts' {
	export * from 'echarts/core';
	export * from 'echarts/charts';
	export * from 'echarts/components';
	export * from 'echarts/renderers';
}

// 环境变量类型增强
interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_SENTRY_DSN: string;
	readonly VITE_DATA_LIMIT: number;
	readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// 大屏专用类型
interface LogisticsData {
	id: string;
	status: '运输中' | '已签收' | '滞留';
	position: {
		province: string;
		city: string;
		county?: string;
		lat: number;
		lng: number;
	};
	timestamp: string;
	speed: number;
	temperature: number;
}

// Pinia Store类型
interface DataStoreState {
	realtimeData: LogisticsData[];
	cachedData: Map<string, LogisticsData[]>;
	config: {
		theme: 'dark' | 'light';
		refreshRate: number;
	};
}
