---
title: "Comandos de verificación de red"
description: "Comandos y herramientas básicas para verificar el funcionamiento de la red"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

## 1. ¿Para qué sirven los comandos de red?

Antes de llamar al soporte técnico, un administrador de sistemas comprueba la red con herramientas de línea de comandos. Permiten diagnosticar problemas en segundos: si la IP está mal asignada, si un host no responde, o qué ruta siguen los datos.

## 2. `ipconfig` / `ip addr` — Configuración del adaptador

Muestra la dirección IP, máscara de subred y puerta de enlace del equipo.

#### Windows

```cmd
ipconfig           # resumen de todos los adaptadores
ipconfig /all      # información completa (MAC, DHCP, DNS...)
ipconfig /release  # libera la IP asignada por DHCP
ipconfig /renew    # solicita una nueva IP al servidor DHCP
```

#### Linux

```bash
ip addr show       # muestra direcciones de todos los interfaces
ip addr show eth0  # solo el interfaz eth0
```

:::note[Diagnóstico habitual]
Si `ipconfig` muestra `169.254.x.x` en Windows, el equipo no ha podido obtener IP del servidor DHCP y se ha autoasignado una dirección APIPA — indica un problema con el servidor DHCP o la conexión física.
:::

## 3. `ping` — Comprobación de conectividad

Envía paquetes **ICMP Echo Request** al destino y espera respuesta. Comprueba si un equipo está accesible y mide la latencia (tiempo de ida y vuelta).

```cmd
ping 8.8.8.8          # ping a una IP (Google DNS)
ping google.com        # ping a un nombre de dominio (también verifica DNS)
ping -t 8.8.8.8        # ping continuo en Windows (Ctrl+C para parar)
ping -c 4 8.8.8.8      # 4 paquetes en Linux
```

#### Interpretación de resultados

| Resultado | Significado |
|-----------|-------------|
| `Respuesta de 8.8.8.8: bytes=32 tiempo=15ms` | Conectividad correcta |
| `Tiempo de espera agotado` | El host no responde (puede estar caído o filtrar ICMP) |
| `Host de destino inaccesible` | No hay ruta hacia ese destino (gateway mal configurado) |
| `No se puede resolver el nombre` | Fallo de DNS — la IP destino funciona pero no el nombre |

## 4. `tracert` / `traceroute` — Ruta de los paquetes

Muestra todos los saltos (routers) que atraviesa un paquete hasta llegar al destino. Útil para localizar dónde se produce una pérdida de conectividad.

```cmd
tracert google.com      # Windows
traceroute google.com   # Linux
```

Cada línea corresponde a un router intermediario con su IP y latencia. Un `* * *` indica que ese router no responde a sondas ICMP (no significa necesariamente un fallo).

## 5. `nslookup` — Resolución DNS

Consulta el servidor DNS para traducir un nombre a IP, o viceversa.

```cmd
nslookup google.com            # resuelve el nombre → IP
nslookup 8.8.8.8               # resolución inversa: IP → nombre
nslookup google.com 1.1.1.1    # usa el servidor DNS 1.1.1.1 para la consulta
```

Si `nslookup google.com` falla pero `ping 8.8.8.8` funciona, el problema está en la configuración DNS (criterio g + a).

## 6. `arp` — Tabla de direcciones MAC

Muestra o modifica la tabla ARP: la correspondencia entre direcciones IP y MAC de los equipos que el host ha contactado recientemente.

```cmd
arp -a              # muestra toda la tabla ARP (Windows y Linux)
arp -d 192.168.1.1  # elimina una entrada de la tabla
```

Útil para detectar conflictos de IP (dos entradas con la misma MAC) o ataques de **ARP spoofing**.

## 7. `netstat` — Conexiones activas y puertos

Muestra las conexiones de red activas y los puertos en escucha.

```cmd
netstat -an         # todas las conexiones con IPs numéricas
netstat -b          # (Windows, requiere admin) muestra el proceso asociado
netstat -tulnp      # (Linux) puertos TCP/UDP en escucha con proceso
```
:::tip[Flujo de diagnóstico recomendado]
1. `ipconfig` → ¿tengo IP correcta?
2. `ping 192.168.1.1` → ¿llego al gateway?
3. `ping 8.8.8.8` → ¿tengo salida a Internet?
4. `ping google.com` → ¿funciona el DNS?
5. `tracert google.com` → ¿dónde se pierde la conexión?
:::
