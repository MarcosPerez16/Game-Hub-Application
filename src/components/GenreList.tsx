import useGenres from '../hooks/useGenres';

// imports here
const GenreList = () => {
  // logic here

  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
