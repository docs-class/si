---
title: "Operacions Aritmètiques"
description: "Operacions Aritmètiques"
---

És possible realitzar operacions aritmètiques en la shell emprant operadors, els més habituals són:
- \+ (suma)
- \- (resta)
- \* (multiplicació)
- / (divisió)
- % (mòdul)
- ** (exponenciació)
- ++ (sumar 1 a la variable)
- \- \- (restar 1 a la variable)

## Execució

Podem emprar diverses opcions per a substituir una expressió aritmètica pel seu resultat:
1. Usant dòlar i doble parèntesi $((expressió))
2. Usant dòlar i claudàtor $[expressió]
3. Usant el comandament “let” -> `let var=expressió`
4. Usant el comandament “expr” (aquest comandament és més antic i té l'inconvenient que cal escapar els caràcters especials com *,<,>,(,), etc)

## let
El comandament **let** existeix en bash, però no en shell. Això passa amb aquest i altres comandaments, així que sempre executarem els scripts en bash.

```bash
- suma=$(( $x + $y ))   # si x=4 i y=5, suma=9 -> doble parèntesi
- suma=$[ $x + $y ]     # si x=4 i y=5, suma=9 -> claudàtors
- let “mult=$x * $y”    # Assignem valor a variable
- let “mult=$mult * 3”  # Assignem valor a la mateixa variable

- let mult++     # Exemple d'incrementar en 1 el valor de mult -> let 
- let mult--    # Exemple de decrementar en 1 el valor de mult  -> let
- expr 2 \* 3   # hem d'escapar el * -> expr
- expr \( 2 + 2 \) \* 3 # Hem d'escapar els parèntesis i el * -> expr
- res=`expr 3 + 3`  # assignem resultat de l'operació a la variable res
```

## expr
Per contra, **expr** és útil per a comprovar longitud de cadena de caràcters i sostraure subcadenes, cosa que amb el comandament let no es pot fer perquè no opera amb cadenes, només amb números.
- `expr length “Hola Mundo”` → Aquest comandament retorna 10, que és la longitud de la cadena passada com a paràmetre. Tingueu en compte que es comptabilitza cada espai en blanc com una lletra.
- `expr substr “Hola Mundo” 4 4` → Des del caràcter núm. 4 (a) retorna els següents 4 caràcters: “a Mu”
- `expr substr “Hola Mundo” 6 5` → “Mundo”. Des del caràcter número 6, retorna els següents 5 caràcters.

## bc (basic calculator)
- Consisteix en una calculadora que ens permet treballar amb decimals: `operacion=$(echo "7.5 * 12.5" | bc)`
- Les cometes invertides retornen el valor de l'operació o del comandament.
- Per a traure tots els possibles decimals usem l'opció `-l`: `operacion=$(echo "7.5 * 12.5" | bc -l)`
- Si volem cert nombre de decimals usem l'opció `scale`: `operacion=$(echo "scale=3; 7.5 * 12.5" | bc)`