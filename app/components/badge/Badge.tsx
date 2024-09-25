import { ReactElement } from "react";

export default function Badge({ label } : { label: string }) {
    return (
        <div className="p-2 rounded-xl bg-yellow-900 text-white text-center font-medium min-w-36">
            {label}
        </div>
    )
}