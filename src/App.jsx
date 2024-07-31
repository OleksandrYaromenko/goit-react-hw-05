import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import HomePege from "./pages/HomePage";
import MoviesPage from "./pages/MovesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
// import { useEffect, useState } from "react";
// import { seachFilms } from "./Api";
// import ErrorMessage from "./components/ErrorMesage/ErrorMessage";

export default function App() {
//   const [films, setFilms] = useState([])
//   const [error, setError] = useState(false)

// useEffect(() => {
//   async function seachFilmsEffect(){
//     try {
//       const data = await seachFilms()
//       setFilms(data)
//       console.log(data);
//     } catch (error) {
//       setError(true)
//     }
//   }
// seachFilmsEffect()

// }, [])


  return (
    <div>
<Navigation/>
<Routes>
  <Route path="/" element = {<HomePege/>}/>
  <Route path="/movies" element = {<MoviesPage/>}/>
  <Route path="/movies/:movieId" element = {<MovieDetailsPage/>}>
  <Route path="cast" element={<MovieCast/>}/>
  <Route path="reviews" element={<MovieReviews/>}/>
  </Route>
  <Route path="*" element ={<NotFoundPage/>}/>
</Routes>

    </div>
  );
}
