// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-blue-600 text-white text-sm py-2 flex items-center justify-center">
//       <span className="font-medium tracking-wide">
//       Get FREE DELIVERY 🚚 for Order amount Over ¥8,000
//       </span>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, ChevronDown, Menu, X, } from "lucide-react";
import { GiChicken, GiFrozenBlock, GiRiceCooker, GiSodaCan } from "react-icons/gi";
import { MdFastfood, MdSoupKitchen } from "react-icons/md";

const categories = [
  { name: "Rice & Grains", icon: <GiRiceCooker /> },
  { name: "Drinks", icon: <GiSodaCan /> },
  { name: "Snacks", icon: <MdFastfood /> },
  { name: "Seasonings", icon: <MdFastfood /> },
  { name: "Instant Food", icon: <GiChicken /> },
  { name: "Frozen Food", icon: <GiFrozenBlock /> },
];

export default function Navbar() {
  const [openMenu, setMenuOpen] = useState(false);
  const [openDropdown, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white text-[#8B1E1E] border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Mobile Menu Button */}
        <button
        className="md:hidden"
        onClick={() => setMenuOpen(!openMenu)}
        >
          {openMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left - Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/" className="hover:opacity-70">Home</Link>

          {/* Categories Dropdown */}
          <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:opacity-70">
              Categories <ChevronDown size={16} />
            </button>

            {/* Dropdown */}
            {openDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md border rounded-md z-50">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {category}
                  </Link>
                ))}
          </div>
            )}
          </div>

          <Link href="/about" className="hover:opacity-70">About Lion</Link>
          </div>

          {/* Center - Logo */}
          <Link href="/" className="text-2xl font-bold">
          🦁
          </Link>
          
          {/* Right - Icons */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-1 cursor-pointer hover:opacity-70">
              <span>EN</span>
              <ChevronDown size={16} />
              </div>
            <Search size={20} className="cursor-pointer hover:opacity-70" />
            <User size={20} className="cursor-pointer hover:opacity-70" />
            <ShoppingBag size={20} className="cursor-pointer hover:opacity-70" />
          </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slide-down">

        
          <Link href="/" className="hover:opacity-70">Home</Link>

          <div className="flex flex-col">
            <span className="font-medium mb-1">Categories</span>
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/ & /g, "-")}`}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>

          <Link href="/about" className="hover:opacity-70">About Lion</Link>

          <span className="text-sm font-medium pt-2 cursor-pointer">Language:
            EN </span>
        </div>
  )}
    </nav>
  );
}