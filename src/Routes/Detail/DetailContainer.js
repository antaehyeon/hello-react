import React, { Component } from "react";
import DetailPresenter from "Routes/Detail/DetailPresenter";
import { moviesAPI, tvAPI } from "api";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return push("/");
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesAPI.movieDetail(parsedId));
        console.log("[Detail Container] moviesAPI result", result);
      } else {
        ({ data: result } = await tvAPI.showDetail(parsedId));
        console.log("[Detail Container] tvAPI result", result);
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    console.log(this.props);
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading}></DetailPresenter>;
  }
}
