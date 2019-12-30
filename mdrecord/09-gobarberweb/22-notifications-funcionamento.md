# Funcionamento das notificações

```sh
yarn add date-fns@next
```

- components/Notification/index.js

```js
import React, { useState, useEffect, useMemo } from "react";
import { parseISO, formatDistance } from "date-fns";
import pt from "date-fns/locale/pt";

import { MdNotifications } from "react-icons/md";
import api from "~/services/api";

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from "./styles";

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () =>
      Boolean(notifications.find(notification => notification.read === false)),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get("notifications");

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        )
      }));

      setNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color='#7159c1' size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type='button'
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
```

- components/Notification/styles.js

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
  display: ${props => (props.visible ? "block" : "none")};

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
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, "#7159c1")};
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
        margin-left: 10px;
      }
    `}
`;
```
