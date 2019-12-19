# Validando Session

```sh
  adonis make:validator Session
```

- start/routes.js

```js
Route.post("sessions", "SessionController.store").validator("Session");
```

- app/Validators/Session.js

```js
"use strict";

class Session {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: "required|email",
      password: "required"
    };
  }
}

module.exports = Session;
```

# Validando Forgot e Reset Password

```sh
  adonis make:validator ForgotPassword
  adonis make:validator ResetPassword
```

- start/routes.js

```js
Route.post("forgotpasswords", "ForgotPasswordController.store").validator(
  "ForgotPassword"
);
Route.put("forgotpasswords", "ForgotPasswordController.update").validator(
  "ResetPassword"
);
```

- app/Validators/ForgotPassword.js

```js
"use strict";

class ForgotPassword {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: "required|email",
      redirect_url: "required|url"
    };
  }
}

module.exports = ForgotPassword;
```

- app/Validators/ResetPassword.js

```js
"use strict";

class ForgotPassword {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      token: "required",
      password: "required|confirmed"
    };
  }
}

module.exports = ForgotPassword;
```

# Validando Project

```sh
  adonis make:validator Project
```

- start/routes.js

```js
Route.resource("projects", "ProjectController")
  .apiOnly()
  .validator(new Map([[["projects.store"], ["Project"]]]));
```

- app/Validators/Project.js

```js
"use strict";

class Project {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      title: "required",
      description: "required"
    };
  }
}

module.exports = Project;
```

# Validando Task

```sh
  adonis make:validator Task
```

- start/routes.js

```js
Route.resource("projects.tasks", "TaskController")
  .apiOnly()
  .validator(new Map([[["tasks.store"], ["Task"]]]));
```

- app/Validators/Task.js

```js
"use strict";

class Project {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      title: "required",
      due_date: "date"
    };
  }
}

module.exports = Task;
```
