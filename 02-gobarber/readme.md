# Configurar sucrase (permite import from)
```sh
  yarn add -D sucrase
```
## configurando com o nodemon
* criar nodemon.json

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
## Configurações do arquivos .eslintrc.js
* class-methods-use-this
* no-param-reassign
* camelcase
* no-unused-vars
##  AutoFIX
```sh
  yarn eslint --fix src --ext .js
```

# Adicionando Prettier
```sh
  sudo yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```
## Configurando Prettier
### .eslintrc.js
* extends
* plugins
* rules
## Adicionar/configurar .prettierrc

# Padronizando editores: editorconfig
* Plugin vscode editorconfig
* botão direito -> generate editor config
* mudar duas ultimas opções para true

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

