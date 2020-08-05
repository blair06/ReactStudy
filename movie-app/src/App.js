import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie"
import "./App.css"
class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //async 비동기 "기다렸다가 계속해" await "무엇을?"
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading
          ? <div class="loader">
            <span class="loder_text">Loading ...</span>
          </div>
          : <div class="movies">
              {movies.map((movie) => (
              <Movie
              genres={movie.genres}
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              ></Movie>
            ))}
            </div>}
      </section>
    );
  }
}

export default App;
