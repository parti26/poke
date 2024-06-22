import PokemonPocket from "./PokemonPocket";

export default function Pocket({
  pocket,
  onSelect,
}: {
  pocket: number[];
  onSelect: (id: number) => void;
}) {
  return (
    <div className="full-width-1024px h-40 card justify-between bg-slate-50/75 p-5 text-black m-auto mt-5 mb-5">
      <h2>POCKET:</h2>
      <div className="flex flex-row">
        {pocket.map((id) => (
          <PokemonPocket
            key={id}
            id={id}
            onSelect={(id) => {
              onSelect(id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
