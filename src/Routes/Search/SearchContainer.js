import React, { Component } from "react";
import SearchPresenter from "Routes/Search/SearchPresenter.js";
import { moviesAPI, tvAPI } from "api.js";

export default class SearchContainer extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;

    this.setState({
      searchTerm: value
    });
  };

  searchByTerm = async term => {
    const { searchTerm } = this.state;
    try {
      this.setState({ loading: true });
      const {
        data: { results: movieResults }
      } = await moviesAPI.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvAPI.search(searchTerm);
      console.log("[Search Container] searchByTerm results", { movieResults, tvResults });
      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
