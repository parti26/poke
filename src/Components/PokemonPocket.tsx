import { useState } from "react";
import { usePokemon } from "../data/utils";

export default function PokemonPocket({
  id,
  onSelect,
}: {
  id: number;
  onSelect: (id: number) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { error, isLoading, isSuccess, data } = usePokemon(id);

  return (
    <div
      className="w-20"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => {
        onSelect(id);
      }}
    >
      {error && <h1 className="warning-message">Something went wrong...</h1>}
      {isLoading && <h1 className="load-info">Loading...</h1>}
      {isSuccess && (
        <>
          <p className={`m-2 text-base ${isVisible ? "visible" : "invisible"}`}>
            {data.name}
          </p>
          <div className="card w-full h-1/2 p-2 cursor-poke-full">
            <img
              className="w-auto h-full"
              src={
                data.sprites.other.showdown.front_default
                  ? data.sprites.other.showdown.front_default
                  : data.sprites.front_default
                  ? data.sprites.front_default
                  : ""
              }
              alt={data.name}
            />
          </div>
        </>
      )}
    </div>
  );
}
