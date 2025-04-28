// Чтобы выполнять реимпорт надо не забывать фигурные скобки
import { Header } from "../components/header";
import { GameField, GameInfo, GameTitle } from "../components/game";
import {useState} from "react";

export default function HomePage() {

    const [playersCount, setPlayersCount] = useState(4);

    return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      {/*  По умолчанию 616px нет поэтому через квадратные скобочки можно указать нужное значение */}
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} className="mt-4" />
        <GameField playersCount={playersCount} className="mt-6" />
      </main>
    </div>
  );
}
