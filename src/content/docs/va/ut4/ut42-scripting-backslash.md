---
title: "Bàsics"
description: "Comes, contrabarra, echo i read"
---

## Comes i contrabarra

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

## echo
Comandament per a la impressió d'un text en pantalla

```js {3-3}
echo "Cansat d'estudiar? Recorda que fins i tot Batman va necessitar entrenament." 

# Cansat d'estudiar? Recorda que fins i tot Batman va necessitar entrenament.
```

- **-n**     elimina el salt de línia del echo
```js {5-6}
#!/bin/bash
echo -n "Hola"
echo " com estàs?" echo "bé gràcies"

# Hola com estàs?
# bé gràcies
```

- **-e**     activa la interpretació de caràcters precedits pel caràcter d'escapament

```js {4-5}
#!/bin/bash
echo -e "\nhola\nadéu\n"

# hola
# adéu
```

## read
Permet que l'usuari puga introduir valors per a les variables per teclat

```js
#!/bin/bash
echo “Hola, com et dius?”
read nom
echo “has escrit $nom”
```

- Quan l'usuari escriga i preme _enter_, es guardarà el valor de la variable nom. 
- Com en aquest cas anem a **“escriure”** la variable **no usem $**.

:::tip
- Recorda que la variable es crea i existeix només dins del script.
- Si creem la variable en la consola, en la _shell_, sí que podrem usar-la fins a tancar la consola
:::

#### Paràmetres

| **Opció** | **Descripció**                                                                                      | **Exemple**                                                                 |
|-----------|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| -s        | No fa eco en pantalla de la resposta escollida (p.e. contrasenyes)                                   | `read -s password`                                                          |
| -nN       | El nombre màxim de caràcters que es poden introduir serà de N                                        | `read -n5 input`                                                            |
| -p "frase"| Permet incloure una frase aclaridora (per a posar la pregunta “quin és el teu nom?” nom (variable) en la mateixa línia) | `read -p "Quin és el teu nom? " nom`                                        |
| -tT       | Accepta una entrada per un temps màxim de T segons                                                   | `read -t10 resposta`                                                        |

:::note
Podem fer un read amb més d'una variable alhora (separades per espai). 
- L'escrit per l'usuari es repartirà entre les variables usant l'espai com a separador. 
  - Si hi ha més variables que valors, les últimes queden sense valor. 
  - Si hi ha més valors que variables, l'última variable es queda amb el text restant
- Per a mostrar diverses línies de text per pantalla, podríem usar diversos echo o printf, o jugar amb **\n** (salt de línia) i **\t** (tabulador) dins d'una cadena.
:::

```js
#!/bin/bash
read -p “Hola, com et dius?” var1 var2 var3 var4
echo “has escrit:”
echo “$var1”
echo “$var2”
echo “$var3”
echo “$var4”
```
