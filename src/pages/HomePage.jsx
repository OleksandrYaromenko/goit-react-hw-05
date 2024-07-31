import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMesage/ErrorMessage";
import MovieList from "../components/MovieList/MovieList";
import { seachFilms } from "../Api";
import { Toaster } from "react-hot-toast";
import { MagnifyingGlass } from "react-loader-spinner";

export default function HomePege() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loging, setLoging] = useState(false);

  useEffect(() => {
    async function seachFilmsEffect() {
      try {
        setLoging(true);
        const data = await seachFilms();
        setFilms(data.results);
      } catch (error) {
        setError(true);
        setLoging(true);
      }finally{
        setLoging(false)
      }
    }
    seachFilmsEffect();
  }, []);
  return (
    <div>
      {loging && (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      {error && <ErrorMessage />}
      <MovieList films={films} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
