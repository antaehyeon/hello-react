import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 16px;
`;
const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;
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

const Text = styled.p`
  width: 120px;
  text-overflow: ellipsis;
`;

const ProductionView = props => {
  console.log("[Production View] props", props);

  const {
    mode,
    result: { production_companies: companies, production_countries: countries }
  } = props;

  if (mode !== "production") return <></>;

  console.log("[Production View] companies", companies);
  console.log("[Production View] countries", countries);

  return (
    <Container>
      <Title>Production Companies</Title>
      <CompaniesContainer>
        {companies.map(company => {
          console.log("[Production View] companies map company", company);
          const { id, logo_path: logoPath, name, origin_country: originCountry } = company;
          return (
            <ImageContainer>
              <Image key={id} uri={logoPath ? `https://image.tmdb.org/t/p/original/${logoPath}` : require("assets/noPosterSmall.png")} />
              <Info>
                <Text>{originCountry}</Text>
                <Text>{name}</Text>
              </Info>
            </ImageContainer>
          );
        })}
      </CompaniesContainer>
      <Title>Production Countries</Title>
    </Container>
  );
};

export default ProductionView;
