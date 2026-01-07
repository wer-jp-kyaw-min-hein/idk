// "use client";

// import Image from "next/image";
// import Link from "next/link";

// type HeroProps = {
//     title?: string;
//     subtitle?: string;
//     primaryCtaText?: string;
//     primaryCtaHref?: string;
//     secondaryCtaText?: string;
//     secondaryCtaHref?: string;
//     // imageSrc?: string;
// };

// export default function Hero({
//     title = "LION MART",
//     subtitle = "Fresh & Delicious groceries delivered to your door",
//     primaryCtaText = "Shop Now",
//     primaryCtaHref = "/products",
//     secondaryCtaText = "Browse Categories",
//     secondaryCtaHref = "/categories",
//     // imageSrc = "/hero.jpg", // put a banner image in/public/hero.jpg
// }: HeroProps) {
//     return (
//         <section className="w-full bg-white py-12">
//             <div className="mx-auto max-w-7xl px-4">
//                 <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">

//                 {/* LEFT: Poster */}
//                 <div className="flex justify-center">
//                     <div className="rounded-2xl shadow-xl overflow-hidden">
//                         <Image
//                         src="/promo-8000.jpg"
//                         alt="Lion Mart Promotion"
//                         width={420}
//                         height={600}
//                         className="object-cover"
//                         priority
//                         />
//                         </div>
//                         </div>  

//                 {/* RIGHT: Hero Banner */}
//                 <div className="text-left">
//                     <p className="text-sm font-semibold text-gray-600 mb-2">
//                         ¥8000以上のご注文で <span className="text-red-600">FREE</span>
//                     </p>

//                     <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
//                         Lion Mart 配送キャンペーン
//                     </h1>

//                     <div className="space-y-3 text-sm leading-relaxed text-red-700">
//                         <p>
//                             Lion Mart のオンラインストアでは、¥3,000〜¥8,000 の
//                             ご注文で地域別配送料が適用されます。
//                         </p>

//                         <p>
//                         ¥8,000以上のご注文で送料無料。
//                         足立区竹の塚周辺（5km）対象。
//                         </p>

//                         <p>
//                         COD 手数料 ¥500。沖縄・離島は対象外。
//                         </p>

//                         <p className="text-xs text-gray-500 mt-4">
//                             * Terms & Conditions apply
//                         </p>
//                     </div>
//                 </div>
//                 </div>
//                 {/* Background Image */}
//             {/* <div className="relative h-[260px] sm:h [360px] md:h-[460px] w-full"> */}
//                 {/* <Image
//                     src={imageSrc}
//                     alt="Hero banner"
//                     fill
//                     priority
//                     className="object-cover"
//                 /> */}
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/30" />
//                 </div>

//                 {/* Content */}
//                 <div className="absolute inset-0 flex items-center">
//                     <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
//                         <div className="max-w-xl rounded-2xl bg-white/85 p-6 backdrop-blur sm:p-8 shadow">
//                         <p className="text-xs font-semibold tracking-widest text-gray-600">
//                         TOKYO • GROCERY STORE 
//                             </p>
                            
//                             <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                                 {title}</h1>
                                
//                                 <p className="mt-3 text-sm text-gray-700 sm:text-base">
//                                     {subtitle}
//                                 </p>
                                
//                                 <div className="mt-6 flex flex-wrap gap-3">
//                                     <Link
//                                         href={primaryCtaHref}
//                                         className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
//                                         >
//                                             {primaryCtaText}
//                                     </Link>

//                                     <Link
//                                         href={secondaryCtaHref}
//                                         className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
//                                             {secondaryCtaText}
//                                         </Link>
//                                             </div>
                                            
//                                             {/* Optional small info row */}
//                                             <div className="mt-5 text-xs text-gray-600">
//                                                 Free delivery for orders over ¥8,000 (example)
//                                             </div>
//                                             </div>
//                     </div>
//                 </div>
//                 {/* </div> */}
//         </section>
//     );
// }

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
};

export default function Hero({
title = "LION MART",
subtitle = "Fresh & Delicious groceries delivered to your door",
primaryCtaText = "Shop Now",
primaryCtaHref = "/products",
secondaryCtaText = "Browse Categories",
secondaryCtaHref = "/categories",
}: HeroProps) {
return (
<section className="w-full bg-white py-12">
<div className="mx-auto max-w-7xl px-4 sm😛x-6">

<div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">

{/* LEFT: Poster */}
<div className="flex justify-center">
<div className="overflow-hidden rounded-2xl shadow-xl">
<Image
src="/promo-8000.jpg"
alt="Lion Mart Promotion"
width={420}
height={600}
className="object-cover"
priority
/>
</div>
</div>

{/* RIGHT: Content */}
<div className="text-left">
<p className="text-sm font-semibold text-gray-600 mb-2">
¥8000以上のご注文で{" "}
<span className="text-red-600">FREE</span>
</p>

<h1 className="text-3xl font-extrabold text-gray-900 mb-4">
Lion Mart 配送キャンペーン
</h1>

<div className="space-y-3 text-sm leading-relaxed text-red-700">
<p>
Lion Mart のオンラインストアでは、¥3,000〜¥8,000 の
ご注文で地域別配送料が適用されます。
</p>

<p>
¥8,000以上のご注文で送料無料。
足立区竹の塚周辺（5km）対象。
</p>

<p>
COD 手数料 ¥500。沖縄・離島は対象外。
</p>

<p className="text-xs text-gray-500 mt-4">
* Terms & Conditions apply
</p>
</div>

{/* CTA Buttons */}
<div className="mt-6 flex flex-wrap gap-3">
<Link
href={primaryCtaHref}
className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
>
{primaryCtaText}
</Link>

<Link
href={secondaryCtaHref}
className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
>
{secondaryCtaText}
</Link>
</div>

<div className="mt-4 text-xs text-gray-600">
Free delivery for orders over ¥8,000 (example)
</div>
</div>
</div>
</div>
</section>
);
}



