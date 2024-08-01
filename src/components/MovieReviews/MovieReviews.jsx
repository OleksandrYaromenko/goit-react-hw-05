import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSeachFilmsReviews } from "../../Api";
import ErrorMessage from "../ErrorMesage/ErrorMessage";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function DetailsPegeCredits() {
      try {
        const data = await getSeachFilmsReviews(movieId);
        setFilms(data.results);
        console.log(data);
      } catch (error) {
        setError(true);
      }
    }
    DetailsPegeCredits();
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage />}
      <ul>
        {films.map(({ id, author, content }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
