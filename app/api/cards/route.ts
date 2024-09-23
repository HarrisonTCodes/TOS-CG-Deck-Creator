import { NextRequest } from "next/server";

const cards = [
    {
        name: "bodyguard",
        value: 4
    },
    {
        name: "deputy",
        value: 4
    },
    {
        name: "doctor",
        value: 4
    },
    {
        name: "investigator",
        value: 6
    },
    {
        name: "mayor",
        value: 8
    },
    {
        name: "medium",
        value: 3
    },
    {
        name: "sheriff",
        value: 7
    },
    {
        name: "survivor",
        value: 4
    },
    {
        name: "veteran",
        value: 3
    },
    {
        name: "vigilante",
        value: 5
    },
    {
        name: "townie",
        value: 1
    },
    {
        name: "peaceful townie",
        value: -1
    },
    {
        name: "spiteful townie",
        value: -1
    },
    {
        name: "politician",
        value: -2
    },
    {
        name: "godfather",
        value: -8
    },
    {
        name: "janitor",
        value: -8
    },
    {
        name: "mafioso",
        value: -6
    },
    {
        name: "consigliere",
        value: -10
    },
    {
        name: "blackmailer",
        value: -9
    },
    {
        name: "amnesiac",
        value: 0
    },
    {
        name: "executioner",
        value: -4
    },
    {
        name: "jester",
        value: -1
    },
    {
        name: "serial killer",
        value: -8
    },
    {
        name: "werewolf",
        value: -9
    },
    {
        name: "witch",
        value: -5
    }
]

export function GET(request: NextRequest) {
    const prompt = request.nextUrl.searchParams.get("prompt") ?? ""

    return Response.json(cards.filter((card) => card.name.includes(prompt.toLowerCase())))
}