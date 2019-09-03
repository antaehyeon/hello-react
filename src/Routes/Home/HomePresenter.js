import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Message from "Components/Message.js";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? null : (
    <Container>
      {console.log("[Home Presenter] props", { nowPlaying, popular, upcoming, loading, error })}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {error && <Message color="#e743c3" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
