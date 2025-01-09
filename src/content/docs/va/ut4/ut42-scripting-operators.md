---
title: "Operadors"
description: "Scripting - Operadors"
---

### Cadenes De Text/ Variables

Ací tens la taula amb exemples usant doble claudàtor per a no haver d'entrecomillar les variables:

| **Operador**     | **Descripció**                                                                                      | **Exemple**                                      |
|------------------|-----------------------------------------------------------------------------------------------------|--------------------------------------------------|
| =                | Vertader si és igual                                                                                | `if [[ $a = $b ]]`                               |
| !=               | Vertader si són diferents                                                                           | `if [[ $a != $b ]]`                              |
| =~               | Per a comparar amb expressions regulars                                                             | `if [[ $a =~ ^[0-9]+$ ]]`                        |
| -n               | Vertader si la variable no està buida                                                               | `if [[ -n $a ]]`                                 |
| -z               | Vertader si la variable està buida                                                                  | `if [[ -z $a ]]`                                 |
| [[ $variable ]]  | Comprova si la variable existeix i conté un valor que no siga buit                                  | `if [[ $variable ]]`                             |


```js
A="Fer"
if [[ $A ]]; then
  echo "La variable A no està buida"
fi
```

### Aritmètics

Comparació numèrica **(entre números)**

| **Operador** | **Descripció**           |
|--------------|---------------------------|
| -eq          | Igual a                   |
| -ne          | No igual a                |
| -gt          | Major que                 |
| -ge          | Major o igual que         |
| -lt          | Menor que                 |
| -le          | Menor o igual que         |

# Fitxers

| **Operador** | **Descripció**                                      |
|--------------|-----------------------------------------------------|
| -e           | Vertader si el fitxer/directori existeix            |
| -d           | Vertader si el path donat és un directori           |
| -f           | Vertader si el path donat és un fitxer              |
| -r           | Vertader si el fitxer té permís de lectura          |
| -w           | Vertader si el fitxer té permís d'escriptura        |
| -x           | Vertader si el fitxer té permís d'execució          |
| -s           | Vertader si el fitxer té una mida major de 0 (no està buit) |
| -O           | Vertader si eres el propietari                      |
| -G           | Vertader si pertanys al grup propietari             |

```js
fitxer="copia.txt"
if [[ -e $fitxer ]]; then
  echo "$fitxer existeix, però no sé si és un fitxer o un directori"
fi
```

### Expressions Lògiques

| **Operador** | **Descripció**                                                                                      |
|--------------|-----------------------------------------------------------------------------------------------------|
| !            | Operador NOT, nega el següent que li segueix                                                        |
| -a, &&       | Operador AND (només és vertader si les 2 opcions són vertaderes. Si hi ha moltes opcions deixem de comprovar en quant una siga falsa) |
| -o, \|\|     | Operador OR (és vertader si una de les 2 opcions és vertadera. Si hi ha moltes opcions deixem de comprovar en quant una siga vertadera) |


#### Combinar diversos operadors
- **num1 -eq num2 && num1 -gt num3 :** Comprova si num1 és igual a num2 i a més major que num3.
- **-r arch1 || -x arch1 :** Comprova si arch1 té permisos de lectura o d'execució.
- **! -s arch1 :** Comprova que el fitxer arch1 no conté res.
