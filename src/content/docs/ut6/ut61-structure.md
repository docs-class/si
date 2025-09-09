---
title: "Estructura jerárquica de directorio"
description: "Hierarchical directory structure"
---

## Dominios

Conjunto de objetos que comparten un área y una nomenclatura específica.

Nos permite:
- Delimitar la seguridad `(usuarios, acceso, recursos…)`.
- Replicar la información `(unidades de copias de seguridad)`.
- Aplicación de Políticas de Grupo `(influyen al dominio)`.
- Delegar  permisos  administrativos  `(entre  dominios  u  objetos  del dominio)`.
- Organizado en Árboles y Bosques `(estructura jerárquica)`.
- Establecer relaciones de confianza `(entre dominios)`.

![AC](https://media.licdn.com/dms/image/v2/D4E12AQEvAm6Fu3mMIA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1655800725708?e=2147483647&v=beta&t=7oJZbfvpKqB-AKw0ePv-JKpLD5oYRatalc0lbJOpmKk)

### Árbol 
Conjunto de dominios dependientes de una raíz común y que tienen una estructura jerárquica. Dicha jerarquía se caracteriza por tener un espacio de nombres común (un servidor DNS propio). El objetivo de esta fragmentación de la estructura es replicar solo las partes necesarias para disminuir el tráfico en la red.

  - De  esta  forma  sabemos  que  **miEmpresa.net**,  **damA.miEmpresa.net**  y **damB.miEmpresa.net**  forman  parte  del  mismo  árbol,  mientras  que _miEmpresa.com_ e _miEmpresa.es_ no.
  - Si un usuario es creado dentro de un dominio, automáticamente será reconocido en todos los dominios que jerárquicamente dependan del dominio al que pertenece.
![árbol](../../../assets/ut6/06_division.png)

### Bosque
Es el mayor contenedor lógico dentro del directorio, conteniendo a todos los dominios dentro de su ámbito. Cada uno de estos contenedores posee su propio espacio de nombres y una forma de relacionarse con el resto de bosques. Los dominios están interconectados por relaciones de confianza, de forma que los dominios  dentro  de  un  bosque  confían  automáticamente  unos  en  otros  y  los diferentes árboles podrán compartir recursos (se verá más adelante).
Varios árboles pueden integrarse en el mismo bosque, pero NO compartirán espacio de nombres (DNS)
Un bosque contendrá por lo menos un dominio, que será el dominio raíz del bosque.

![bosque](../../../assets/ut6/07_bosque.png)

En este ejemplo se ve como se han unido **5 dominios**  en  un  bosque.  De  estos  5 dominios  3  pertenecen  a  un  árbol  (raíz: **miempresa.com**) y los otros 2 a un segundo árbol (raíz: **tuempresa.com**). 
Las _flechas_ que vemos en el esquema son las relaciones de confianza entre dominios. Todas  han  sido  creadas  automáticamente por  Windows  Server.  Todos  los  dominios pueden comunicarse entre sí gracias a las propiedades de las relaciones de confianza.

### Nomenclatura
- Ordenadores: 
  - computer_name.domain_name
    - PC01.miempresa.net
- Usuarios:
  - user_name@domain_name
    - user_name@miempresa.net
  - DOMAIN_NAME\user_name (NetBios style) # old style
    - MIEMPRESA\user_name
  ![naming](../../../assets/ut6/08_nomenclatura.png)


### Relaciones de confianza 
Método de comunicación segura entre dominios, árboles y bosques, que permiten a los usuarios autentificarse en otra parte del directorio a la que no pertenecen.

### GPO  o  Políticas  de  Grupo  (Group  Policy  Object)
Son  un  conjunto  de configuraciones específicas para usuarios y equipos de un dominio, que se almacenan en objetos de directivas de grupo. Cuando una GPO se aplica en un  controlador  de  dominio,  todos  los  objetos  de  ese  dominio,  han  de cumplir   esa   regla.   El   uso   es   sencillo   y   centralizado,   bastará   con habilitar/deshabilitar la opción en el gestor de GPO. 

  -  Los requisitos para usar una GPO son dos, que la red esté basada en una estructura de dominio y que exista al menos un controlador de dominio y que los equipos y usuarios deben estar unidos al dominio, usando credenciales de dominio para iniciar sesión en sus equipos. Es decir, que sean objetos del directorio.

:::note[Resumen]
Un servicio de directorio ofrece toda la información de los recursos de la red a través de una única ubicación. Para ello convierte cada recurso en un objeto y almacena su información en una base de datos jerárquica y opcionalmente distribuida. La gestión de estos datos se realiza a través de un protocolo determinado por la versión del servicio de directorio escogido. En nuestro caso **ACTIVE DIRECTORY**
:::

:::danger
- Una vez instalado AD no se pude cambiar el nombre de la máquina
- La IP del servidor debe ser fija
:::