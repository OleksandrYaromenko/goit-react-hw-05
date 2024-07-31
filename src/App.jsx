import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import HomePege from "./pages/HomePage";
import MoviesPage from "./pages/MovesPage";

export default function App() {
  return (
    <div>
<Navigation/>
<Routes>
  <Route path="/" element = {<HomePege/>}/>
  <Route path="/movies" element = {<MoviesPage/>}/>
  
</Routes>

    </div>
  );
}
