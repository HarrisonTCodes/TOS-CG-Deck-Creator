"use client";
import { useState } from "react";
import Searchbar from "./components/search/Searchbar";
import { Card } from "./interfaces/Card";
import SearchOptions from "./components/search/SearchOptions";

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("")
  const [cardsMatchingSearch, setCardsMatchingSearch] = useState<Card[]>([])
  const [searchbarFocus, setSearchbarFocus] = useState<boolean>(false)

  return (
    <main className="flex flex-col items-center py-4">
      <Searchbar 
        label="Search and Add Card"
        valueState={searchValue}
        setValueState={setSearchValue}
        setMatchingState={setCardsMatchingSearch}
        setFocusState={setSearchbarFocus}
      />
      <SearchOptions optionsState={cardsMatchingSearch} visible={searchbarFocus} />
    </main>
  );
}
