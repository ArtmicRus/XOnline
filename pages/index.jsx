// Чтобы выполнять реимпорт надо не забывать фигурные скобки
import { Header } from "../components/header";

export default function HomePage() {
  return (
      <div className="bg-slate-50 min-h-screen">
        <Header/>
      </div>
  );
}
