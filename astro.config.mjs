// @ts-check
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import starlight from '@astrojs/starlight';
import starlightViewModes from 'starlight-view-modes';


import d2 from 'astro-d2';


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
        locales: {
            'es': { lang: 'es', label: 'Español' },
            'en': { lang: 'en', label: 'English' },
            'va': { lang: 'va', label: 'Valencià' },
        },
        expressiveCode: false,
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/custom.css',
        ],
        plugins: [
            starlightViewModes({
                zenModeEnabled: true,
                zenModeCloseButtonPosition: "top-right",
                zenModeShowHeader: false,
                zenModeShowSidebar: false,
                zenModeShowTableOfContents: false,
                zenModeShowFooter: true,
                zenModeShowSwitchInHeader: true,
                zenModeShowSwitchInHeaderMobile: true,
                zenModeShowSwitchInTableOfContents: false,

                presentationModeEnabled: false, // not supported yet
                // presentationModeControlButtonPosition: "middle-right", // not supported yet
                // presentationModeShowSwitchInTableOfContents: true, // not supported yet
            }),
        ],
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
                            'ut1/ut11-post',
                            'ut1/ut11-arch',
                            'ut1/ut11-cpu',
                            'ut1/ut11-mb',
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
                        label: '1.3 Precaucions Bàsiques i muntatge',
                        translations: {
                            'es': '1.3 Precauciones Básicas y monteje',
                            'en': '1.3 Basic Precautions and mounting',
                        },

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
                        label: '2.1 Introducció als Sistemes Operatius',
                        translations: {
                            'es': '2.1 Introducción a los Sistemas Operativos',
                            'en': '2.1 System Operating Introduction',
                        },
                        items: [
                            'ut2/ut21',
                            'ut2/ut21-install',
                            'ut2/ut21-boot',
                            'ut2/ut21-win',
                            'ut2/ut21-linux',
                        ],
                    },
                    {
                        label: '2.2 Màquines virtuals, Instalació i Actualizació de SSOO',
                        translations: {
                            'es': '2.2 Máquinas virtuales, Instalación y actualización de SSOO',
                            'en': '2.2 Virtual Machines, Installing & updating OS',
                        },
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
                label: "UT3 - GESTIÓ D'ARXIUS I EMMAGATZEMATGE. INTRODUCCIÓ AL TERMINAL",
                // badge: { text: '25-NOV', variant: 'success' },
                translations: {
                    'es': 'UT3 - GESTIÓN DE ARCHIVOS Y ALMACENAMIENTO. INTRODUCCIÓN AL TERMINAL ',
                    'en': 'UT3 - FILE MANAGEMENT AND STORAGE. INTRODUCTION TO THE TERMINAL',

                },
                // Collapsa el grupo de forma predeterminada.
                collapsed: true,
                items: [
                    {
                        label: '3.1 Estructura de directoris',
                        translations: {
                            'es': '3.1 Estructura de directorios',
                            'en': '3.1 Directory structure',
                        },
                        items: [
                            'ut3/ut31',
                            'ut3/ut31-directories',
                        ],
                    },
                    {
                        label: '3.2 Particions, Automatizacions i backups',
                        translations: {
                            'es': '3.2 Particiones, Automatizaciones y backups',
                            'en': '3.2 Partitions, Automations & backups',
                        },
                        items: [
                            'ut3/ut32-partitions',
                            'ut3/ut32-backup-auto',
                            {
                                label: 'Automatització',
                                translations: {
                                    'es': 'Automatización',
                                    'en': 'Automation',
                                },
                                items: [
                                    'ut3/ut32-wintasks',
                                    'ut3/ut32-linuxtasks',
                                ],
                            },
                        ],
                    },
                    {
                        label: '3.3 Gestió de la informació',
                        translations: {
                            'es': '3.3 Gestión de la información',
                            'en': '3.3 Information Management',
                        },
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
                label: "UT4 - GESTIÓ USUARIS I PROCESSOS. SCRIPTING",
                // badge: { text: '26ENE25', variant: 'success' },
                translations: {
                    'es': 'UT4 - GESTIÓN DE USUARIOS Y PROCESOS. SCRIPTING',
                    'en': 'UT4 - USERS AND PROCESSES. SCRIPTING',

                },
                // Collapsa el grupo de forma predeterminada.
                collapsed: true,
                items: [
                    {
                        label: '4.1 Gestió de usuaris',
                        translations: {
                            'es': '4.1 Gestión de usuarios',
                            'en': '4.1 User management',
                        },
                        items: [
                            'ut4/ut41',
                            'ut4/ut41-win',
                            {
                                label: 'Gestió d\'usuaris - Linux',
                                translations: {
                                    'es': 'Gestión de usuarios - Linux',
                                    'en': 'Gestión de usuarios - Linux',
                                },
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
                    translations: {
                        'es': '4.2 Scripting',
                        'en': '4.2 Scripting',
                    },
                    items: [
                        'ut4/ut42-scripting',
                        'ut4/ut42-scripting-variables',
                        'ut4/ut42-scripting-backslash',
                        'ut4/ut42-scripting-arithmetics',
                        'ut4/ut42-scripting-parametres',
                        {
                            label: 'Estructures de Control',
                            translations: {
                                'es': 'Estructuras de Control',
                                'en': 'Control structures',
                            },
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
                label: "UT5 - SISTEMES INFORMÀTICS EN XARXA. CONFIGURACIÓ I EXPLOTACIÓ",
                // badge: { text: '25-NOV', variant: 'success' },
                translations: {
                    'es': 'UT5 - SISTEMAS INFORMÁTICOS EN RED. CONFIGURACIÓN Y EXPLOTACIÓN',
                    'en': 'UT5 - COMPUTER SYSTEMS IN NETWORKS. CONFIGURATION AND OPERATION',

                },
                // Collapsa el grupo de forma predeterminada.
                items: [
                        'ut5/ut51-introduction',
                        // 'ut5/ut51-services',
                        // 'ut5/ut51-ssh',
                ],
            },
            //UT6
            {
                label: "UT6 - GESTIÓ DE RECURSOS EN XARXA",
                // badge: { text: '25-NOV', variant: 'success' },
                translations: {
                    'es': 'UT6 - GESTIÓN DE RECURSOS EN RED',
                    'en': 'UT6 - NETWORK RESOURCES ADMINISTRATION',

                },
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
                label: "UT7 - APLICACIONS INFORMÀTIQUES",
                // badge: { text: '25-NOV', variant: 'success' },
                translations: {
                    'es': 'UT7 - APLICACIONES INFORMÁTICAS',
                    'en': 'UT7 - IT APPS',

                },
                // Collapsa el grupo de forma predeterminada.
                items: [
                        'ut7/ut71-introduction',
                ],
            },
        ],
    }), d2()],
});