// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


import markdoc from '@astrojs/markdoc';


// https://astro.build/config
export default defineConfig({
    site: 'https://docs-class.github.io/',
    base: '/si',

    integrations: [markdoc(),starlight({
        title: 'Sistemas Informáticos',
        social: {
            github: 'https://github.com/docs-class/si',
        },
        sidebar: [
            {
                label: 'UT1 - SISTEMAS INFORMÁTICOS: ARQUITECTURA Y COMPONENTES',
                items: [
                    { 
                        label: '1.1 Arquitectura y Componentes', 
                        items: [
                            { label: 'Introdución', slug: 'ut1/ut11' },
                            { label: 'Arquitectura', slug: 'ut1/ut11-arquitectura' },
                            'ut1/ut11-procesador',
                            { label: 'Caja', slug: 'ut1/ut11-caja' },
                            'ut1/ut11-placa',
                          ],
                    },
                  //  { label: '1.2 Tipos de Redes y Componentes', slug: 'ut1/ut12' },
                    //{ label: '1.3 Precauciones Básicas', slug: 'ut1/ut13' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), markdoc()],
});