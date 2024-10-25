import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../services/api";

export default function MovieReview() {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchMovieReview(movieId);
        console.log(data);
        setMovieReview(data.results);
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
      {!movieReview
        ? "We dont have any reviews for this movie"
        : movieReview.map((review) => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
      {isLoading && <div>Pleae wait is loading...</div>}
      {error && <div>Something went wrong,pls try again...</div>}
    </ul>
  );
}
