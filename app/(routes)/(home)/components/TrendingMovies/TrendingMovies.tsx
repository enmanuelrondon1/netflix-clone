import Image from "next/image";
import { TrendingMoviesProps } from "./TrendingMovies.types";
import { InfoExtraFilm } from "./InfoExtraFilm";

export const TrendingMovies = (props: TrendingMoviesProps) => {
  const { movies } = props;

  return (
    <div className="pt-11 md:pt-0 md:-top-24 lg:-top-28 relative px-[4%] ">
      <h3 className="text-2xl font-semibold mb-3">
        Las series mas populares de este momento
      </h3>
      <div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="cursor-pointer transition delay-300 hover:h-[14vh] group relative "
            >
              <div className="flex transition duration group-hover:opacity-90 delay-300 w-full justify-center">
                <Image
                  src={`https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/ranking/${movie.ranking}.png`}
                  alt="Number"
                  width={116}
                  height={150}
                  className="h-auto w-auto lg:max-w-full"
                />
                <Image
                  src={movie.thumbnailUrl}
                  alt="Image"
                  width={116}
                  height={150}
                  className="h-auto w-auto md:max-[180px] lg:max-h-full "
                />
              </div>
              <InfoExtraFilm movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
