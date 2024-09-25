import { CardParameters } from "@/app/interfaces/CardParameters";
import { useSelectedCardsStore } from "@/app/page";

function getColor(faction: "town" | "mafia" | "neutral") {
    if (faction == "town") {
        return "green"
    } else if (faction == "mafia") {
        return "red"
    } else {
        return "stone"
    }
}

export default function SearchOption({ option } : {option: CardParameters}) {
    const { selectedCards, setSelectedCards } = useSelectedCardsStore()

    return (
        <button 
            className={`text-lg border py-2 text-${getColor(option.faction)}-600 active:bg-stone-200 transition-colors`} 
            onClick={() => setSelectedCards([...selectedCards, option])}
        >
            <span className="font-bold">{option.name}</span> ({option.value > 0 ? `+${option.value}` : `${option.value}`})
        </button>
    )
}