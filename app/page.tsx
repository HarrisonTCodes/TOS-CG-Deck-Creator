"use client";
import { useState } from "react";
import { Card } from "./interfaces/Card";
import { create } from "zustand"
import Searchbar from "./components/search/Searchbar";
import SearchOptions from "./components/search/SearchOptions";

// Zustand selected cards store
interface SelectedCardsStore {
  selectedCards: Card[]
  setSelectedCards: (value: Card[]) => void
}

export const useSelectedCardsStore = create<SelectedCardsStore>()((set) => ({
  selectedCards: new Array<Card>(),
  setSelectedCards: (selectedCards: Card[]) => set({ selectedCards })
}))

// Main page
export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("")
  const [cardsMatchingSearch, setCardsMatchingSearch] = useState<Card[]>([])
  const [searchbarFocus, setSearchbarFocus] = useState<boolean>(false)
  const { selectedCards } = useSelectedCardsStore()

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
      {selectedCards.map((card: Card, index: number) => <p key={index}>{card.name}</p>)}
    </main>
  );
}
