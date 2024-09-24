import { Card } from "@/app/interfaces/Card";

export default function SearchOption({ name, value } : Card) {
    return (
        <button className="text-lg border py-2" onClick={() => console.log(name)}>{name}</button>
    )
}