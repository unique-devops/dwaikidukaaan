
import Products from "@/components/productSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300 grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">      
       <Products/>
    </div>
  );
}
