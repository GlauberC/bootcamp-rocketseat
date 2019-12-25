# instalando
```sh
  yarn add styled-components
```

# Criar components funcionais
- pages/_layouts
  - auth/index.js
  - default/index.js

- auth/index.js
```js
import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};


```
- auth/styles.js
```js
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
`;

```
- default/index.js
```js
import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};


```
- default/styles.js
```js
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background: #333;
`;
```
- routes/Route.js
```js
...
import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";
...

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = false;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
...
```

