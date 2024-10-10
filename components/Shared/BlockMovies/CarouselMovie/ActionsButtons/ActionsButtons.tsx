"use client";
import { Button } from "@/components/ui/button";
import { ActionsButtonsProps } from "./ActionsButtons.types";
import { ChevronDown, Play, ThumbsUp, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLovedFilms } from "@/hooks/use-loved-films";

export const ActionsButtons = (props: ActionsButtonsProps) => {
  const router = useRouter()
  const { movieId, movie, isMyList } = props;
  const {addLovedFilm,lovedFilmsByUser,removeLovedFilm} = useLovedFilms()

  console.log(lovedFilmsByUser)
  

  const onPlayButton = () => {
router.push(`/movie/${movieId}`)
  }
const onAddToMyList = () => {
  addLovedFilm(movie)
}

const onRemoveFromMyList = () => {
  removeLovedFilm(movieId)
}
  return (
    <div className="flex justify-between mb-5">
      <div className="flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="bg-slate-50 rounded-full flex items-center justify-center h-7 w-7 "
          onClick={() => onPlayButton()}
        >
          <Play className="text-zinc-900 fill-zinc-900 h-3 w-3 " />
        </Button>
        {isMyList ? (
          <Button
            size="icon"
            variant="ghost"
            className="bg-zinc-900 border-2 border-gray-400 rounded-full flex items-center justify-center h-7 w-7 "
          >
            <X
              width={10}
              height={10}
              className="text-zinc-50 fill-zinc-900 h-3 w-3 "
              onClick={() => onRemoveFromMyList()}
            />
          </Button>
        ) : (
          <Button
            size="icon"
            variant="ghost"
            className="bg-zinc-900 border-2 border-gray-400 rounded-full flex items-center justify-center h-7 w-7 "
          >
            {" "}
            <ThumbsUp className="text-slate-50 fill-zinc-400 h-3 w-3 "
            onClick={() => onAddToMyList()} />
          </Button>
        )}
      </div>
      <Button size='icon' variant='ghost' className="bg-zinc-900 border-2 border-gray-400 rounded-full flex items-center justify-center h-7 w-7 " >
       <ChevronDown className="text-slate-50 h-3 w-3 " /> 
      </Button>
    </div>
  );
};
