---
title: "Comas y contrabarra"
description: "Comas y contrabarra"
---

- La contrabarra sirve para escapar (quitar la función especial) un carácter especial. Ej: \*, \(, \)
- El texto siempre irá entre comillas simples o dobles.
- Un texto entre comillas simples ignorará todos los caracteres especiales.
- Un texto entre comillas dobles ignorará todos los caracteres especiales excepto $, ` y \
- La sintaxis $(orden) o `orden` permiten sustituir una orden por su salida.

```bash
echo "Hoy es date"       # Muestra: Hoy es date
echo "Hoy es `date`"     # Muestra: Hoy es [fecha actual]
echo "Hoy es $(date)"    # Muestra: Hoy es [fecha actual]

name=pepito 
echo hola $name  #hola pepito
echo "hola $name"  #hola pepito
echo 'hola $name'  #hola $name (no expande la variable)
echo hola $name, esto es un *  #hola pepito, esto es un *
echo 'hola $name, esto es un *'  #hola $name, esto es un * (no expande la variable)
echo "hola $name, esto es un *"  #hola pepito, esto es un *
```

