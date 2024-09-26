import { CardParameters } from "@/app/interfaces/CardParameters";
import { getColor, getValueString, useSelectedCardsStore } from "@/app/utils";

export default function SearchOption({ option } : {option: CardParameters}) {
    const { selectedCards, setSelectedCards } = useSelectedCardsStore()

    return (
        <button 
            className={`text-lg border py-2 text-${getColor(option.faction)}-600 active:bg-stone-200 transition-colors`} 
            onClick={() => setSelectedCards([...selectedCards, option])}
        >
            <span className="font-bold">{option.name}</span> ({getValueString(option.value)})
        </button>
    )
}