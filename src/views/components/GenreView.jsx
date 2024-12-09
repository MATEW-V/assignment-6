import style11 from './GenreView.module.css';

function GenreView({ genresList, onGenreClick }) {
  return (
    <div className={style11.genretag}>
      {genresList.map((genre) => (
        <ul><li key={genre.id} onClick={() => onGenreClick(genre.id)}>
          {genre.genre}
        </li></ul>
      ))}
    </div>
  )
}

export default GenreView;