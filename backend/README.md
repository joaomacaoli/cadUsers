## Instalação e Uso

1. Certifique-se de ter o Node.js e o Docker instalados em seu ambiente.
2. Clone este repositório: `git clone https://github.com/joaomcode/cadUsers`
3. Entre na pasta do projeto: `cd seu-repositorio/backend`
4. Crie e execute o container Docker para o PostgreSQL com o seguinte comando:
    ```
    docker run \
        --name postgres \
        -e POSTGRES_USER=your_username \
        -e POSTGRES_PASSWORD=your_password \
        -e POSTGRES_DB=your_db \
        -p 5432:5432 \
        -d \
        postgres
    ```
5. Instale as dependências: `npm install`
6. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto e definindo as seguintes variáveis:

```
  SERVER_PORT=3000
  FRONT_PORT=5000

  PG_USER=your_username
  PG_HOST=localhost
  PG_DATABASE=your_db
  PG_PASSWORD=your_password
  PG_PORT=5432
```

Existe um arquivo `.example.env` na raiz do projeto que pode ser utilizado como modelo.

7. Execute o servidor: `npm start`
8. Acesse a API em `http://localhost:3000`

## Estrutura do Projeto

├── src/
│ ├── controllers/
│ │ └── userController.js
│ └── db/
│ │ └── db.js
│ ├── models/
│ │ └── userModel.js
│ ├── routes/
│ │ ├── index.js
│ │ └── user.routes.js
│ ├── index.js
├── .env
└── README.md

- `src/controllers/`: Contém os controladores da aplicação.
- `src/db/`: Contém o arquivo de configuração e conexão com o PostgreSQL.
- `src/models/`: Contém os modelos da aplicação para interagir com o banco de dados.
- `src/routes/`: Contém as definições das rotas da aplicação feitas com o Express.
- `src/index.js`: Arquivo principal que configura o servidor Express.
- `.env`: Arquivo de configuração das variáveis de ambiente.

## Dependencias

npm i cors express pg

npm i -D dotenv

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
