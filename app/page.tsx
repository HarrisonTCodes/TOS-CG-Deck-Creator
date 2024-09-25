"use client";
import { useState } from "react";
import { CardParameters } from "./interfaces/CardParameters";
import { create } from "zustand"
import Searchbar from "./components/search/Searchbar";
import SearchOptions from "./components/search/SearchOptions";
import Card from "./components/card/Card";
import Badge from "./components/badge/Badge";
import { getValueString } from "./utils";

// Zustand selected cards store
interface SelectedCardsStore {
  selectedCards: CardParameters[]
  setSelectedCards: (value: CardParameters[]) => void
}

export const useSelectedCardsStore = create<SelectedCardsStore>()((set) => ({
  selectedCards: new Array<CardParameters>(),
  setSelectedCards: (selectedCards: CardParameters[]) => set({ selectedCards })
}))

// Main page
export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("")
  const [cardsMatchingSearch, setCardsMatchingSearch] = useState<CardParameters[]>([])
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
      <section className="flex justify-center gap-2 py-2">
        <Badge label={`Card Count: ${selectedCards.length}`} />
        <Badge label={`Deck Value: ${getValueString(selectedCards.reduce((accumulator, card) => accumulator + card.value, 0))}`} />
      </section>
      <section className="flex flex-wrap justify-center gap-2 max-w-[500px]">
        {selectedCards.map((card: CardParameters, index: number) => <Card card={card} key={index} />)}
      </section>
    </main>
  );
}
