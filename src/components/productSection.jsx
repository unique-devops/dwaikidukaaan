import Carousel from "./carousel";
import Image from "next/image";
import ProductCard from "./productCard";
export default function Products() {
    const images = [
        { src: 'health_supplements_banners_456x625_final_01.jpg', alt: 'Anomaly_Banners', width: 500, height: 300 },
        { src: 'cetaphil_banners_456x398__1.jpg', alt: 'Bellavita_Banners_942x836', width: 500, height: 300 },
        { src: 'app_store_button-01.jpg', alt: 'Boheco_Banners_02_942x836_1_', width: 500, height: 300 },
        { src: 'app_store_button-02.jpg', alt: 'Korean_Banners_942x836_', width: 500, height: 300 },
        { src: 'palmers_banners_456x398_-_02_2.jpg', alt: 'Minimalist_Banners_942x836_a', width: 500, height: 300 },
        { src: 'it022570_01.avif', alt: 'products', width: 500, height: 300 },
    ];
    const products = [
        { src: 'it022570_01.avif', alt: 'products', width: 500, height: 300 },
        { src: 'it022570_01.avif', alt: 'products', width: 500, height: 300 },
        { src: 'it022570_01.avif', alt: 'products', width: 500, height: 300 },
        { src: 'it022570_01.avif', alt: 'products', width: 500, height: 300 },
        { src: 'it022570_01.avif', alt: 'products', width: 500, height: 300 },
    ];



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 gap-4">
                    <Image
                        src={`/images/headerImage/${images[0].src}`}
                        alt={images[0].alt}
                        width={images[0].width}
                        height={images[0].height} />
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={`/images/headerImage/${images[2].src}`}
                            alt={images[2].alt}
                            width={images[2].width}
                            height={images[2].height} />
                        <Image
                            src={`/images/headerImage/${images[3].src}`}
                            alt={images[3].alt}
                            width={images[3].width}
                            height={images[3].height} />
                    </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4" >
                        <Image
                            src={`/images/headerImage/${images[1].src}`}
                            alt={images[1].alt}
                            width={images[1].width}
                            height={images[1].height} />

                        <Image
                            src={`/images/headerImage/${images[4].src}`}
                            alt={images[4].alt}
                            width={images[4].width}
                            height={images[4].height} />
                    </div>
                </div>
                <div className="w-full h-96 md:h-full">
                    <Carousel />
                </div>
            </div>

            <div className="w-full py-4 text-center font-bold text-3xl">-Featured Categories-</div>
            <div className="w-full py-4 text-center font-bold text-3xl">-Products-</div>
            <div className="grid grid-cols-2 md:grid-cols-3">
                {
                    products.map((prod,index)=>(
                        <ProductCard key={index} product={prod}/>
                    ))
                }
                
            </div>
        </div>
    )
}