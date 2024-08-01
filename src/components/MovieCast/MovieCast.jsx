import { useEffect, useState } from "react";
import { getSeachFilmsCredits } from "../../Api";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMesage/ErrorMessage";

export default function MovieCast() {
  const { movieId } = useParams();
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    async function DetailsPegeCredits() {
      try {
        const data = await getSeachFilmsCredits(movieId);
        setFilms(data.cast);
      } catch (error) {
        setError(true);
        
      } 
    }
    DetailsPegeCredits();
  }, [movieId]);
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  return (
    <div>
      {error && <ErrorMessage />}
      <ul>
        {films.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              width={70}
              height={100}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
            />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
