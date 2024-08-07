import { lazy, useEffect, useState } from "react";
import { getSeachFilms } from "../Api";
import { useSearchParams } from "react-router-dom";

import { MagnifyingGlass } from "react-loader-spinner";

const OwnerFilter = lazy(() => import("../components/OwnerFilter/OwnerFilter"));
const MovieList = lazy(() => import("../components/MovieList/MovieList"));
const ErrorMessage = lazy(() =>
  import("../components/ErrorMesage/ErrorMessage")
);

export default function MoviesPage() {
  const [loging, setLoging] = useState(false);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get("request") || "";
    setQuery(currentQuery);
  }, [searchParams]);

  useEffect(() => {
    async function SerchFilms() {
      if (!query) return;
      try {
        setLoging(true);
        const data = await getSeachFilms(query);
        setFilms(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoging(false);
      }
    }
    SerchFilms();
  }, [query]);
  const handleSubmit = (value) => {
    setSearchParams({ query: value });
    setQuery(value);
  };
  return (
    <div>
      {error && <ErrorMessage />}
      <OwnerFilter setQuery={setQuery} onFilter={handleSubmit} />
      {films.length > 0 && <MovieList films={films} />}
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
    </div>
  );
}
