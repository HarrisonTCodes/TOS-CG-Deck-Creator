import { NextRequest } from "next/server";

const cards = [
    {
        name: "bodyguard",
        value: 4,
        faction: "town"
    },
    {
        name: "deputy",
        value: 4,
        faction: "town"
    },
    {
        name: "doctor",
        value: 4,
        faction: "town"
    },
    {
        name: "investigator",
        value: 6,
        faction: "town"
    },
    {
        name: "mayor",
        value: 8,
        faction: "town"
    },
    {
        name: "medium",
        value: 3,
        faction: "town"
    },
    {
        name: "sheriff",
        value: 7,
        faction: "town"
    },
    {
        name: "survivor",
        value: 4,
        faction: "town"
    },
    {
        name: "veteran",
        value: 3,
        faction: "town"
    },
    {
        name: "vigilante",
        value: 5,
        faction: "town"
    },
    {
        name: "townie",
        value: 1,
        faction: "town"
    },
    {
        name: "peaceful townie",
        value: -1,
        faction: "town"
    },
    {
        name: "spiteful townie",
        value: -1,
        faction: "town"
    },
    {
        name: "politician",
        value: -2,
        faction: "town"
    },
    {
        name: "godfather",
        value: -8,
        faction: "mafia"
    },
    {
        name: "janitor",
        value: -8,
        faction: "mafia"
    },
    {
        name: "mafioso",
        value: -6,
        faction: "mafia"
    },
    {
        name: "consigliere",
        value: -10,
        faction: "mafia"
    },
    {
        name: "blackmailer",
        value: -9,
        faction: "mafia"
    },
    {
        name: "amnesiac",
        value: 0,
        faction: "neutral"
    },
    {
        name: "executioner",
        value: -4,
        faction: "neutral"
    },
    {
        name: "jester",
        value: -1,
        faction: "neutral"
    },
    {
        name: "serial killer",
        value: -8,
        faction: "neutral"
    },
    {
        name: "werewolf",
        value: -9,
        faction: "neutral"
    },
    {
        name: "witch",
        value: -5,
        faction: "neutral"
    }
]

export function GET(request: NextRequest) {
    const prompt = request.nextUrl.searchParams.get("prompt") ?? ""

    return Response.json(cards.filter((card) => card.name.includes(prompt.toLowerCase())))
}