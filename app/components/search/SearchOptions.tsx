import { CardParameters } from "@/app/interfaces/CardParameters";
import SearchOption from "./SearchOption";
import { useState } from "react";

export default function SearchOptions({ optionsState, visible } : { optionsState: CardParameters[], visible: boolean }) {
    // Flag for when options are hovered (and clicked), preventing options from closing and click not being registered
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div 
            className={`flex flex-col w-[90%] max-w-[500px] cursor-pointer z-1 absolute overflow-y-scroll max-h-52 mt-14 rounded-xl border-2 bg-white bg-opacity-90 ${optionsState.length > 0 && (visible || hovered) ? "visible" : "invisible"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {optionsState.map((option: CardParameters, index) => <SearchOption option={option} key={index} />)}
        </div>
    )
}