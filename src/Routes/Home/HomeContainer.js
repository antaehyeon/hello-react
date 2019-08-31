import React, { Component } from "react";
import HomePresenter from "Routes/Home/HomePresenter.js";

export default class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading}></HomePresenter>;
  }
}