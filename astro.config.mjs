// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from "astro/config";
import markdoc from '@astrojs/markdoc';
import fullviewMode from 'starlight-fullview-mode';

// math plugins
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeExternalLinks from 'rehype-external-links';

import d2 from 'astro-d2';

/*
***EXPORT TO PDF***
Copia y pega en terminal para generar PDF de todas las UTs
Asegúrate de que el servidor de desarrollo esté en marcha (pnpm run dev)
Solo genera el PDF de las unidades que se muestren en el menu

npx starlight-to-pdf --url http://localhost:4321/si/ut1/ -p ./public/_pdf --filename SI --pdf-outline --no-contents --header ./src/components/header-pdf.html --footer ./src/components/footer-pdf.html --margins '2.8cm 1cm 1.5cm 1.5cm'
npx starlight-to-pdf --url https://docs-class.github.io/si/ -p ./public/_pdf --filename SI --pdf-outline --no-contents --header ./src/components/header-pdf.html --footer ./src/components/footer-pdf.html --margins '2.8cm 1cm 1.5cm 1.5cm'

*/

// https://astro.build/config
export default defineConfig({
    site: 'https://docs-class.github.io/',
    base: '/si',
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex, [
            rehypeExternalLinks,
            {
                target: '_blank',
                rel: ['noopener', 'noreferrer'],
                // opcional: para que solo aplique a URLs absolutas y no relativas
                // defaults: true,
            },
        ]],
    },
    integrations: [markdoc(), d2(), starlight({
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
        social: [
            { icon: 'seti:pdf', label: 'PDF', href: 'https://docs-class.github.io/si/_pdf/SI.pdf' },
        ],
        sidebar: [
            {
                label: 'UT1 - SISTEMAS INFORMÁTICOS: ARQUITECTURA Y COMPONENTES',
                collapsed: true,
                items: [
                    {
                        label: '1.1 Arquitectura y Componentes',
                        autogenerate: { directory: 'ut1/ut11' },
                    },
                    {
                        label: '1.2 Tipos de Redes y Componentes',
                        autogenerate: { directory: 'ut1/ut12' },
                    },
                    {
                        label: '1.3 Precauciones Básicas y montaje',
                        autogenerate: { directory: 'ut1/ut13' },
                    },
                ],
            },
            //UT2
            {
                label: 'UT2 - SISTEMAS OPERATIVOS. INTRODUCCIÓN',
                collapsed: true,
                items: [
                    {
                        label: '2.1 Introducción a los Sistemas Operativos',
                        autogenerate: { directory: 'ut2/ut21' },
                    },
                    {
                        label: '2.2 Máquinas virtuales, Instalación y actualización de SSOO',
                        autogenerate: { directory: 'ut2/ut22' },
                    },
                ],
            },
            //UT3
            {
                label: 'UT3 - GESTIÓN DE ARCHIVOS Y ALMACENAMIENTO. INTRODUCCIÓN AL TERMINAL',
                //badge: { text: '25NOV24/01DIC25', variant: 'success' },
                collapsed: true,
                items: [
                    {
                        label: '3.1 Estructura de directorios',
                        items: [
                            'ut3/ut31',
                            'ut3/ut31a',
                        ],
                    },
                    {
                        label: '3.2 Particiones, Automatizaciones y backups',
                        items: [
                            'ut3/ut32',
                            'ut3/ut32a',
                            {
                                label: 'Automatización',
                                items: [
                                    'ut3/ut32a1',
                                    'ut3/ut32a2',
                                    'ut3/ut32a3-n8n',
                                ],
                            },
                        ],
                    },
                    {
                        label: '3.3 Gestión de la información',
                        items: [
                            'ut3/ut33-cli',
                            'ut3/ut33a-cli-win',
                            'ut3/ut33b-cli-linux',
                            'ut3/ut33c-cli-linux-advanced',

                        ],
                    },
                ],
            },
            //UT4
                    {
                        label: 'UT4 - GESTIÓN DE USUARIOS Y PROCESOS. SCRIPTING',
                        // badge: { text: '26ENE25', variant: 'success' },
                        // badge: { text: '05FEB26', variant: 'success' },
                        collapsed: true,
                        items: [
                            {
                                label: '4.1 Gestión de usuarios',
                                items: [
                                    'ut4/ut41',
                                    'ut4/ut41a-win',
                                    {
                                        label: 'Gestión de usuarios - Linux',
                                        items: [
                                            'ut4/ut41b-linux',
                                            'ut4/ut41b1-linux-permissions',
                                            'ut4/ut41b2-linux-groups',
                                            'ut4/ut41b3-linux-users',
                                        ],
                                    },
                                    'ut4/ut41c-policies',
        
                                ],
                            },
                            //Scripts
                        /*     {
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
                            }, */
                            
                        ],
                    },
/*
                    
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
                    },  */
        ],
    })],
});