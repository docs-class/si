---
title: "IF/ELSE"
description: "Scripting - if/else"
---

L'**if** és una estructura condicional en programació que permet executar un bloc de codi només si es compleix una condició específica.

```js
if [[ condició ]]
then
  accions
fi
```

- **if** obri l'estructura i **fi** la tanca
- [[ condició ]] 
  - veritable → execute “accions” 
  - fals → no execute res
- [[ expressió ]] → Permet l'ús d'expressions regulars, no cal entrecomillar les variables, ni escapar caràcters especials.

```mermaid
graph LR;
    A[Inici] --> B{Condició};
    B -->|Veritable| C[Accions];
    B -->|Fals| D[Fi];
    C --> D;
```

:::note[Coses a tindre en compte]
- Cal deixar un espai en blanc entre els claudàtors.
- Podem fer condicions usant variables, fent ús del $, ja que volem comparar el seu contingut.
- És recomanable tabular les accions perquè el codi quede més net.
- Sempre ha de finalitzar l'estructura amb fi.
:::

## IF/ELSE
Podem crear condicions amb alternatives, on si no es compleix una condició es realitza una altra llista d'accions:

```js
if [[ condició ]]
then
  accions 1
else
  accions 2
fi
```

```mermaid
graph LR;
    A[Inici] --> B{Condició};
    B -->|Veritable| C[Accions 1];
    B -->|Fals| D[Accions 2];
    C --> E[Fi];
    D --> E;
```

> La secció **else** és opcional

## Nidar
Es poden niar moltes condicions diferents amb l'element **elif**:

```js
if [ condició ]
then
    accions 1
elif [ condició ]
then
    accions 2
elif [ condició ]
then
    accions 3
else
    accions 4
fi
```

```mermaid
graph LR;
    A[Inici] --> B{Condició 1};
    B -->|Veritable| C[Accions 1];
    B -->|Fals| D{Condició 2};
    D -->|Veritable| E[Accions 2];
    D -->|Fals| F{Condició 3};
    F -->|Veritable| G[Accions 3];
    F -->|Fals| H[Accions 4];
    C --> I[Fi];
    E --> I;
    G --> I;
    H --> I;
```
