import { NextRequest } from "next/server";

const cards = [
    {
        name: "Bodyguard",
        value: 4,
        faction: "town"
    },
    {
        name: "Deputy",
        value: 4,
        faction: "town"
    },
    {
        name: "Doctor",
        value: 4,
        faction: "town"
    },
    {
        name: "Investigator",
        value: 6,
        faction: "town"
    },
    {
        name: "Mayor",
        value: 8,
        faction: "town"
    },
    {
        name: "Medium",
        value: 3,
        faction: "town"
    },
    {
        name: "Sheriff",
        value: 7,
        faction: "town"
    },
    {
        name: "Survivor",
        value: 4,
        faction: "town"
    },
    {
        name: "Veteran",
        value: 3,
        faction: "town"
    },
    {
        name: "Vigilante",
        value: 5,
        faction: "town"
    },
    {
        name: "Townie",
        value: 1,
        faction: "town"
    },
    {
        name: "Peaceful Townie",
        value: -1,
        faction: "town"
    },
    {
        name: "Spiteful Townie",
        value: -1,
        faction: "town"
    },
    {
        name: "Politician",
        value: -2,
        faction: "town"
    },
    {
        name: "Godfather",
        value: -8,
        faction: "mafia"
    },
    {
        name: "Janitor",
        value: -8,
        faction: "mafia"
    },
    {
        name: "Mafioso",
        value: -6,
        faction: "mafia"
    },
    {
        name: "Consigliere",
        value: -10,
        faction: "mafia"
    },
    {
        name: "Blackmailer",
        value: -9,
        faction: "mafia"
    },
    {
        name: "Amnesiac",
        value: 0,
        faction: "neutral"
    },
    {
        name: "Executioner",
        value: -4,
        faction: "neutral"
    },
    {
        name: "Jester",
        value: -1,
        faction: "neutral"
    },
    {
        name: "Serial Killer",
        value: -8,
        faction: "neutral"
    },
    {
        name: "Werewolf",
        value: -9,
        faction: "neutral"
    },
    {
        name: "Witch",
        value: -5,
        faction: "neutral"
    }
]

export function GET(request: NextRequest) {
    const prompt = request.nextUrl.searchParams.get("prompt") ?? ""

    return Response.json(cards.filter((card) => card.name.toLowerCase().includes(prompt.toLowerCase())))
}