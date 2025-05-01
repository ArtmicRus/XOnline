// Чтобы выполнять реимпорт надо не забывать фигурные скобки
import { Header } from "../components/header";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { useState } from "react";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const { cells, currentMove, nextMove, handleCellClick } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      {/*  По умолчанию 616px нет поэтому через квадратные скобочки можно указать нужное значение */}
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
        />
        <GameField
          playersCount={playersCount}
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
        />
      </main>
    </div>
  );
}
