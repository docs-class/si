---
title: "Cálculo de Subredes"
description: "Subnetting"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

#### Cálculo de Subredes

### 1. Espacio de Direcciones Privadas
Son rangos de IP utilizados en redes internas (privadas) que no se enrutan en Internet:
*   **Clase A:** 10.0.0.0 a 10.255.255.255.
*   **Clase B:** 172.16.0.0 a 172.31.255.255.
*   **Clase C:** 192.168.0.0 a 192.168.255.255.

### 2. Máscaras de Subred por Defecto y Estructura
La máscara determina qué parte de la dirección IP identifica a la **red** y cuál al **host** (equipo individual),:

*   **Clase A:** Máscara **255.0.0.0**. 
    *   Estructura: Red . Host . Host . Host.
*   **Clase B:** Máscara **255.255.0.0**. 
    *   Estructura: Red . Red . Host . Host,.
*   **Clase C:** Máscara **255.255.255.0**. 
    *   Estructura: Red . Red . Red . Host,.

### 3. Ejemplo de Subnetting
:::note[Ejemplo de Subnetting]
##### **Escenario**
Una pequeña empresa tiene la dirección IP **192.168.1.0/24** y desea dividir su red en **4 subredes** para diferentes departamentos: Administración, Ventas, Soporte y Desarrollo.

##### Paso 1: Determinar el número de bits necesarios para las subredes

Dado que queremos **4 subredes**, necesitamos calcular el número de bits necesarios. La fórmula es:

$$
2^n \geq \text{número de subredes}
$$

Donde \( n \) es el número de bits. Aquí:

$$
2^2 = 4
$$

Por lo tanto, necesitamos **2 bits** para las subredes.

---

##### Paso 2: Definir la nueva máscara de subred

La máscara de subred original es **/24**. Si agregamos **2 bits** para las subredes:

$$
24 + 2 = 26
$$

La nueva máscara de subred será **255.255.255.192** o **/26**.


##### Paso 3: Calcular las subredes

Con una máscara de **/26**, cada subred tendrá:

- **Cantidad de direcciones**: $$ 2^{(32 - 26)} = 2^6 = 64 $$
- **Direcciones utilizables**: 62 (restando la dirección de red y la dirección de broadcast).

**Subredes**:

1. **Subred 1**: 192.168.1.0/26
   - Rango de direcciones: 192.168.1.1 - 192.168.1.62
   - Dirección de broadcast: 192.168.1.63

2. **Subred 2**: 192.168.1.64/26
   - Rango de direcciones: 192.168.1.65 - 192.168.1.126
   - Dirección de broadcast: 192.168.1.127

3. **Subred 3**: 192.168.1.128/26
   - Rango de direcciones: 192.168.1.129 - 192.168.1.190
   - Dirección de broadcast: 192.168.1.191

4. **Subred 4**: 192.168.1.192/26
   - Rango de direcciones: 192.168.1.193 - 192.168.1.254
   - Dirección de broadcast: 192.168.1.255

##### Paso 4: Asignar subredes a departamentos

- **Administración**: 192.168.1.0/26
- **Ventas**: 192.168.1.64/26
- **Soporte**: 192.168.1.128/26
- **Desarrollo**: 192.168.1.192/26
:::


:::caution[Actividad]
5.1.1 Subredes
:::
