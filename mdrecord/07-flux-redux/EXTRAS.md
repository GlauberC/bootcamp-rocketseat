# Configurar Json server para ip externo

```sh
sudo json-server --host 192.168.0.19 server.json -p 3333 -w
```

# Usar o Intl no react native

```
Instead of importing locale-data from react-intl, I have resolved the issue importing the polyfill and the locale data from intl

Install intl

npm install intl
Add this at the very top of your app:

import 'intl';
import 'intl/locale-data/jsonp/en';
```
