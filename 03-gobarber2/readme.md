# Enviando Avatar

```sh
  yarn add multer
```

### Criar tmp/uploads (fora de src)

### Criação e configuração de config/multer.js

- crypto (evitar que duas imagens tenham o mesmo nome)

### Importar e configurar na routes.js

### No insomnia

- criar rota post para files
- Selecionar o tipo de envio Multipart form
- Campo e valor do tipo file
- Colocar o token

### Criar o FileController Store

### Criar uma nova tabela no banco de dados

```sh
  yarn sequelize migration:create --name=create-files
```

### Editar migration

```sh
  sudo yarn sequelize db:migrate
```

### criar model File.js

### adicionar File ao index.js do database

### importar model File no FileController

### Adicionar nova migration para relacionar file com user

```sh
  yarn sequelize migration:create --name=add-avatar-filed-to-users
```

### editar migration

```sh
  yarn sequelize db:migrate
```

### Associar model File à User através de um método stático no model User

### Mapear Associações em database/index.js

# Rota para listar providers

### Criar rota get providers

### Criar rota no insomnia

### Criar / Configurar ProviderController

- attributes

### Criar campo virtual URL no model File para retornar o endereço da imagem

### Configurar leitor de arquivos estático em app

# Criar tabela de agendamentos

```sh
  yarn sequelize migration:create --name=create-appointments
```

### Editar migration

```sh
  yarn sequelize db:migrate
```

### Criar model Appointment

- Associação: Quando é feito mais de uma associação à uma mesma tabela, o sequelize exige os apelidos para cada relação

### adicionar Appointment ao index.js do database

# Criar rota store para agendamento

### Criar rota store no routes

### Criar/configurar AppointmentController

### Criar rota no insomnia

- Data com timezone: 2019-12-20T18:00:00-03:00

# Validações com data e hora

```sh
  yarn add date-fns@next
```

### importação e configuração do date-fns no appoitment controller

# Listar appointments

### Criar index no AppointmentController e incluir na routes

### Paginação

- Criar no insomnia em Query, o atributo page com o valor
- Limit
- Offset

# Listagem do provider

### ScheduleController

### Importar nas rotas

### Criar parametro date no query para que o provider veja os agendamentos daquele dia

# Conectar com um banco não relacional

### Configurar db mongo no docker

```sh
  docker run --name mongobarber -p 27017:27017 -d -t mongo
```

- Eu coloquei
- sudo docker run --name mongodbbarber -p 27018:27017 -d -t mongo

### Configurar no database/index.js

- Importar mongoose

```sh
  yarn add mongoose
```

- Configurar método mongo

# Criar Notification em app/schemas

### Importação e configuração do moongose

### importar e configurar as notificações em AppointmentController

# Listar notificaçẽos

### Importar index em routes

### Criar NotificationController com o método index

### Criar rota no insomnia
