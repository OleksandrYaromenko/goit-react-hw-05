import { Suspense, useEffect, useRef, useState } from "react";
import {
  useLocation,
  Link,
  NavLink,
  Outlet,
  useParams,
} from "react-router-dom";
import { getSeachFilmsId } from "../../Api";
import ErrorMessage from "../../components/ErrorMesage/ErrorMessage";
import { MagnifyingGlass } from "react-loader-spinner";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loging, setLoging] = useState(false);
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const backLinkRes = useRef(location.state ?? "/movies");
  useEffect(() => {
    async function DetailsPege() {
      try {
        setLoging(true);
        const data = await getSeachFilmsId(movieId);
        setFilms(data);
        setGenres(data.genres);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoging(true);
      } finally {
        setLoging(false);
      }
    }
    DetailsPege();
  }, [movieId]);
  return (
    <main className={css.main}>
      <div>
        <button>
          <Link to={backLinkRes.current}>Go Back</Link>
        </button>
      </div>
      {error && <ErrorMessage />}
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
      <div className={css.conteiner}>
        <div>
          {" "}
          <img src={`https://image.tmdb.org/t/p/w300/${films.poster_path}`} />
        </div>

        <div>
          {" "}
          <h2>{films.original_title}</h2>
          <p>User score:{films.vote_average * 10}%</p>
          <h2>Overview:</h2>
          <p>{films.overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.conteiner}>
        <ul className={css.ul}>
          <li className={css.li}>
            <NavLink onClick={scroll(0, 500)} to="cast">
              Cast
            </NavLink>
          </li>
          <li className={css.li}>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}
