```sh
sudo yarn global add @rocketseat/omni
sudo omni init testsapp only=server

sudo yarn add pg 
```

- .env
```
APP_URL=http://localhost:3333
NODE_ENV=development

# Auth

APP_SECRET=templatenoderocketseat

# Database

DB_HOST=localhost
DB_USER=postgres
DB_PASS=docker
DB_NAME=modulotestes
```