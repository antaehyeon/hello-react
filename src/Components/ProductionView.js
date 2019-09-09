import React from "react";
import styled from "styled-components";
import Card from "Components/Card";

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

const BigText = styled.li`
  font-size: 24px;
`;

const ProductionView = props => {
  console.log("[Production View] props", props);

  const {
    mode,
    result: { production_companies: companies, production_countries: countries }
  } = props;

  if (mode !== "production") return <></>;

  return (
    <Container>
      <Title>Production Companies</Title>
      <CompaniesContainer>
        {companies.map(company => {
          console.log("[Production View] companies map company", company);
          const { id, logo_path: logoPath, name, origin_country: originCountry } = company;
          return <Card key={id} imgUri={logoPath} title={originCountry} content={name} />;
        })}
      </CompaniesContainer>
      {countries && (
        <>
          <Title>Production Countries</Title>
          {countries.map(({ name }, idx) => {
            return <BigText key={idx}>{name}</BigText>;
          })}
        </>
      )}
    </Container>
  );
};

export default ProductionView;
