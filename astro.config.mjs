// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	site: 'https://docs-class.github.io/si',
	base: 'si',
	
	integrations: [
		starlight({
			title: 'Sistemas Informáticos',
			social: {
				github: 'https://github.com/docs-class/si',
			},
			sidebar: [
				{
					label: 'UT1 - SISTEMAS INFORMÁTICOS: ARQUITECTURA Y COMPONENTES',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '1.1 Arquitectura y Componentes', slug: '/ut1/ut11' },
						{ label: '1.2 Tipos de Redes y Componentes', slug: 'ut1/ut12' },
						{ label: '1.3 Precauciones Básicas', slug: 'ut1/ut13' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
