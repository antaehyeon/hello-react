import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 40px;
  background-color: rgba(20, 20, 20, 0.6);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  margin: 40px 0px;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isSelected ? "white" : "rgba(20, 20, 20, 0.6)")};
  color: ${props => (props.isSelected ? "black" : "white")};
  font-weight: ${props => props.isSelected && "900"};
  &:hover {
    cursor: pointer;
  }
`;

const HorizontalDivider = styled.div`
  width: 1px;
  height: 38px;
  background-color: rgba(20, 20, 20, 1);
`;

export default props => {
  console.log("[Detail Header] props", props);

  const { mode, setMode } = props;

  return (
    <Container>
      <Item onClick={() => setMode("youtube")} isSelected={mode === "youtube"}>
        Video
      </Item>
      <HorizontalDivider />
      <Item onClick={() => setMode("production")} isSelected={mode === "production"}>
        Production
      </Item>
    </Container>
  );
};
