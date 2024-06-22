import { useState } from "react";
import { PokemonDetails } from "../Types/types";

export default function PokemonMain({
  pokemonById,
  newHP,
}: {
  pokemonById: PokemonDetails;
  newHP: number;
}) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="card justify-between bg-slate-50/75">
      {/* Name */}
      <h1 className="poke-details-header">{pokemonById.name.toUpperCase()}</h1>
      {/* Image */}
      <div className="bg-blue-100 rounded-lg h-40 p-2 mx-4">
        {pokemonById.sprites.other.dream_world.front_default ? (
          <img
            src={pokemonById.sprites.other.dream_world.front_default}
            alt="Picture of the opponent"
            className="size-full"
          />
        ) : pokemonById.sprites.front_default ? (
          <img
            src={pokemonById.sprites.front_default}
            alt="Picture of the opponent"
            className="size-full"
          />
        ) : (
          <h1>Sorry, no image to this Pokemon</h1>
        )}
      </div>
      {/* Stats */}
      <div
        className={`grid grid-cols-1 my-6 mx-8 ${
          isVisible ? "visible" : "invisible"
        }`}
      >
        <div className="text-center pb-4">Details</div>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-3">
            <div>HP:</div>
            <div>Attack:</div>
            <div>Defense:</div>
          </div>
          <div className="grid grid-rows-3 text-right pr-6">
            <div>{newHP === -10 ? pokemonById.stats[0].base_stat : newHP}</div>
            <div>{pokemonById.stats[1].base_stat}</div>
            <div>{pokemonById.stats[2].base_stat}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
