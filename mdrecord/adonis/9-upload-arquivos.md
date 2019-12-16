# criar model File criando a migration e o controller automaticamente

```sh
  adonis make:model File -m -c
```

# configurando a migration

- XXXXXXXXXXX_file_schema.js

```js
this.create("files", table => {
  table.increments();
  table.string("file").notNullable();
  table.string("name").notNullable();
  table.string("type", 20);
  table.string("subtype", 20);
  table.timestamps();
});
```

```sh
  adonis migration:run
```

# configurando FileController.js

```js
"use strict";

const File = use("App/Models/File");
const Helpers = use("Helpers");

class FileController {
  async store({ request, response }) {
    try {
      // eslint-disable-next-line no-useless-return
      if (!request.file("file")) return;
      const upload = request.file("file", { size: "2mb" });
      const fileName = `${Date.now()}.${upload.subtype}`;

      await upload.move(Helpers.tmpPath("uploads"), { name: fileName });

      if (!upload.moved()) {
        throw upload.error();
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype
      });
      return file;
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: "Erro no upload de arquivos" } });
    }
  }
}

module.exports = FileController;
```

- start/routes.js

```js
...
Route.post("users", "UserController.store");
```
