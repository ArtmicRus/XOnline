// Чтобы выполнять реимпорт надо не забывать фигурные скобки
import { Header } from "../components/header";
import { GameField, GameInfo, GameTitle } from "../components/game";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      {/*  По умолчанию 616px нет поэтому через квадратные скобочки можно указать нужное значение */}
      <main className="pt-6 mx-auto w-max">
        <GameTitle />
        <GameInfo className="mt-4" />
        <GameField className="mt-6" />
      </main>
    </div>
  );
}
