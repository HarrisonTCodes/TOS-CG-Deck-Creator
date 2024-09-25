import { CardParameters } from "@/app/interfaces/CardParameters";
import Image from "next/image"

// Function to get image, handle edge cases of Peaceful/Spiteful Townie and Politician
function getImage(name: string) {
    if (name.toLowerCase().includes("townie") || name == "Politician") {
        return "Townie"
    } else {
        return name
    }
}

export default function Card({ card } : { card: CardParameters }) {
    return (
        <button className="flex flex-col items-center justify-between py-2 w-[100px] h-[130px] border-2 border-gray-400 rounded-xl">
            <p className="font-medium">{card.name}</p>
            <p>{card.value > 0 ? `+${card.value}` : `${card.value}`}</p>
            <Image src={`/static/${getImage(card.name)}.webp`} alt={`${card.name} Image`} width={50} height={50} />
        </button>
    )
}