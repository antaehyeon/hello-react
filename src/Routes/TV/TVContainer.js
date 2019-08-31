import React, { Component } from "react";
import TVPresenter from "Routes/TV/TVPresenter.js";
import { tvAPI } from "api.js";

export default class TVContainer extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvAPI.topRated();
      const {
        data: { results: popular }
      } = await tvAPI.popular();
      const {
        data: { results: airingToday }
      } = await tvAPI.airingToday();

      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({
        error: "Can't find TV information."
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    console.log(this.state);

    const { topRated, popular, airingToday, loading, error } = this.props;
    return <TVPresenter topRated={topRated} popular={popular} airingToday={airingToday} loading={loading} error={error} />;
  }
}
