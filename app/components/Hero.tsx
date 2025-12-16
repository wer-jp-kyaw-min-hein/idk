"use client";

import Image from "next/image";
import Link from "next/link";

type HeroProps = {
    title?: string;
    subtitle?: string;
    primaryCtaText?: string;
    primaryCtaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    imageSrc?: string;
};

export default function Hero({
    title = "LION MART",
    subtitle = "Fresh & Delicious groceries delivered to your door",
    primaryCtaText = "Shop Now",
    primaryCtaHref = "/products",
    secondaryCtaText = "Browse Categories",
    secondaryCtaHref = "/categories",
    imageSrc = "/hero.jpg", // put a banner image in/public/hero.jpg
}: HeroProps) {
    return (
        <section className="w-full">
            <div className="relative w-full overflow-hidden">
                {/* Background Image */}
            <div className="relative h-[260px] sm:h [360px] md:h-[460px] w-full">
                <Image
                    src={imageSrc}
                    alt="Hero banner"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                        <div className="max-w-xl rounded-2xl bg-white/85 p-6 backdrop-blur sm:p-8 shadow">
                        <p className="text-xs font-semibold tracking-widest text-gray-600">
                        TOKYO • GROCERY STORE 
                            </p>
                            
                            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                {title}</h1>
                                
                                <p className="mt-3 text-sm text-gray-700 sm:text-base">
                                    {subtitle}
                                </p>
                                
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link
                                        href={primaryCtaHref}
                                        className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                                        >
                                            {primaryCtaText}
                                    </Link>

                                    <Link
                                        href={secondaryCtaHref}
                                        className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                            {secondaryCtaText}
                                        </Link>
                                            </div>
                                            
                                            {/* Optional small info row */}
                                            <div className="mt-5 text-xs text-gray-600">
                                                Free delivery for orders over ¥8,000 (example)
                                            </div>
                                            </div>
                    </div>
                </div>
                </div>
        </section>
    );
}





