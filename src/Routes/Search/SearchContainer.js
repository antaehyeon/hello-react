import React, { Component } from "react";
import SearchPresenter from "Routes/Search/SearchPresenter.js";

export default class SearchContainer extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.props;
    return <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} loading={loading} error={error} />;
  }
}
