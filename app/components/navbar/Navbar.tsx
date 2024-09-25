"use client";
import Link from "next/link";
import { FaGithub, FaInfoCircle } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="w-full border-b-2 p-4 flex justify-between items-center z-10 bg-yellow-900">
            <h1 className="text-2xl text-white font-medium">TOS Deck Creator</h1>
            <section className="flex gap-4">
                <Link href={"https://github.com/HarrisonTCodes"} title="Github">
                    <FaGithub size={32} color="ffffff" className="text-white" />
                </Link>
                <Link href={"https://town-of-salem.fandom.com/wiki/Town_of_Salem_Card_Game"} title="Info on game">
                    <FaInfoCircle size={32} color="ffffff" className="text-white" />
                </Link>
            </section>
        </nav>
    )
}