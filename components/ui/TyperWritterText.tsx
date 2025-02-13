"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        {
            text: "Tanzid",
            className: "text-blue-500 dark:text-purple uppercase"
        },
        {
            text: "Un",
            className: "uppercase",
        },
        {
            text: "Khalil",
            className: "uppercase",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center ">

            <TypewriterEffect words={words} />

        </div>
    );
}
