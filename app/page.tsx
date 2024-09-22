"use client";
import { useState } from "react";
import Searchbar from "./components/search/Searchbar";

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("")

  return (
    <main className="flex flex-col items-center py-4">
      <Searchbar label="Search and Add Card" valueState={searchValue} setValueState={setSearchValue} />
    </main>
  );
}
