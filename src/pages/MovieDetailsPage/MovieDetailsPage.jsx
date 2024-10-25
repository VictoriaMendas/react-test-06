import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const link = useRef(location.state ?? "/");

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchMovieDetails(movieId);

        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [movieId]);
  return (
    <div>
      <Link to={link.current}>Go back</Link>
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      <div>
        <h3>Additional information</h3>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="cast"
        >
          Cast
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="review"
        >
          Review
        </NavLink>
        <Outlet />
        Movie ID: {movieId}
        {isLoading && <div>Pleae wait is loading...</div>}
        {error && <div>Something went wrong,pls try again...</div>}
      </div>
    </div>
  );
}
