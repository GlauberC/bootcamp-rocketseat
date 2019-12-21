# iniciar postgres docker

- Criar do zero

```sh
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

- Iniciar

```sh
  docker start database
```

# configurando no adonis

- ver em config/database.js

```sh
  npm i --save pg
```

- alterar em ./.env todas as variaveis com db

# iniciando o db

```sh
  adonis migration:run
```
