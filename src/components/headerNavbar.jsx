'use client'
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import MenuSidebar from "./menuSidebar";
import { useRouter } from "next/navigation";

export default function HeaderNavbar() {
    const router = useRouter();
    return (
        <div className="w-full p-4 flex flex-col md:flex-row justify-around item-center static">           
            <div className="grid grid-cols-3">
                <MenuSidebar/>                
                <div className="p-2 min-w-40 col-span-2">
                    <span onClick={() => router.push("/")} className="relative inline-block cursor-pointer before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-sky-500">
                        <span className="relative text-white dark:text-gray-950">Dawai Ki Dukaan</span>
                    </span>
                </div>
            </div>
            {/* Searchbar */}
            <div className=" md:w-1/3 mt-2 md:mt-0 flex gorw items-center border border-gray-600 rounded-3xl bg-white px-4 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <CiSearch size={24} />
                <input
                    id="price"
                    name="price"
                    type="search"
                    placeholder="Search by Concern, Product or Brand (Example Acne, Weight Loss etc)"
                    className="block min-w-0 grow py-2 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />               
            </div>
            {/* menu */}
            <div className="invisible md:visible flex justify-between gap-4 item-center">
                <HiOutlineUserCircle size={32} />
                <MdOutlineFavoriteBorder size={32} />
                <IoCartOutline size={32} />
            </div>
        </div>
    )
}