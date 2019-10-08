# global.js
- styles/global.js
```sh
  yarn add styled-components
```
```js
  import {createGlobalStyle} from 'styled-components'
  import background from '../assets/imagems/background.svg'
  export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box
    }
    body{
      background: #191920 url(${background}) no-repeat center top;
      -webkit-font-smoothing: antialiased;
    }
  `
```

# importando em app.js
```js
  import GlobalStyle from './styles/global'

  ...
    <GlobalStyle/>
  ...
```
