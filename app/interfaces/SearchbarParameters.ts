import { CardParameters } from "./CardParameters"

export interface SearchbarParameters {
    label?: string
    valueState: string
    setValueState: (value: string) => void
    setMatchingState: (value: CardParameters[]) => void
    setFocusState: (value: boolean) => void
}