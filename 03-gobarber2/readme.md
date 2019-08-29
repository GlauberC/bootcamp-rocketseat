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

### Criar campo virtual URL no model File para retornar o endereço da imagem

### Configurar leitor de arquivos estático em app

# Rota para listar providers

### Criar rota get providers

### Criar rota no insomnia

### Criar / Configurar ProviderController

- attributes


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

# Criar update para notificações

### update em NotificationController

### importar nas rotas

# Cancelamento de agendamentos

### criar rota delete do appointments

### criar método delete no AppointmentController

# Nodemailer para envio de emails

```sh
  yarn add nodemailer
```
### Criar conta no mailtrap.io

### criar / editar config/mail.js

### Transferir credenciais do mailtrap para o config/mail.js

### Criar / editar  src/lib/Mail.js

### importar no AppointmentController

# Criando template para os emails

```sh
  yarn add express-handlebars nodemailer-express-handlebars
```

### criar pasta e arquivos
* app/views/email/layouts
* app/views/email/layouts/default.hbs
* app/views/email/partials
* app/views/email/partials/footer.hbs
* app/views/email/cancellation.hbs

### importar e configurar no lib/Mail.js

### Configurar layouts/default.hbs
### Configurar partials/footer.hbs
### Configurar cancellation.hbs

### Configurar template no AppointmentController

# Serviços de segundo plano

```sh
  docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
```
```sh
  yarn add bee-queue
```

### Criar / Configurar lib/Queue.js
### Criar / Configurar app/jobs/CancellationMail.js
### Criar / Configurar config/redis.js
### importar Queue e CancellationMain em AppointmentController
### Criar / Configurar src/queue.js
### Configurar inicialização do queue no package.json
### Configurar Possíveis Falhas

# Listar horários vagos por dia
### Criar rota
### Criar / configurar AvailableController index
### No insomnia
- criar rota get para available
- Query date com o timestamp do frontend ex: 1566916655000
- Colocar o token

# Campows virtuais no agendamento
### adicionar o campo past no models/Appointment.js
### Exibir na listagem o novo campo virtual em AppointmentController

# Tratamento de excessões
### sentry.io
### install sentry/node como sugerido no site
### importar o sentry no app.js
### criar/configurar config/sentry.js
```sh
  sudo yarn add express-async-errors
```
### importar o express-async-errors no app.js
### Criar exception handler no app.js
```sh
  yarn add youch
```

# Variáveis de âmbiente
### criar / configurar .env
### Adicionar o .env no gitignore
```sh
  yarn add dotenv
```
### Importar no app.js e no queue.js e no database.js





