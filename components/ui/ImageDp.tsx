"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

export function ImageDp() {
    return (
        <div>
            <BackgroundGradient animate={true} className="">
                <img
                    src={`/images/tanzid.jpg`}
                    alt="jordans"
                    className="object-contain rounded-full h-[200] w-[200] lg:h-[300] lg:w-[300]"
                />
            </BackgroundGradient>
        </div>
    );
}
