import { NextRequest } from "next/server";

const cardData = {
    "bodyguard": 4,
    "deputy": 4,
    "doctor": 4,
    "investigator": 6,
    "mayor": 8,
    "medium": 3,
    "sheriff": 7,
    "survivor": 4,
    "veteran": 3,
    "vigilante": 5,
    "townie": 1,
    "peaceful townie": -1,
    "spiteful townie": -1,
    "politician": -2,
    "godfather": -8,
    "janitor": -8,
    "mafioso": -6,
    "consigliere": -10,
    "blackmailer": -9,
    "amnesiac": 0,
    "executioner": -4,
    "jester": -1,
    "serial killer": -8,
    "werewolf": -9,
    "witch": -5
}

export function GET(request: NextRequest) {
    const prompt = request.nextUrl.searchParams.get("prompt") ?? ""

    return Response.json(
        Object.keys(cardData)
            .filter(key => key.includes(prompt))
            .reduce((res: any, key: string) => (res[key] = cardData[key as keyof typeof cardData], res), {})
    )
}