---
title: "Virtualització"
description: "Virtualització i Instal·lació de Sistemes Operatius"
---

:::note[Connexió amb el currículum]
RA: 2 - CE: d, e, f, g, h, i
:::

És una tecnologia que permet crear una versió virtual d'un component de hardware o software, com un servidor, un sistema operatiu, un dispositiu d'emmagatzematge o una xarxa. 

## 1. Tipus de Virtualització

- **Virtualització de Plataforma**: El seu objectiu és oferir un sistema informàtic virtual.
  - **Hipervisor Tipus 1**: S'instal·la directament sobre el maquinari, també conegut com a "bare metal".
  - **Hipervisor Tipus 2**: S'instal·la com una aplicació al sistema operatiu amfitrió, també conegut com a hipervisor allotjat.
- **Virtualització d'Aplicacions**: Ofereix un entorn virtual per a aplicacions, independentment del hardware i sistema operatiu.

:::tip
[Virtualization - EN](https://www.youtube.com/watch?v=UBVVq-xz5i0)
:::


### 1.1 Virtualització de Plataforma

- **VMWARE**: La més utilitzada en entorns empresarials.
- **Microsoft Hyper-V**: [Hyper-V](https://learn.microsoft.com/es-es/virtualization/hyper-v-on-windows/about/)
- **Oracle VirtualBox**: Més utilitzat en entorns educatius.
- **QEMU**: Eina lliure.

### 1.2 Virtualització d'Entorns d'Aplicacions**

- **Docker**: Eina de creació i gestió de contenidors d'aplicació.
- **Kubernetes**: Eina de coordinació de contenidors Docker.

:::tip
[Docker?](https://m.youtube.com/watch?v=Uu49ID0NBRQ)
:::

## 3. Microsoft Hyper-V vs WSL vs Azure

- **Microsoft Hyper-V**: Eina de virtualització integrada en sistemes Pro de Microsoft.
- **WSL (Windows Subsystem Linux)**: Permet instal·lar i executar aplicacions Linux.
- **Azure Virtualization**: Possibilitat d'implementar màquines virtuals al núvol, amb accés mitjançant RDP.

:::caution[activitat]
Instalacions
:::