import Image from "next/image";
import logoSrc from "./logo.svg";
import {Profile} from "../profile";
import {ArrowDownIcon} from "./icons/arrow-down-icon";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-sky-200 mx-6"></div>
      {/* Эффект на hover в tailwind css */}
      <button className="w-44 bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg px-5 py-2 text-2xl leading-tight ">
        Играть
      </button>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        {/* unoptimized потому что в противном случае аватарка мыльная */}
        <Profile/>
        <ArrowDownIcon/>
      </button>
    </header>
  );
}
