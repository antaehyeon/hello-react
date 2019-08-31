import React, { Component } from "react";
import SearchPresenter from "Routes/Search/SearchPresenter.js";
import { moviesAPI, tvAPI } from "api.js";

export default class SearchContainer extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "code",
    loading: false,
    error: null
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  searchByTerm = async term => {
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults }
      } = await moviesAPI.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvAPI.search(searchTerm);
      console.log("[Search Container] searchByTerm results", { movieResults, tvResults });

      this.setState({ loading: true });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.props;
    return <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} loading={loading} error={error} handleSubmit={this.handleSubmit} />;
  }
}
