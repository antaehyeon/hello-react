import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const List = styled.div`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
  <header>
    <List>
      <Item>
        <SLink href="/">Movies</SLink>
      </Item>
      <Item>
        <SLink href="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink href="/search">Search</SLink>
      </Item>
    </List>
  </header>
);
