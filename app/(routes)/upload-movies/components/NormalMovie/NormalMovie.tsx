'use client'
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { dataMovies } from "./NormalMovie.data";
import { toast } from "@/hooks/use-toast";

export const NormalMovie = () => {
  const [isLoading, setIsLoading] = useState(false)

  const uploadMovies = async () => {
    setIsLoading(true)
    try{
      await axios.post("/api/create-movies", {
        movies:dataMovies
      })
      toast({title:"¡Peliculas subidas correctamente!"})
      setIsLoading(false)

    }catch(error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div className="border rounded-lg border-white p-6 hover:bg-[#d885ff] transition-all duration-300">
      <h1 className="text-xl font-bold mb-4">Subir peliculas normales</h1>
      <Button
        className="w-full "
        variant="outline"
        onClick={ uploadMovies}
        disabled={isLoading}
      >
        subir peliculas
      </Button>
      <Upload className="w-4 h-4 ml-2" />
    </div>
  );
};
