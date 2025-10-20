// @ts-check
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import starlight from '@astrojs/starlight';
import fullviewMode from 'starlight-fullview-mode';

// math plugins
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import d2 from 'astro-d2';

/*
***EXPORT TO PDF***
Copia y pega en terminal para generar PDF de todas las UTs
Asegúrate de que el servidor de desarrollo esté en marcha (pnpm run dev)

npx starlight-to-pdf --url http://localhost:4321/si/ut1/ -p ./public/_pdf --filename ut1_all --pdf-outline --no-contents --header ./src/components/header-pdf.html --footer ./src/components/footer-pdf.html --margins '2.8cm 1cm 1.5cm 1.5cm'

Luego elimina las unidades que no necesites.
*/

// https://astro.build/config
export default defineConfig({
    site: 'https://docs-class.github.io/',
    base: '/si',
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
    integrations: [markdoc(), starlight({
        title: 'Sistemas Informáticos',
        favicon: '/images/favicon.png',
        expressiveCode: false,
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/custom.css',
            './src/styles/katex.css',
        ],
        plugins: [
            fullviewMode(),
        ],

        // Default locale
        //defaultLocale: 'es',
        sidebar: [
            {
                label: 'UT1 - SISTEMAS INFORMÁTICOS: ARQUITECTURA Y COMPONENTES',
                // Collapsa el grupo de forma predeterminada.
                collapsed: true,
                items: [
                    {
                        label: '1.1 Arquitectura y Componentes',
                        items: [
                            'ut1/ut11',
                            'ut1/ut11-info',
                            'ut1/ut11-post',
                            'ut1/ut11-arch',
                            'ut1/ut11-cpu',
                            'ut1/ut11-motherboard',
                            'ut1/ut11-box',
                            'ut1/ut11-ram',
                            'ut1/ut11-gpu',
                            'ut1/ut11-hdd',
                            'ut1/ut11-interfaces',
                            'ut1/ut11-raid',
                            'ut1/ut11-other',
                        ],
                    },
                    {
                        label: '1.2 Tipos de Redes y Componentes',
                        items: [
                            'ut1/ut12',
                            'ut1/ut12-comp',
                        ],
                    },
                    {
                        label: '1.3 Precauciones Básicas y montaje',
                        items: [
                            'ut1/ut13',
                        ],
                    },
                ],
            },
             //UT2
            {
                label: 'UT2 - SISTEMES OPERATIUS. INTRODUCCIÓ',
                // badge: { text: '28-OCT', variant: 'success' },
                translations: {
                    'es': 'UT2 - SISTEMAS OPERATIVOS. INTRODUCCIÓN',
                    'en': 'UT2 - OPERATING SYSTEMS. INTRODUCTION',
                },
                // Collapsa el grupo de forma predeterminada.
                collapsed: true,
                items: [
                    {
                        label: '2.1 Introducción a los Sistemas Operativos',
                        items: [
                            'ut2/ut21-intro',
                            'ut2/ut21-boot',
                            'ut2/ut21-win',
                            'ut2/ut21-linux',
                        ],
                    },
                    {
                        label: '2.2 Máquinas virtuales, Instalación y actualización de SSOO',
                        items: [
                            'ut2/ut22-virtualization',
                            'ut2/ut22-virtualbox-advanced',
                            'ut2/ut22-restore',
                            'ut2/ut22-usb',
                        ],
                    },
                ],
            },
            //UT3
            {
                label: 'UT3 - GESTIÓN DE ARCHIVOS Y ALMACENAMIENTO. INTRODUCCIÓN AL TERMINAL',
                // badge: { text: '25-NOV', variant: 'success' },
                // Collapsa el grupo de forma predeterminada.
                collapsed: true,
                items: [
                    {
                        label: '3.1 Estructura de directorios',
                        items: [
                            'ut3/ut31',
                            'ut3/ut31-directories',
                        ],
                    },
                    {
                        label: '3.2 Particiones, Automatizaciones y backups',
                        items: [
                            'ut3/ut32-partitions',
                            'ut3/ut32-backup-auto',
                            {
                                label: 'Automatización',
                                items: [
                                    'ut3/ut32-wintasks',
                                    'ut3/ut32-linuxtasks',
                                ],
                            },
                        ],
                    },
                    {
                        label: '3.3 Gestión de la información',
                        items: [
                            'ut3/ut33-cli',
                            'ut3/ut33-cli-win',
                            'ut3/ut33-cli-linux',
                            'ut3/ut33-cli-linux-advanced',

                        ],
                    },
                ],
            },
            //UT4
            {
                label: 'UT4 - GESTIÓN DE USUARIOS Y PROCESOS. SCRIPTING',
                // badge: { text: '26ENE25', variant: 'success' },
                // Collapsa el grupo de forma predeterminada.
                collapsed: true,
                items: [
                    {
                        label: '4.1 Gestión de usuarios',
                        items: [
                            'ut4/ut41',
                            'ut4/ut41-win',
                            {
                                label: 'Gestión de usuarios - Linux',
                                items: [
                                    'ut4/ut41-linux',
                                    'ut4/ut41-linux-permissions',
                                    'ut4/ut41-linux-groups',
                                    'ut4/ut41-linux-users',
                                ],
                            },
                            'ut4/ut41-policies',

                        ],
                    },
                    //Scripts
                    {
                        label: '4.2 Scripting',
                        items: [
                            'ut4/ut42-scripting',
                            'ut4/ut42-scripting-variables',
                            'ut4/ut42-scripting-backslash',
                            'ut4/ut42-scripting-arithmetics',
                            'ut4/ut42-scripting-parametres',
                            {
                                label: 'Estructuras de Control',
                                items: [
                                    'ut4/ut42-scripting-if-else',
                                    'ut4/ut42-scripting-operators',
                                    'ut4/ut42-scripting-case',
                                    'ut4/ut42-scripting-forin',
                                    'ut4/ut42-scripting-for',
                                    'ut4/ut42-scripting-while',
                                    'ut4/ut42-scripting-break',
                                    'ut4/ut42-scripting-files',
                                ],
                            },
                        ],
                    },
                ],
            },
            //UT5
            {
                label: "UT5 - SISTEMAS INFORMÁTICOS EN RED. CONFIGURACIÓN Y EXPLOTACIÓN",
                // badge: { text: '25-NOV', variant: 'success' },
                // Collapsa el grupo de forma predeterminada.
                items: [
                    'ut5/ut51-introduction',
                    // 'ut5/ut51-services',
                    // 'ut5/ut51-ssh',
                ],
            },
            //UT6
            {
                label: "UT6 - GESTIÓN DE RECURSOS EN RED",
                // badge: { text: '25-NOV', variant: 'success' },
                // Collapsa el grupo de forma predeterminada.
                items: [
                    'ut6/ut61-introduction',
                    'ut6/ut61-directory-service',
                    'ut6/ut61-structure',
                    'ut6/ut61-proxmox',
                ],
            },
            //UT7
            {
                label: "UT7 - APLICACIONES INFORMÁTICAS",
                // badge: { text: '25-NOV', variant: 'success' },

                // Collapsa el grupo de forma predeterminada.
                items: [
                    'ut7/ut71-introduction',
                ],
            }, 
        ],
    }), d2()],
});