import React from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import "./App.css";
import EachMovie from "./Components/EachMovie/EachMovie";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesData: [],
      mSearch: "",
      error: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ mSearch: e.target.value });
  };

  handleButtonClick = () => {
    let apiKey = "9515c38b";
    let url = `http://www.omdbapi.com/?s=${this.state.mSearch}&apikey=${apiKey}&page=1-2&type=movie`;

    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          data.Response === "True"
            ? this.setState({
                moviesData: data.Search.filter((movie) => {
                  return movie.Poster !== "N/A";
                }),
              })
            : this.setState({ error: data.Error, moviesData: [] });
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Movie Search App</h1>
        <div>
          <SearchBox
            handleSearch={this.handleSearch}
            value={this.state.mSearch}
            onClick={this.handleButtonClick}
          />
        </div>
        <div className="movieslist">
          {this.state.moviesData.length > 0 ? (
            this.state.moviesData.map((movie, index) => {
              return (
                <EachMovie
                  title={movie.Title}
                  image={movie.Poster}
                  key={index}
                  year={movie.Year}
                />
              );
            })
          ) : (
            <span>{this.state.error}</span>
          )}
        </div>
      </div>
    );
  }
}

export default App;
