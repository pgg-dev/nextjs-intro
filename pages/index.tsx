import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

interface Movies {
  id: number;
  original_title: string;
}
const API_KEY = "602c34fa8625db1b5cc4254cb033de8a";

const Home: NextPage = () => {
  const [movies, setMovies] = useState<Movies[]>();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      {!movies && <h4>Loading...</h4>}
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
