import useGenres from '../hooks/useGenres';

// imports here
const GenreList = () => {
  // logic here

  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
