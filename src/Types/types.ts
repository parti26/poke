export type PokeLocation = {
  id: number;
  name: string;
  names: Array<{ name: string }>;
};

export type PokemonDetails = {
  id: number;
  name: string;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      showdown: { front_default: string };
    };
  };
};

export type PokemonDetailsRefactored = 
{
  id: number;
  hp: number;
  defense: number;
  attack: number;
}
