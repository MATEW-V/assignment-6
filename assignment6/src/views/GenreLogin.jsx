import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import style6 from "./GenreLogin.module.css";
import GenreView from "./components/GenreView.jsx";

function GenreLogin() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenreId, setSelectedGenreId] = useState(28);
  const navigate = useNavigate();

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

  async function getMoviesByPage(page) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=be3c7266366ad88b56a8397a0a3e668d&with_genres=${selectedGenreId}&page=${page}`
    );
    setMovies(response.data.results);
  }

  function loadMovie(id) {
    navigate(`/movies/${id}`);
  }

  const genres = [
    { genre: "Action", id: 28 },
    { genre: "Animation", id: 16 },
    { genre: "Comedy", id: 35 },
    { genre: "Family", id: 10751 },
    { genre: "History", id: 36 },
    { genre: "Horror", id: 27 },
    { genre: "Music", id: 10402 },
    { genre: "Science Fiction", id: 878 },
    { genre: "Thriller", id: 53 },
    { genre: "War", id: 10752 },
    { genre: "Western", id: 37 },
  ];

  const handleGenreClick = (genreId) => {
    setSelectedGenreId(genreId);
  };

  return (
    <div className={style6.appcontainer}>
      <div className={style6.header}>
        <Header />
      </div>
      <div className={style6.loginfeat}>
        <div className={style6.genrelist}>
          <GenreView genresList={genres} onGenreClick={handleGenreClick} />
          <div className={style6.spacer}>
          </div>
          <div className={style6.pageturner}>
            <p>
              <a onClick={() => {
                if (page > 1) {
                  setPage(page - 1), getMoviesByPage(page - 1)
                }
              }}>Previous Page<br/></a>
              <a onClick={() => {
                if (page < 50) {
                  setPage(page + 1), getMoviesByPage(page + 1)
                }
              }}>Next Page</a></p>
              <p>Page {page}<br/></p>
          </div>
        </div>
        <div className={style6.genredisp}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={style6.moviecard}
              onClick={() => {
                loadMovie(movie.id);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={style6.movieposter}
              />
              <h3>{movie.title}</h3>
              <div className={style6.detailbut}>
                <Link to={`/movies/` + movie.id} className={style6.dbutton}>
                  Details
                </Link>
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
