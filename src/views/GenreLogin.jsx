import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useStoreContext } from "../context";  // Import context hook
import Footer from "./components/Footer.jsx";
import style6 from "./GenreLogin.module.css";
import GenreView from "./components/GenreView.jsx";

function GenreLogin() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenreId, setSelectedGenreId] = useState(28);
  const { cart, fname, addToCart, genres } = useStoreContext();  // Destructure addToCart from context

  // Function to handle adding a movie to the cart
  const cartAdd = (movie) => {
    // Check if the movie is already in the cart using Immutable Map
    if (cart.has(movie.id)) {
      alert("This movie is already in your cart.");
    } else {
      addToCart(movie);  // Add movie object to the cart
    }
  };

  // Fetch movies based on selected genre
  useEffect(() => {
    const fetchMovies = async () => {
      const url = selectedGenreId
        ? `https://api.themoviedb.org/3/discover/movie?api_key=be3c7266366ad88b56a8397a0a3e668d&with_genres=${selectedGenreId}`
        : `https://api.themoviedb.org/3/discover/movie?api_key=be3c7266366ad88b56a8397a0a3e668d&with_genres=28`;

      const response = await axios.get(url);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [selectedGenreId]);

  // Fetch movies for a specific page
  async function getMoviesByPage(page) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=be3c7266366ad88b56a8397a0a3e668d&with_genres=${selectedGenreId}&page=${page}`
    );
    setMovies(response.data.results);
  }

  // Define movie genres
  

  const handleGenreClick = (genreId) => {
    setSelectedGenreId(genreId);
  };

  return (
    <div className={style6.appcontainer}>
      <div className={style6.loginfeat}>
        <div className={style6.welcome}>
          Welcome {fname}! We hope you find what you are looking for. {genres}
        </div>
        <div className={style6.genrelist}>
          <GenreView genresList={genres} onGenreClick={handleGenreClick} />
          <div className={style6.spacer}></div>
          <div className={style6.pageturner}>
            <p>
              <a
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                    getMoviesByPage(page - 1);
                  }
                }}
              >
                Previous Page<br />
              </a>
              <a
                onClick={() => {
                  if (page < 50) {
                    setPage(page + 1);
                    getMoviesByPage(page + 1);
                  }
                }}
              >
                Next Page
              </a>
            </p>
            <p>Page {page}<br /></p>
          </div>
        </div>

        <div className={style6.genredisp}>
          {movies.map((movie) => (
            <div className={style6.moviecard} key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={style6.movieposter}
              />
              <h3>{movie.title}</h3>

              <div className={style6['button-container']}>
                <Link to={`/movies/${movie.id}`} className={style6.dbutton}>Details</Link>
                {/* Check if the movie is already in the cart */}
                <div
                  onClick={() => cartAdd(movie)}
                  className={style6.buybut}
                >
                  {cart.has(movie.id) ? "Added" : "Buy"} {/* Toggle text based on cart status */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style6.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default GenreLogin;