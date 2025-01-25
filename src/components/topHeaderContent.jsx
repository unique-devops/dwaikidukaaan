import Link from 'next/link'
import { CiLocationOn } from "react-icons/ci";
export default function TopHeaderContent(){
    return(
        <div className="w-full bg-[#ef7f1a] p-2 flex justify-end">
            <div className="w-64 text-white text-sm flex content-between justify-around">
                <Link href="/dashboard">About Us</Link>            
                <Link href="/dashboard">Brands</Link>            
                <Link href="/dashboard" className='flex'>
                    <CiLocationOn size={20}/>
                    Store Locator
                </Link>            
            </div>
        </div>
    )
}