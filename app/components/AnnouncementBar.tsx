"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AnnouncementBar() {
    const messages = [
        "Get FREE DELIVERY 🚚 for Order amount Over ¥8,000→",
        "မှန်ကန်သော အော်ဒါအတွက် FREE ¥8,000 ပို့ဆောင်ခ→",
    ];

    const [index, setIndex] = useState(0);

    return (
        <div className="bg-[#8B1E1E] text-white text-xs sm:text-sm py-2 px-10 flex items-center justify-between relative">
            <button
                onClick={() => setIndex((index - 1 + messages.length) % messages.length)}>
                <ChevronLeft size={18} />
            </button>

            <p className="text-center font-medium flex-1 mx-4 whitespace-nowrap">
                {messages[index]}
            </p>

            <div className="flex items-center gap-4">
            <button
                onClick={() => setIndex((index + 1) % messages.length)}>
                <ChevronRight size={20} />
            </button>

            <select className="bg-transparent border border-white text-white text-xs sm:text-sm py-1 px-2 rounded cursor-pointer hover:opacity-80">
                <option value="en">EN</option>
                <option value="my">MY</option>
            </select>
        </div>
        </div>
    );
}