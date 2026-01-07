"use client";

import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    name: "MyatNu အိမ်ချက်အစားအစာ",
    slug: "myatnu",
    image: "/collections/myatnu.png",
  },
  {
    name: "Vegetables and Fruits",
    slug: "vegetables-fruits",
    image: "/collections/vegetables.png",
  },
  {
    name: "Seafood",
    slug: "seafood",
    image: "/collections/seafood.png",
  },
  {
    name: "Meat",
    slug: "meat",
    image: "/collections/meat.png",
  },
  {
    name: "Beverages",
    slug: "beverages",
    image: "/collections/beverages.png",
  },
  {
    name: "Signature of Lion",
    slug: "signature",
    image: "/collections/signature.png",
  },
  {
    name: "Seasoning Products",
    slug: "seasoning",
    image: "/collections/seasoning.png",
  },
  {
    name: "Sweets & Snacks",
    slug: "sweets-snacks",
    image: "/collections/snacks.png",
  },
];

export default function Collections() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Section title */}
        <h2 className="mb-8 text-xl font-semibold text-red-700">
          Collections
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <Link
              key={item.slug}
              href={`/collections/${item.slug}`}
              className="group rounded-2xl border border-red-600 p-6 transition hover:bg-red-50"
            >
              <div className="flex flex-col items-center text-center">
                
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="mb-4 object-contain"
                />

                {/* Name */}
                <p className="text-sm font-medium text-red-700">
                  {item.name} <span className="ml-1">→</span>
                </p>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
