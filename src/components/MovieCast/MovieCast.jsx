import { useEffect, useState } from "react";
import { getSeachFilmsCredits } from "../../Api";
import { useParams } from "react-router-dom";

export default function MovieCast(){
    const { movieId } = useParams();
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(false);
    const [loging, setLoging] = useState(false);

  useEffect(() => {
    async function DetailsPegeCredits() {
      try {
        setLoging(true);
        const data = await getSeachFilmsCredits(movieId);
        setFilms(data);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoging(true);
      } finally {
        setLoging(false);
      }
    }
    DetailsPegeCredits();
  }, [movieId]);
    return(
        <div></div>
    )
}