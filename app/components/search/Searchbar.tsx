"use client";

import { Card } from "@/app/interfaces/Card";
import { SearchbarParameters } from "@/app/interfaces/SearchableParameters";
import { ChangeEvent, useEffect } from "react";

export default function Searchbar({ label, valueState, setValueState, setMatchingState, setFocusState } : SearchbarParameters) {
    function getCardsFromPrompt(prompt: string) {
        fetch(`/api/cards?prompt=${prompt}`)
        .then(response => response.json())
        .then((cards: Card[]) => {
            setMatchingState(cards)
        })
    }

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setValueState(event.target.value)
        /* TODO: Make this more efficient before production.
        This makes an API call every time the input value changes, which may be overkill
        */
        getCardsFromPrompt(event.target.value)
    }

    // Initialise matching data
    useEffect(() => {
        getCardsFromPrompt("")
    }, [])

    return (
        <input
            type="text"
            placeholder={label}
            className="border-2 border-gray-400 focus:border-blue-800 focus:outline-none text-lg rounded-xl w-[90%] max-w-[500px] p-2"
            onChange={onChange}
            value={valueState}
            onFocus={() => setFocusState(true)}
            onBlur={() => setFocusState(false)}
        />
    )
}