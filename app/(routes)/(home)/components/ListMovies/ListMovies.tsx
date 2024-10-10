'use client'
import { BlockMovies } from "@/components/Shared/BlockMovies";
import { ListMoviesProps } from "./ListMovies.types";
import { useLovedFilms } from "@/hooks/use-loved-films";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";

export const ListMovies = (props: ListMoviesProps) => {
  const { movies } = props;
  const { lovedFilmsByUser } = useLovedFilms();
  const { currentUser } = useCurrentNetflixUser();

  const userNetflix = currentUser?.id;

  const lovedFims = userNetflix ? lovedFilmsByUser[userNetflix] : [];

  return (
    <div className=" ">
        <BlockMovies
        title="Peliculas favoritas"
        movies={lovedFims}
        isMyList={true}
      />
      <BlockMovies
        title="Peliculas recientes"
        movies={movies}
        isMyList={false}
      />
    
    </div>
  );
};
