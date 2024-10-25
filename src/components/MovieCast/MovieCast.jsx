import { useEffect, useState } from "react";
import { fetchMoviCredits } from "../../services/api";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchMoviCredits(movieId);
        console.log(data);
        setMovieCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [movieId]);
  return (
    <ul>
      {movieCast.map((cast) => {
        return (
          <li key={cast.id}>
            <img src={cast.poster_path} alt={cast.title} />
            <p>{}</p>
            <p>Character: {}</p>
          </li>
        );
      })}
      {isLoading && <div>Please wait is loading...</div>}
      {error && <div>Something went wrong,pls try again...</div>}
    </ul>
  );
}
