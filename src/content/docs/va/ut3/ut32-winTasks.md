--- 
title: "Automatització Windows"
description: "Automatització Windows"
---

## Gestió de Tasques Programades en Windows

Una tasca programada és una acció que el sistema operatiu realitzarà en alguna de les següents circumstàncies:

- Quan arribe un moment determinat en el futur.
- Quan es produïsca un determinat esdeveniment.
- Amb una freqüència determinada.

D’aquesta manera, podrem planificar i programar aquelles accions que desitgem que es realitzen, evitant possibles oblits. Per a això, utilitzarem el programador de tasques. Per a accedir-hi entrarem en **Panell de control > Eines administratives > Programador de tasques** o també podem fer-ho mitjançant l’ordre `taskschd.msc`.

![win Task name](../../../../assets/ut3/winTask1.png)

La manera més senzilla de programar una tasca és fer clic en **Crear tasca bàsica** (situat en el menú d’accions a la dreta). A continuació, apareixerà un assistent que ens ajudarà a crear la tasca planificada.

Indicarem quan o degut a què volem que s’execute la tasca. En aquesta pantalla, seleccionarem una de les opcions depenent de com o quan volem que s’execute la tasca (diàriament, setmanalment, mensualment, una vegada, inici de sessió, final de sessió o vinculat a un esdeveniment particular).

Per exemple, establirem que la tasca s’execute diàriament a una hora determinada.

![win Task Frequency](../../../../assets/ut3/winTask2.png)
![win Task date](../../../../assets/ut3/winTask3.png)

A continuació, indicarem la **acció a realitzar**. En aquest cas, podrem indicar l’execució d’un programa, enviar un correu electrònic, mostrar un missatge, etc.

![win Task action](../../../../assets/ut3/winTask4.png)

Com a exemple, crearem una tasca senzilla: obrir la calculadora de Windows a una hora determinada tots els dies.  
![win Task app](../../../../assets/ut3/winTask5.png)  
![win Task review](../../../../assets/ut3/winTask6.png)

Accedint a la tasca creada podem modificar-la i afegir accions o condicions. També és possible consultar les execucions (o intents fallits) de cada tasca. Per a això, primer hem d’habilitar l’opció d’historial (en Windows 11).

![win Task enabling history](../../../../assets/ut3/winTask7.png)

Les opcions que es troben en les pestanyes **General**, **Desencadenadors**, **Accions**, **Condicions** i **Configuració** es poden configurar directament si creem una tasca des de l’opció **Crear Tasca** (no utilitzant "Crear tasca bàsica").  
![win Task windws](../../../../assets/ut3/winTask8.png)

- En la pestanya **General**, podem modificar la descripció de la tasca i establir les opcions de seguretat adequades.
- En la pestanya **Desencadenadors**, podem veure i modificar les dades relatives als criteris que s’han de complir per a iniciar l’execució de la tasca.  
![win Task triggers](../../../../assets/ut3/winTask9.png)
  
- La següent pestanya conté les **accions** associades a la tasca programada. Si n’hi haguera més d’una, s’executarien en ordre seqüencial.  
![win Task action](../../../../assets/ut3/winTask10.png)
  
- En la pestanya **Condicions**, s’indiquen els criteris que s’han de complir perquè el desencadenador s’active (per exemple, que l’equip estiga connectat a corrent altern).  
![win Task conditions](../../../../assets/ut3/winTask11.png)
  
- En la pestanya **Configuració**, s’indiquen algunes qüestions complementàries sobre com ha de comportar-se el sistema en relació amb la tasca (per exemple, que la tasca es detinga si s’executa durant més de 3 dies).  
![win Task action](../../../../assets/ut3/winTask12.png)