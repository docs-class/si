---
title: "Automatización con n8n"
description: "Automatización de tareas con n8n"
export_on_save:
  puppeteer: true
  html: false
---

## 🎯 Introducción a n8n  

### ¿Qué es n8n?

- Plataforma de automatización basada en nodos.
- Open Source y autohospedable.
- Similar a Zapier o Make, pero libre y local.


### ¿Cómo funciona?

- Trabaja con **nodos conectados**.
- Ejecuta flujos de trabajo (_workflows_).
- Permite integrar APIs, scripts y servicios.

### 📦 Instalación Paso a Paso

#### ✅ Paso 1: Verificar e instalar Node.js y npm

**Windows / Linux / macOS**

1. Abre el terminal (o PowerShell/CMD en Windows).
2. Ejecuta:
   ```bash
   node -v
   npm -v
   ```
3. Si no aparece la versión, descarga Node.js desde:
   👉 [https://nodejs.org](https://nodejs.org)  
   Elige la versión LTS (la más estable).

4. Reinicia el terminal y verifica de nuevo las versiones:
   ```bash
   node -v
   npm -v
   ```

---

#### ✅ Paso 2: Instalar n8n de forma local

1. En el terminal, ejecuta:
   ```bash
   npm install -g n8n
   ```
   Esto instala n8n globalmente en tu sistema.

2. Una vez terminado, inicia n8n:
   ```bash
   n8n start
   ```
   Esto arrancará el servidor local de n8n.

3. Abre tu navegador y entra en:
   👉 [http://localhost:5678](http://localhost:5678)

   ¡Ya tienes n8n corriendo!

---

### 🧪 Primeros Pasos en n8n

#### 🧭 Paso 3: Crear tu primer Workflow

1. Al entrar en la interfaz web:
   - Verás un lienzo vacío.
   - A la izquierda hay una lista de **nodos disponibles**.

2. Haz clic en el botón **"+"** para crear un nuevo workflow.

3. Escribe un nombre como "Primer Workflow".

4. Arrastra un nodo `HTTP Request` al lienzo.

5. Configura el nodo:
   - URL: `https://jsonplaceholder.typicode.com/posts/1`
   - Método HTTP: `GET`

6. Arrastra un nodo `Debug` y conéctalo al anterior.

7. Haz clic en **"Execute Workflow"** (botón verde).

8. En la pestaña **"Execution Data"**, verás los datos devueltos por la API.

---

#### 💡 Paso 4: Guardar y exportar tu workflow

1. Haz clic en **"Save"** arriba a la derecha.
2. Puedes exportar el workflow como JSON:
   - Menú **"Workflow" > Export to File"**
   - Útil para compartir con compañeros o entregar tareas.

---

### 🛠️ Opciones Adicionales (Avanzadas)

> Estas opciones son opcionales y pueden usarse después del primer contacto con n8n.

#### 🐳 Usar Docker (opcional)

Si prefieres usar Docker (muy útil en entornos profesionales):

```bash
docker run -it -p 5678:5678 n8nio/n8n
```

👉 Más info: [https://docs.n8n.io/hosting-n8n/docker/](https://docs.n8n.io/hosting-n8n/docker/)

---

#### 🗂️ Persistencia de datos (opcional)

Por defecto, n8n no guarda los workflows si lo cierras. Para guardarlos:

1. Crea una carpeta en tu equipo, por ejemplo: `C:\n8ndata` o `/home/tuusuario/n8ndata`
2. Inicia n8n con esta variable de entorno:
   ```bash
   N8N_STORAGE_BASE_PATH=./n8n-data n8n start
   ```

---

### 📝 Actividades Propuestas para los Alumnos

#### 🧪 Actividad 1: Automatizar una consulta a una API pública
- Usa la API de GitHub (`https://api.github.com/users/username`) para obtener información de un usuario.
- Muestra el resultado en el debug.

#### 🧪 Actividad 2: Hacer una copia de seguridad de archivos
- Usa el nodo `Read Binary File` para leer un archivo.
- Usa el nodo `Write Binary File` para guardarlo en otra ubicación.
- Programa este flujo con el nodo `Cron`.

#### 🧪 Actividad 3: Enviar un correo con datos de una consulta
- Usa nodos como `HTTP Request` + `Email`.
- Envía un correo con resultados de una llamada a una API.

---

### 📚 Recursos Oficiales

- Documentación oficial: [https://docs.n8n.io](https://docs.n8n.io)
- Comunidad y foro: [https://community.n8n.io](https://community.n8n.io)
- Plantillas predefinidas: [https://n8n.io/workflows](https://n8n.io/workflows)
