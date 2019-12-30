# configurar notifications

```sh
 yarn add react-icons
 yarn add react-perfect-scrollbar
```

- https://www.npmjs.com/package/react-perfect-scrollbar
- styles/global.js

```js
...
import "react-perfect-scrollbar/dist/css/styles.css";
...
```

- components/Notifications/index.js

```js
import React from "react";

import { MdNotifications } from "react-icons/md";

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from "./styles";

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color='#7159c1' size={20} />
      </Badge>
      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
```

- components/Notifications/styles.js

```js
import styled, { css } from "styled-components";
import { lighten } from "polished";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: "";
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;
export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }
  time {
    font-size: 12px;
    opacity: 0.6;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, "#7159c1")};
    padding: 0 5px;
    margin: 0 5px;
    padding: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: "";
        display: inline-block;
        width: 7px;
        height: 7px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;
```

- components/header/index.js

```js
...
import Notifications from "~/components/Notifications";
...


<aside> {//já estava
    <Notifications />
```
