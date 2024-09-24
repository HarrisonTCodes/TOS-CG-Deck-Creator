import { Card } from "@/app/interfaces/Card";

// Function to convert string into title format (sufficient for all cases here)
function title(str: string) {
    return str.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function getColor(faction: "town" | "mafia" | "neutral") {
    if (faction == "town") {
        return "green"
    } else if (faction == "mafia") {
        return "red"
    } else {
        return "stone"
    }
}

export default function SearchOption({ option } : {option: Card}) {
    return (
        <button 
            className={`text-lg border py-2 text-${getColor(option.faction)}-600 font-bold`} 
            onClick={() => console.log(option.name)}
        >
            {title(option.name)}
        </button>
    )
}