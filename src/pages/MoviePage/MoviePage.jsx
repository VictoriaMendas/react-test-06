import { useEffect, useState } from "react";
import { fetchMovieByQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviePage() {
  const query = searchParams.get("query");
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchMovieByQuery(query);
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
      {isLoading && <div>Please wait is loading...</div>}
      {error && <div>Something went wrong,pls try again...</div>}
    </div>
  );
}
