"use client";

import { CardParameters } from "@/app/interfaces/CardParameters";
import { SearchbarParameters } from "@/app/interfaces/SearchbarParameters";
import { ChangeEvent, useEffect } from "react";

export default function Searchbar({ label, valueState, setValueState, setMatchingState, setFocusState } : SearchbarParameters) {
    function getCardsFromPrompt(prompt: string) {
        fetch(`/api/cards?prompt=${prompt}`)
        .then(response => response.json())
        .then((cards: CardParameters[]) => {
            setMatchingState(cards)
        })
    }

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        const searchPrompt = event.target.value
        setValueState(searchPrompt)
        /* Only search on every 2 character changes and when prompt is less than 4 characters, or prompt is reset.
           This is to try and reduce calls to the API and improve efficiency */
        if ((searchPrompt.length % 2 != 0 && searchPrompt.length < 4) || searchPrompt.length == 0) {
            getCardsFromPrompt(searchPrompt)
        }
    }

    // Initialise matching data
    useEffect(() => {
        getCardsFromPrompt("")
    }, [])

    return (
        <input
            type="text"
            placeholder={label}
            className="border-2 border-gray-400 focus:border-amber-700 focus:outline-none text-lg rounded-xl w-[90%] max-w-[500px] p-2"
            onChange={onChange}
            value={valueState}
            onFocus={() => setFocusState(true)}
            onBlur={() => setFocusState(false)}
        />
    )
}