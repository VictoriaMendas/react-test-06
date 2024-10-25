import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReview from "./components/MovieReview/MovieReview";
import MovieNotFoundPage from "./pages/MovieNotFoundPage/MovieNotFoundPage";

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<MovieNotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
