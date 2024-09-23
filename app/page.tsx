"use client";
import { useState } from "react";
import Searchbar from "./components/search/Searchbar";
import { Card } from "./interfaces/Card";

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("")
  const [cardsMatchingSearch, setCardsMatchingSearch] = useState<Card[]>([])

  return (
    <main className="flex flex-col items-center py-4">
      <Searchbar 
        label="Search and Add Card"
        valueState={searchValue}
        setValueState={setSearchValue}
        setMatchingState={setCardsMatchingSearch}
      />
      <p>{cardsMatchingSearch.map((card) => <p>{card.name}</p>)}</p>
    </main>
  );
}
