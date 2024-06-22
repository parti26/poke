import { useQuery } from "@tanstack/react-query";
import { PokemonDetails } from "../Types/types";

export function getRandNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function fetchPokemon(id: number): Promise<PokemonDetails> {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(URL + id);
  const data = await response.json();
  return data;
}

export function usePokemon(id: number) {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemon(id),
    refetchOnWindowFocus: false,
  });
}

