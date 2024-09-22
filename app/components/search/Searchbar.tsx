"use client";

export default function Searchbar({ label, valueState, setValueState } : {label?: string, valueState: string, setValueState: (value: string) => void}) {
    return (
        <input
            type="text"
            placeholder={label}
            className="border-2 border-gray-400 focus:border-blue-800 focus:outline-none text-lg rounded-xl w-[90%] max-w-[500px] p-2"
            onChange={(e) => setValueState(e.target.value)}
            value={valueState}
        />
    )
}