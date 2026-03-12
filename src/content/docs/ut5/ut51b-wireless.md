---
title: "Redes inalámbricas"
description: "Configuración de redes de área local inalámbricas (WLAN)"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

## 1. ¿Qué es una WLAN?

Una **WLAN (Wireless Local Area Network)** es una red de área local que transmite datos mediante ondas de radio en lugar de cables. La tecnología estándar es **Wi-Fi**, basada en la familia de protocolos **IEEE 802.11**.

## 2. Estándares Wi-Fi

| Estándar | Año | Frecuencia | Velocidad máx. | Nombre comercial |
|----------|-----|-----------|---------------|-----------------|
| 802.11b | 1999 | 2,4 GHz | 11 Mbps | Wi-Fi 1 *(retroactivo)* |
| 802.11a | 1999 | **5 GHz** | 54 Mbps | Wi-Fi 2 *(retroactivo)* |
| 802.11g | 2003 | 2,4 GHz | 54 Mbps | Wi-Fi 3 *(retroactivo)* |
| 802.11n | 2009 | 2,4 / 5 GHz | 600 Mbps | Wi-Fi 4 |
| 802.11ac | 2013 | 5 GHz | 3,5 Gbps | Wi-Fi 5 |
| 802.11ax | 2019 | 2,4 / 5 / 6 GHz | 9,6 Gbps | Wi-Fi 6 / 6E |
| 802.11be | 2024 | 2,4 / 5 / 6 GHz | 46 Gbps | Wi-Fi 7 |

### Bandas de frecuencia

| Banda | Ventajas | Inconvenientes |
|-------|----------|---------------|
| **2,4 GHz** | Mayor alcance, penetra mejor las paredes | Más interferencias (microondas, Bluetooth), más congestionada |
| **5 GHz** | Mayor velocidad, menos interferencias | Menor alcance, peor penetración |
| **6 GHz** *(Wi-Fi 6E)* | Muy alta velocidad y baja latencia | Solo dispositivos recientes |

## 3. Componentes de una WLAN

- **Punto de acceso (AP):** Dispositivo que emite la señal Wi-Fi y conecta los clientes inalámbricos a la red LAN/router.
- **Router Wi-Fi:** Combina router y AP en un único dispositivo; es lo habitual en entornos domésticos y pequeñas oficinas.
- **SSID:** Nombre de la red inalámbrica que ven los dispositivos al buscar conexiones disponibles.

## 4. Seguridad en redes inalámbricas

La señal Wi-Fi es accesible a cualquier dispositivo cercano, por lo que la seguridad es crítica.

| Protocolo | Estado | Cifrado |
|-----------|--------|---------|
| **WEP** | ❌ Obsoleto | RC4 (roto en minutos) |
| **WPA** | ⚠️ Obsoleto | TKIP |
| **WPA2** | ✅ Estándar actual | AES-CCMP |
| **WPA3** | ✅ Recomendado | SAE (más robusto frente a ataques de diccionario) |

:::caution[Evita WEP y WPA]
WEP puede romperse en segundos con herramientas públicas. WPA tiene vulnerabilidades conocidas. Usa siempre **WPA2** como mínimo, y **WPA3** si todos los dispositivos lo soportan.
:::

## 5. Configuración básica de un punto de acceso

Los parámetros esenciales que se configuran en la interfaz web del AP o router (habitualmente en `192.168.1.1`):

| Parámetro | Descripción | Ejemplo |
|-----------|-------------|---------|
| **SSID** | Nombre de la red | `empresa_2.4G` |
| **Contraseña** | Clave de acceso WPA2/WPA3 | mínimo 12 caracteres |
| **Canal** | Canal de radio (1, 6 u 11 en 2,4 GHz) | Auto o canal menos congestionado |
| **Modo** | Estándar Wi-Fi activo | 802.11n/ac/ax |
| **DHCP** | Asignación automática de IPs a clientes | Habilitado |

#### Recomendaciones de configuración segura

1. Cambia las **credenciales de administración** por defecto del router (usuario/contraseña del panel web).
2. Usa **WPA2-AES** o **WPA3** — nunca WEP ni WPA.
3. Desactiva el **WPS** (Wi-Fi Protected Setup) — tiene vulnerabilidades conocidas.
4. Ocultar el SSID no es una medida de seguridad real; es preferible usar una contraseña robusta.
5. Habilita el **filtrado MAC** como capa adicional en entornos corporativos (no sustituye al cifrado).

## 6. Verificación de la conexión

Una vez conectado a la WLAN, se puede verificar la configuración con los mismos comandos que en redes cableadas:

```cmd
ipconfig          # Windows: muestra IP, máscara y gateway asignados
ip addr show      # Linux
ping 8.8.8.8      # Comprobar conectividad a Internet
```

:::tip[5.1 Redes inalámbricas]
[Wireless Networks - PowerCert Animated Videos](https://www.youtube.com/watch?v=s_KCHffdZh8)
:::
