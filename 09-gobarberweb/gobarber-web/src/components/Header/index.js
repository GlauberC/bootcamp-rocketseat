import React from "react";

import { Link } from "react-router-dom";

import { Container, Content, Profile } from "./styles";
import Notifications from "~/components/Notifications";
import logo from "~/assets/logo-purple.svg";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Glauber Carvalho</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Glauber Carvalho"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
