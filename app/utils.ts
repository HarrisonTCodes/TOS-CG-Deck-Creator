export function getColor(faction: "town" | "mafia" | "neutral") {
    if (faction == "town") {
        return "green"
    } else if (faction == "mafia") {
        return "red"
    } else {
        return "stone"
    }
}

export function getValueString(value: number) {
    if (value > 0) {
        return `+${value}`
    } else {
        return value.toString()
    }
}