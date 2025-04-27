import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function useGameState() {
  // Когда у нас состояния связаны друг стругом и меняются почти синхронно (ну или полностью синхронно)
  // то их следует объединять в блоки состояний

  // Функция инициализатор (стрелочная функция) используется чтобы массив генерировался только 1 раз при отрисовки страницы, а не при каждом изменении состояния
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      // Не надо ничего обновлять если клеточка заполнена
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
}
