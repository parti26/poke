import { useState } from "react";
import { getRandNumber } from "../data/utils";
import { PokemonDetailsRefactored } from "../Types/types";

export default function Battle({
  actualPocket,
  player,
  enemy,
  onClose,
  onHPChange,
  onSetMessage,
}: {
  actualPocket: number[];
  player: PokemonDetailsRefactored;
  enemy: PokemonDetailsRefactored;
  onClose: (newPocket: number[]) => void;
  onHPChange: (
    newEnemyHP: number,
    newPlayerHP: number,
    damageToEnemy: number,
    damageToPlayer: number
  ) => void;
  onSetMessage: (message: string) => void;
}) {
  const [enemyActualHP, setEnemyActualHP] = useState(enemy.hp);
  const [playerActualHP, setPlayerActualHP] = useState(player.hp);
  const [newPocket, setNewPocket] = useState(actualPocket);
  const [attackState, setAttackState] = useState(1);

  function countPoints(attack: number, defense: number) {
    return Math.round(
      ((((2 / 5 + 2) * attack * 60) / defense / 50 + 2) *
        getRandNumber(217, 255)) /
        255
    );
  }

  function fight() {
    const damageToEnemy = countPoints(player.attack, enemy.defense);
    const damageToPlayer = countPoints(enemy.attack, player.defense);
    if (enemyActualHP - damageToEnemy <= 0) {
      setEnemyActualHP(0);
      setNewPocket([...actualPocket, player.id, enemy.id]);
      onHPChange(0, playerActualHP, damageToEnemy, damageToPlayer);
      setAttackState(3);
    }
    if (playerActualHP - damageToPlayer <= 0) {
      setPlayerActualHP(0);
      setNewPocket(actualPocket);
      onHPChange(enemyActualHP, 0, damageToEnemy, damageToPlayer);
      setAttackState(3);
    } else {
      setEnemyActualHP(enemyActualHP - damageToEnemy);
      setPlayerActualHP(playerActualHP - damageToPlayer);
      onHPChange(
        enemyActualHP - damageToEnemy,
        playerActualHP - damageToPlayer,
        damageToEnemy,
        damageToPlayer
      );
    }
  }

  return (
    <div className="card justify-between bg-slate-50/75 p-5">
      {attackState === 1 ? (
        <>
          <button
            className="btn btn-outline btn-primary cursor-poke-full"
            onClick={() => {
              setAttackState(2);
              onSetMessage("START THE FIGHT, HIT ATTACK");
            }}
          >
            START FIGHT
          </button>
        </>
      ) : attackState === 2 ? (
        <>
          <button
            className="btn btn-outline btn-error cursor-poke-full"
            onClick={() => {
              fight();
            }}
          >
            ATTACK
          </button>
        </>
      ) : (
        <>
          <button
            className="btn btn-outline btn-accent cursor-poke-full"
            onClick={() => {
              onClose(newPocket);
            }}
          >
            BACK TO MAP
          </button>
        </>
      )}
    </div>
  );
}
