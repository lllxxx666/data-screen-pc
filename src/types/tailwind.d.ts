import { ColorPalette } from '../config/tailwind/colors';

declare module 'tailwindcss/colors' {
	export interface Colors extends ColorPalette {}
}
