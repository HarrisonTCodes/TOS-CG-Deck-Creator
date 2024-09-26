import { CardParameters } from "./interfaces/CardParameters"
import { create } from "zustand"

// Get color associated with faction
export function getColor(faction: "town" | "mafia" | "neutral") {
    if (faction == "town") {
        return "green"
    } else if (faction == "mafia") {
        return "red"
    } else {
        return "stone"
    }
}

// Add a "+"" in front of positive numbers, for formatting 
export function getValueString(value: number) {
    if (value > 0) {
        return `+${value}`
    } else {
        return value.toString()
    }
}

// Zustand selected cards store
interface SelectedCardsStore {
    selectedCards: CardParameters[]
    setSelectedCards: (value: CardParameters[]) => void
}

export const useSelectedCardsStore = create<SelectedCardsStore>()((set) => ({
  selectedCards: new Array<CardParameters>(),
  setSelectedCards: (selectedCards: CardParameters[]) => set({ selectedCards })
}))