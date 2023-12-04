// import React from 'react'

import { HeaderContainer, Nav, Item } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <Nav>
        <Item>Home</Item>
        <Item>Projects</Item>
        <Item>Contact</Item>
        <Item>🇧🇷 | 🏴󠁧󠁢󠁳󠁣󠁴󠁿</Item>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
