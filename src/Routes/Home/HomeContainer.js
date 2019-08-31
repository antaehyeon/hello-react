import React, { Component } from "react";
import HomePresenter from "Routes/Home/HomePresenter.js";
import { moviesAPI } from "api.js";

export default class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesAPI.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesAPI.upcoming();
      const {
        data: { results: popular }
      } = await moviesAPI.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({
        error: "Can't find movies information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    console.log(this.state);

    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading}></HomePresenter>;
  }
}
