import { Card } from "./Card"

export interface SearchbarParameters {
    label?: string
    valueState: string
    setValueState: (value: string) => void
    setMatchingState: (value: Card[]) => void
}