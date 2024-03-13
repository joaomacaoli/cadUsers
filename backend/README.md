## Dependencias

npm i express cors

npm i -D dotenv

npm i pg

## Criação do container com o banco de dados PostgreSQL

```shell

docker run \
    --name postgres \
    -e POSTGRES_USER=joaomacaoli \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=cadUser \
    -p 5432:5432 \
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

```
