---
title: "Automatización con n8n"
description: "Automatización de tareas con n8n"
export_on_save:
  puppeteer: true
  html: false
---

## ¿Qué es n8n?

![n8n logo](https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n-1.png)
- Plataforma de automatización basada en nodos.
- Open Source y autohospedable.
- Similar a Zapier o Make, pero libre y local.

## ¿Cómo funciona?

- Trabaja con **nodos conectados**.
- Ejecuta flujos de trabajo (_workflows_).
- Permite integrar APIs, scripts y servicios.

![nodos](https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp)

## Instalación Paso a Paso (Docker Compose)

### 1\. Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

  * **Docker:** El motor de contenedores.
```bash
   // comprobamos la versión
   docker --version
   // en Windows, si no está instalado, usar dentor de PowerShell:
   winget install docker
   // actualizar a la última versión
   winget upgrade docker
```
  * **[Docker Compose](https://imaginaformacion.com/tutoriales/que-es-docker-compose):** Para definir y ejecutar aplicaciones Docker de múltiples contenedores (simplifica mucho el proceso).

### 2\. Crear el Archivo de Configuración (`docker-compose.yml`)

Crea un nuevo directorio para tu proyecto de n8n (ej. `n8n-project`) y dentro de él, crea un archivo llamado [docker-compose.yml](../ut3/ut32a4-docker-compose).


### 3\. Iniciar n8n

Abre tu terminal, navega hasta el directorio donde guardaste el archivo `docker-compose.yml` y ejecuta el siguiente comando:

```bash
docker-compose up -d
```

  * `up`: Crea e inicia los contenedores.
  * `-d`: Ejecuta los contenedores en modo *detached* (en segundo plano).

### 4\. Verificar y Acceder

1.  **Verifica que los contenedores estén corriendo:**

    ```bash
    docker-compose ps
    ```

    Deberías ver algo como `Up` en la columna de `State` para los servicios `n8n` y `postgres`.

2.  **Accede a n8n:**
    Abre tu navegador web y navega a: **`http://localhost:5678`**

    Se te pedirá el usuario y la contraseña que configuraste en `N8N_BASIC_AUTH_USER` y `N8N_BASIC_AUTH_PASSWORD`.

### 5\. Comandos Útiles

  * **Para detener los contenedores (sin eliminar los datos):**
    ```bash
    docker-compose stop
    ```
  * **Para detener y eliminar los contenedores (sin eliminar los datos persistentes):**
    ```bash
    docker-compose down
    ```
  * **Para ver los logs de los contenedores (útil para solucionar problemas):**
    ```bash
    docker-compose logs -f
    ```
  * **Ejecutar n8nn en Docker:**
    ```bash
    docker run -it -p 5678:5678 n8nio/n8n
    ```

Más info: [https://docs.n8n.io/hosting/installation/docker/](https://docs.n8n.io/hosting/installation/docker/)


### Primeros Pasos en n8n

#### Crear tu primer Workflow

[Primer Workflow en n8n](https://docs.n8n.io/try-it-out/tutorial-first-workflow/)

#### Persistencia de datos (opcional)

Por defecto, n8n no guarda los workflows si lo cierras. Para guardarlos:

1. Crea una carpeta en tu equipo, por ejemplo: `C:\n8ndata` o `/home/tuusuario/n8ndata`
2. Inicia n8n con esta variable de entorno:
   ```bash
   N8N_STORAGE_BASE_PATH=./n8n-data n8n start
   ```

### Recursos Oficiales

- Documentación oficial: [https://docs.n8n.io](https://docs.n8n.io)
- Comunidad y foro: [https://community.n8n.io](https://community.n8n.io)
- Plantillas predefinidas: [https://n8n.io/workflows](https://n8n.io/workflows)
- [Cómo conectar cualquier API con n8n](https://youtu.be/eSehYWQO4UA)
- [Nodos más usados en n8n - noobs](https://www.youtube.com/watch?v=4ZMCN0Y5x2s)
