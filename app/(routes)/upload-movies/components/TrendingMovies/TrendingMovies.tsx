"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { trendingMovies } from "./TrendingMovies.data";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export const TrendingMovies = () => {
  const [isLoading, setIsLoading] = useState(false);

  const uploadTrendingMovies = async () =>{
    setIsLoading(true)
    try {
      await axios.post("/api/create-popular-movies", {
        movies: trendingMovies
      })
      toast({title:"¡Peliculas subidas correctamente!"})
      setIsLoading(false)

    }catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }




  return (
    <div className="border rounded-lg border-white p-6 hover:bg-slate-500 transition-all duration-300 ">
      <h1 className="text-xl font-bold mb-4 ">Subir peliculas populares</h1>
      <Button className="w-full" variant="secondary" disabled={isLoading}
      onClick={uploadTrendingMovies}>
        Subir peliculas
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};
