import { Card } from "@/app/interfaces/Card";
import SearchOption from "./SearchOption";
import { useState } from "react";

// Function to convert string into title format (sufficient for all cases here)
function title(str: string) {
    return str.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export default function SearchOptions({ optionsState, visible } : { optionsState: Card[], visible: boolean }) {
    // Flag for when options are hovered (and clicked), preventing options from closing and click not being registered
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div 
            className={`flex flex-col w-[90%] max-w-[500px] cursor-pointer z-1 absolute overflow-y-scroll max-h-60 mt-14 rounded-xl border-2 bg-white ${optionsState.length > 0 && (visible || hovered) ? "visible" : "invisible"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {optionsState.map((option: Card, index) => <SearchOption name={title(option.name)} value={option.value} key={index} />)}
        </div>
    )
}