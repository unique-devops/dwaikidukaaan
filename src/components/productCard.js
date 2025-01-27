import Image from "next/image";

export default function ProductCard({product}) {
    return (
        <div className="relative z-0">
            <div className="flex flex-col justify-center items-center p-2  " >
                <div></div>
                <Image
                    src={`/images/products/${product.src}`}
                    alt={product.alt}
                    width={product.width}
                    height={product.height} />
                <div className="font-bold text-gray-600 text-center">
                    Dr. Natural Activated Charcoal Citrus Soap, 946ml
                </div>
                <div className="font-bold text-yellow-600">₹799.00</div>
                <button className="rounded-2xl font-semibold bg-yellow-500 text-white py-1 px-4 hover:bg-red-400">Add To Cart</button>
            </div>
            {/* <div className="absolute inset-0 flex justify-center items-center z-1  hover:hidden hover:opacity-50 hover:bg-gray-200 ">
                                <button className="rounded-2xl font-semibold bg-white py-1 px-4 z-2">Add To Cart</button>
                            </div> */}
        </div>
    )
}