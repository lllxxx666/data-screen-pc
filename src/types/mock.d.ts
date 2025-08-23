declare module 'mockjs' {
	export function mock(template: any): any;
	export class Random {
		static id(): string;
		static city(prefix?: boolean): string;
		static now(unit?: string, format?: string): string;
		// 添加更多你需要的类型
	}
	export interface MockConfig {
		count?: number;
		interval?: number;
	}
}