---
title: "Estructura jerárquica de directorio"
description: "Hierarchical directory structure"
---

## Estructura

- **Árbol**: conjunto de dominios dependientes de una raíz común y que tienen una estructura jerárquica. Dicha jerarquía se caracteriza por tener un espacio de nombres común (un servidor DNS propio). El objetivo de esta fragmentación de la estructura es replicar solo las partes necesarias para disminuir el tráfico en la red.

  - De  esta  forma  sabemos  que  **miEmpresa.net**,  **damA.miEmpresa.net**  y **damB.miEmpresa.net**  forman  parte  del  mismo  árbol,  mientras  que _miEmpresa.com_ e _miEmpresa.es_ no.
  - Si un usuario es creado dentro de un dominio, automáticamente será reconocido en todos los dominios que jerárquicamente dependan del dominio al que pertenece.

- **Bosque**: es el mayor contenedor lógico dentro del directorio, conteniendo a todos los dominios dentro de su ámbito. Cada uno de estos contenedores posee su propio espacio de nombres y una forma de relacionarse con el resto de bosques. Los dominios están interconectados por relaciones de confianza, de forma que los dominios  dentro  de  un  bosque  confían  automáticamente  unos  en  otros  y  los diferentes árboles podrán compartir recursos (se verá más adelante).
Varios árboles pueden integrarse en el mismo bosque, pero NO compartirán espacio de nombres (DNS)
Un bosque contendrá por lo menos un dominio, que será el dominio raíz del bosque.

- **Relaciones de confianza**: método de comunicación segura entre dominios, árboles y bosques, que permiten a los usuarios autentificarse en otra parte del directorio a la que no pertenecen (se verá más adelante).

- **GPO  o  Políticas  de  Grupo  (Group  Policy  Object)**,  son  un  conjunto  de configuraciones específicas para usuarios y equipos de un dominio, que se almacenan en objetos de directivas de grupo. Cuando una GPO se aplica en un  controlador  de  dominio,  todos  los  objetos  de  ese  dominio,  han  de cumplir   esa   regla.   El   uso   es   sencillo   y   centralizado,   bastará   con habilitar/deshabilitar la opción en el gestor de GPO. 

  -  Los requisitos para usar una GPO son dos, que la red esté basada en una estructura de dominio y que exista al menos un controlador de dominio y que los equipos y usuarios deben estar unidos al dominio, usando credenciales de dominio para iniciar sesión en sus equipos. Es decir, que sean objetos del directorio.


:::note[Resumen]
Un servicio de directorio ofrece toda la información de los recursos de la red a través de una única ubicación. Para ello convierte cada recurso en un objeto y almacena su información en una base de datos jerárquica y opcionalmente distribuida. La gestión de estos datos se realiza a través de un protocolo determinado por la versión del servicio de directorio escogido. En nuestro caso **ACTIVE DIRECTORY** con **LDAP** (protocolo ligero de acceso a directorios)
:::