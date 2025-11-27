---
title: "n8n con Docker Compose"
description: "n8n con Docker Compose"
---

#### Archivo de configuración `docker-compose.yml`
##### n8n con MariaDB
```yaml
// docker-compose.yml
version: '3.1'
services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - 5678:5678
    environment:
      - DB_TYPE=mysql
      - DB_MYSQL_HOST=mariadb
      - DB_MYSQL_PORT=3306
      - DB_MYSQL_DATABASE=n8n
      - DB_MYSQL_USER=n8nuser
      - DB_MYSQL_PASSWORD=your_mariadb_password
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=your_n8n_password
      - N8N_ENCRYPTION_KEY=your_encryption_key
    depends_on:
      - mariadb

  mariadb:
    image: mariadb:10.6
    restart: always
    environment:
      - MYSQL_DATABASE=n8n
      - MYSQL_USER=n8nuser
      - MYSQL_PASSWORD=your_mariadb_password
      - MYSQL_ROOT_PASSWORD=your_root_password
    volumes:
      - mariadbdata:/var/lib/mysql

volumes:
  mariadbdata: {}
``` 


[Volver](../ut3/ut32a3-n8n)