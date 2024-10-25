import { useEffect, useState } from "react";
import { fetchTredingMovie } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchTredingMovie();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {isLoading && <div>Please wait is loading...</div>}
      {error && <div>Something went wrong,pls try again...</div>}
    </div>
  );
}
