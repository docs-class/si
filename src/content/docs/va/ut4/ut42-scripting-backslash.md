---
title: "Scripting - Cometes i contrabarra"
description: "Scripting - Cometes i contrabarra"
---

- La contrabarra serveix per a escapar (llevar la funció especial) un caràcter especial. Ex: \*, \(, \)
- El text sempre anirà entre cometes simples o dobles.
- Un text entre cometes simples ignorarà tots els caràcters especials.
- Un text entre cometes dobles ignorarà tots els caràcters especials excepte $, ` i \
- La sintaxi $(ordre) o `ordre` permet substituir una ordre per la seua eixida.

```bash
echo "Hui és date"       # Mostra: Hui és date
echo "Hui és `date`"     # Mostra: Hui és [data actual]
echo "Hui és $(date)"    # Mostra: Hui és [data actual]

name=pepito 
echo hola $name  #hola pepito
echo "hola $name"  #hola pepito
echo 'hola $name'  #hola $name (no expandeix la variable)
echo hola $name, això és un *  #hola pepito, això és un *
echo 'hola $name, això és un *'  #hola $name, això és un * (no expandeix la variable)
echo "hola $name, això és un *"  #hola pepito, això és un *
```