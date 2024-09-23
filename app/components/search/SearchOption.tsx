import { Card } from "@/app/interfaces/Card";

export default function SearchOption({ name, value } : Card) {
    return (
        <button className="text-lg border py-2">{name}</button>
    )
}