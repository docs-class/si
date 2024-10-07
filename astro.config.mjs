// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';


// https://astro.build/config
export default defineConfig({
    site: 'https://docs-class.github.io/',
    base: '/si',
    integrations: [markdoc(), starlight({
        title: {
            es: 'Sistemas Informáticos',
            va: 'Sistemes Informàtics',
            en: 'IT Systems',
        },
        social: {
            github: 'https://github.com/docs-class/si',
        },
        locales: {
            'es': { lang: 'es', label: 'Español' },
            //'en': { lang: 'en', label: 'English' },
            'va': { lang: 'va', label: 'Valencià' },
        },
        // Default locale
        defaultLocale: 'va',
        sidebar: [
            {
                label: 'UT1 - SISTEMES INFORMÀTICS: ARQUITECTURA Y COMPONENTS',
                translations: {
                    'es': 'UT1 - SISTEMAS INFORMÁTICOS: ARQUITECTURA Y COMPONENTES',
                    'en': 'UT1 - IT SYSTEMS: ARQUITECTURE AND COMPONENTS',
                },
                // Collapsa el grupo de forma predeterminada.
                collapsed: true,
                items: [
                    {
                        label: '1.1 Arquitectura i Components',
                        translations: {
                            'es': '1.1 Arquitectura y Componentes',
                            'en': '1.1 Arquitecture and Components',
                        },
                        items: [
                            'ut1/ut11',
                            'ut1/ut11-info',
                            'ut1/ut11-arch',
                            'ut1/ut11-cpu',
                            'ut1/ut11-mb',
                            'ut1/ut11-box',
                            'ut1/ut11-ram',
                            'ut1/ut11-post',
                            'ut1/ut11-gpu',
                            'ut1/ut11-hdd',
                            'ut1/ut11-interfaces',
                            'ut1/ut11-raid',
                            'ut1/ut11-other',
                        ],
                    },
                    {
                        label: '1.2 Tipus de Xarxes i Components',
                        translations: {
                            'es': '1.2 Tipos de Redes y Componentes',
                            'en': '1.2 Network Topologies and Components',
                        },
                        items: [
                            'ut1/ut12',
                            'ut1/ut12-comp',
                        ],
                    },
                    {
                        label: '1.3 Precaucions Bàsiques',
                        translations: {
                            'es': '1.3 Precauciones Básicas',
                            'en': '1.3 Basic Precautions',
                        },

                        items: [
                            'ut1/ut13',
                        ],
                    },
                ],
            },
            // {
            //     label: 'UT2 - SISTEMES OPERATIUS. INTRODUCCIÓ',
            //     translations: {
            //         'es': 'UT2 - SISTEMAS OPERATIVOS. INTRODUCCIÓN',
            //         'en': 'UT2 - OPERATING SYSTEMS. INTRODUCTION',
            //     },
            //     // Collapsa el grupo de forma predeterminada.
            //      collapsed: true,
            //     items: [
            //         {
            //             label: '2.1 Introducció als Sistemes Operatius',
            //             translations: {
            //                 'es': '2.1 Introducción a los Sistemas Operativos',
            //                 'en': '2.1 System Operating Introduction',
            //             },
            //             items: [
            //                 'ut2/ut21',
            //             ],
            //         },
            //         {
            //             label: '2.2 Màquines virtuals, Instalació i Actualizació de SSOO',
            //             translations: {
            //                 'es': '2.2 Máquinas virtuales, Instalación y actualización de SSOO',
            //                 'en': '2.2 Virtual Machines, Installing & updating OS',
            //             },
            //             items: [
            //                 'ut2/ut22',
            //             ],
            //         },
            //     ],
            // },
        ],
    }),],
});