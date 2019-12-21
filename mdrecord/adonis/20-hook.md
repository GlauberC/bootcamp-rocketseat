# criando o hook

```sh
  adonis make:hook Task
```

- Models/Task.js

```js
...

  class Task extends Model {
  static boot () {
    super.boot()

    this.addHook('afterCreate', 'TaskHook.sendNewTaskMail')
    this.addHook('beforeUpdate', 'TaskHook.sendNewTaskMail')
  }

  project () {

  ...
```

- Models/Hooks/TaskHook.js

```js
/* eslint-disable no-useless-return */
"use strict";

const Mail = use("Mail");
const Helpers = use("Helpers");
const TaskHook = (exports = module.exports = {});

TaskHook.sendNewTaskMail = async taskInstance => {
  if (!taskInstance.user_id || !taskInstance.dirty.user_id) return;

  const { email, username } = await taskInstance.user().fetch();
  const file = await taskInstance.file().fetch();
  const { title } = taskInstance;

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
};
```

- resources/views/emails/new_task.edge

```js
<strong>Fala {{username}}, beleza? </strong>
<p>Uma tarefa foi assinada a você: {{ title }}</p>

@if(hasAttachment)
  <p>Em anexo você encontra detalhes da tarefa.</p>
@endif
```
