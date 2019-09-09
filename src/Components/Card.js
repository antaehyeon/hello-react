import React from "react";
import styled from "styled-components";

const Image = styled.div`
  width: 120px;
  height: 178px;
  background-color: rgba(20, 20, 20, 0.6);
  background-image: url(${props => props.uri});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 5px;
  margin-right: 40px;
`;

const Info = styled.span`
  bottom: 5px;
  left: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
  text-align: left;
`;

const Text = styled.p`
  width: 115px;
  text-overflow: ellipsis;
  color: yellow;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Info} {
      opacity: 1;
    }
  }
`;

export default props => {
  const { imgUri, title, content } = props;

  return (
    <ImageContainer>
      <Image uri={imgUri ? `https://image.tmdb.org/t/p/original/${imgUri}` : require("assets/noPosterSmall.png")} />
      <Info>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </Info>
    </ImageContainer>
  );
};
