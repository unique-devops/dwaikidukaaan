import Link from "next/link";

export default function CategoryNavbar(){
    return(
        <div className="bg-[#0b2127] text-white text-nowrap text-sm font-medium w-full flex justify-around md:justify-center flex-nowrap gap-6 py-2 overflow-x-auto">            
            <button>Bath, Body & Hair</button>           
            <button>Dermocosmetics</button>           
            <button>Naturals</button>           
            <button>Nutraceuticals & Supplements</button>           
            <button>Mom & Baby</button>           
            <button>Grooming</button>           
            <button>Rehab & Pain Management</button>           
            <button>More Categories</button>           
            <button>Noble Selects</button>           
            <button>Shop By Concern</button>             
        </div>
    )
}