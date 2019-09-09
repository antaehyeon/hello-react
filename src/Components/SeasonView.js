import React from "react";
import styled from "styled-components";
import Card from "Components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SeasonView = props => {
  console.log("[SeasonView] props", props);

  const {
    mode,
    result: { seasons }
  } = props;

  if (mode !== "season") return <></>;
  if (seasons.length === 0) return <p>시즌이 없습니다!</p>;

  return (
    <Container>
      {seasons.map(season => {
        const { poster_path: posterPath, name, episode_count: epiCnt } = season;
        return <Card imgUri={posterPath} title={name} content={`${epiCnt} 부작`}></Card>;
      })}
    </Container>
  );
};

export default SeasonView;
