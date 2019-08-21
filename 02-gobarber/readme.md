# Configurar sucrase (permite import from)

```sh
  yarn add -D sucrase
```

## configurando com o nodemon

- criar nodemon.json

# Adicionando eslint

```sh
  yarn add -D eslint
```

## Adicionando plugin vscode eslint

## Iniciando eslint

```sh
  yarn add -D eslint
```

## Configurações no VSCODE

## yarn eslint --init

## Configurações do arquivos .eslintrc.js

- class-methods-use-this
- no-param-reassign
- camelcase
- no-unused-vars

## AutoFIX

```sh
  yarn eslint --fix src --ext .js
```

# Adicionando Prettier

```sh
  sudo yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

## Configurando Prettier

### .eslintrc.js

- extends
- plugins
- rules

## Adicionar/configurar .prettierrc

# Padronizando editores: editorconfig

- Plugin vscode editorconfig
- botão direito -> generate editor config
- mudar duas ultimas opções para true

# Docker

## Criar container postgrees no docker

```sh
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### Listar containers ativos

```sh
docker ps
```

### Listar todos os containers

```sh
docker ps -a
```

### Parar/Começar container

```sh
docker stop database
docker start database
```

### Gerar log do container

```sh
docker logs database
```

# Sequelize

```sh
  yarn add sequelize
  yarn add sequelize-cli -D
```

## Criar .sequelizerc

## Configurar .sequelizerc

## Configurar config/database.js

## Adicionar pacotes do postgres

```sh
  yarn add pg pg-hstore
```

## Criando migrations

```sh
  yarn sequelize migration:create --name=create-users
```

## Configurar migration

## Rodar migrate

```sh
  yarn sequelize db:migrate
```

## Caso precise reverter a migrate

```sh
  yarn sequelize db:migrate:undo
```

## Caso precise reverter todas as migrate

```sh
  yarn sequelize db:migrate:undo:all
```

# Users Store

## Criação do model User

## Criação do database/index.js

## Importação em app.js

## Importação e configuração TESTE em routes.js

## Criar UserController

## Verificar se o email existe

## importar no routes

# Gerando o Hash

```sh
  yarn add bcrypt.js
```

## Adicionar hook em models/User.js

- Esse hook é um método que é executado antes de uma ação específica

# Autenticação JWT

```sh
  yarn add jsonwebtoken
```

## Criação / Configuração do SessionController.js

- Verificação de email
- Verificação de senha
- Geração do token com expiração

## Importar no routes.js

## exportar a parte de geração de token para o config/auth.js

# Update User

## Criação do método update em UserController.js

## Importar em routes.js

## Informar token via header (insomnia) enviar token atraves de Bearer

## Criar middleware para verificação do token em app/middlewares/auth.js

- verificar se o token existe
- Verificar se ele está bem formado usando o decoded junto com o promisify
- Enviar o id decodificado para os métodos que vão usar esse middleware

## Verificação no método update

- Verificar se o email existe caso esteja mudando email
- Verificar se a senha antiga bate caso esteja mudando a senha

# Validação

```sh
  yarn add yup
```
