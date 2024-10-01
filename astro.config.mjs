// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';


// https://astro.build/config
export default defineConfig({
    site: 'https://docs-class.github.io/',
    base: '/si/va',

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
           // 'en': { lang: 'en', label: 'English' },
            'va': { lang: 'va', label: 'Valencià' },
        },
        // Default locale
        defaultLocale: 'va',
        sidebar: [
            {
                label: 'UT1 - SISTEMES INFORMÀTICOS: ARQUITECTURA Y COMPONENTS',
                translations: { 
                  'es': 'UT1 - SISTEMAS INFORMÁTICOS: ARQUITECTURA Y COMPONENTES' ,
                  //'en': 'UT1 - IT SYSTEMS: ARQUITECTURE AND COMPONENTS' ,
                },
                items: [
                    {
                        label: '1.1 Arquitectura i Components',
                        translations: { 
                          'es': '1.1 Arquitectura y Componentes' ,
                        //  'en': '1.1 Arquitecture and Components' ,
                        },
                        items: [
                            'ut1/ut11',
                            'ut1/ut11-arquitectura',
                            'ut1/ut11-procesador',
                            'ut1/ut11-placa',
                            'ut1/ut11-caja',
                            { slug: 'ut1/ut11-ram', badge: { text: 'Current', variant: 'success' }},
                            'ut1/ut11-gpu',
                            'ut1/ut11-almacenamiento',
                            'ut1/ut11-interfaces',
                            'ut1/ut11-raid',
                            'ut1/ut11-otros',
                        ],
                    },
                    {
                        label: '1.2 Tipus de Xarxes i Components',
                        translations: { 
                          'es': '1.2 Tipos de Redes y Componentes' ,
                          //'en': '1.2 Network Topologies and Components' ,
                        },
                        items: [
                            'ut1/ut12',
                        ],
                    },
                    {
                      label:'1.3 Precaucions Bàsiques',
                      translations: { 
                        'es':  '1.3 Precauciones Básicas' ,
                        //'en': '1.3 Basic Precautions' ,
                      },
                      items: [
                          'ut1/ut13',
                      ],
                  },
                ],
            },
        ],
    }),],
});