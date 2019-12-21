# instalando o redis no docker

```sh
  docker run --name redis -p 6379:6379 -d redis:alpine
```

- https://adonisjs.com/docs/4.1/redis

```sh
  adonis install @adonisjs/redis
```

- start/app.js

```js
const providers = ["@adonisjs/redis/providers/RedisProvider"];
```

- https://github.com/nrempel/adonis-kue

```sh
npm install adonis-kue

```

- start/app.js

```js
const providers = ["adonis-kue/providers/KueProvider"];

const aceProviders = ["adonis-kue/providers/CommandsProvider"];

...

const jobs = [];

module.exports = { providers, aceProviders, aliases, commands, jobs };
```

# Criando um novo job

```sh
  adonis make:job NewTaskMail
```

- Add App/Jobs/NewTaskMail to jobs array
- start/app.js

```js
const jobs = ["App/Jobs/NewTaskMail"];
```

# configurando job

- app/Models/Hooks/TaskHook.js

```js
/* eslint-disable no-useless-return */
"use strict";

const Kue = use("Kue");
const Job = use("App/Jobs/NewTaskMail");
const TaskHook = (exports = module.exports = {});

TaskHook.sendNewTaskMail = async taskInstance => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) return;

  const { email, username } = await taskInstance.user().fetch();
  const file = await taskInstance.file().fetch();
  const { title } = taskInstance;

  Kue.dispatch(Job.key, { email, username, file, title }, { attempts: 3 });
};
```

- app/Jobs/NewTaskMail.js

```js
"use strict";

const Mail = use("Mail");
const Helpers = use("Helpers");

class NewTaskMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency() {
    return 1;
  }

  // This is required. This is a unique key used to identify this job.
  static get key() {
    return "NewTaskMail-job";
  }

  // This is where the work is done.
  async handle({ email, username, title, file }) {
    console.log(`Job: ${NewTaskMail.key}`);
    await Mail.send(
      ["emails.new_task"],
      {
        username,
        title,
        hasAttachment: !!file
      },
      message => {
        message
          .to(email)
          .from("equipe@gonode.com.br", "Equipe | Gonode")
          .subject("Nova tarefa para você");

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            filename: file.name
          });
        }
      }
    );
  }
}

module.exports = NewTaskMail;
```

# Start no servidor

```sh
  adonis kue:listen
```
