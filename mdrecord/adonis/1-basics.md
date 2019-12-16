# instalando o AdonisJS
```sh
  npm install -g @adonisjs/cli
```

# Executar
```sh
  adonis
```

# Criar uma nova aplicação
- Saber todos as opções
```sh
  adonis new -h
```
- Criando
```sh
  adonis new NOME --api-only
```

# iniciar um novo projeto em desenvolvimento
- cd projetoNOME/
```sh
  adonis serve --dev
```

# pastas
## app
- Todas as estruturas de pastas referente ao projeto
## config
- configuração de cada modulo da aplicação 
## database
- migrations
## start 
- rotas e arquivo de configuração caso seja instalado um novo pacote
## server.js
- arquivo inicial que faz o servidor ficar online