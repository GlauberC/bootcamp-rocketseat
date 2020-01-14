# configurando o header da aplicação

- \_layouts/default/styles.js

```js
  // Wrapper
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
```

- src/components/Header/index.js

```js
import React from "react";

import { Link } from "react-router-dom";
import logo from "~/assets/logo-purple.svg";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt='Gobarber' />
          <Link to='/dashboard'>Dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Glauber Carvalho</strong>
              <Link to='/profile'>Meu perfil</Link>
            </div>
            <img
              src='https://api.adorable.io/avatars/50/abott@adorable.png'
              alt='Glauber Carvalho'
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
```

- src/components/Header/styles.js

```js
import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
      text-transform: uppercase;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
```

- \_layouts/default/index.js

```js
...
import Header from "~/components/Header";
...
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
```

- Pegar avatar em http://avatars.adorable.io/#demo
