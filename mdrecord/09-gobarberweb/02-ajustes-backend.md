# abrir projeto gobarber backend
- instalando o cors
```sh
  sudo yarn add cors
```
- app.js
```js
  import cors from 'cors';
  ...


  middlewares() {
    ...
    this.server.use(cors());
    ...
```

- Importar o avatar
- SessionController.js
```js
  ...
  import File from '../models/File';
  ...

  const user = await User.findOne({
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

  ...
const { id, name, avatar, provider } = user;
    return res.json({
      user: {
        id,
        name,
        email,
        provider,
        avatar,
      },
```

- UserController.js
```js
  ...
  import File from '../models/File';
  ...
    // const { id, name, provider } = await user.update(req.body);
    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userId, {
      include: [
        { model: File, as: 'avatar', attributes: ['id', 'path', 'url'] },
      ],
    });

    return res.json({ id, name, email, avatar });
  }
```

- ScheduleController.js

```js
  ...

  const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
      order: ['date'],
    });

    return res.json(appointments);
  }
```