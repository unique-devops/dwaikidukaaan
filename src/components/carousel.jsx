'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react';


const images = [
    { src: 'Anomaly_Banners_942x836_1_.jpg', alt: 'Anomaly_Banners', width: 500, height: 300 },
    { src: 'Bellavita_Banners_942x836_-_02.jpg', alt: 'Bellavita_Banners_942x836', width: 500, height: 300 },
    { src: 'Boheco_Banners_02_942x836_1_.jpg', alt: 'Boheco_Banners_02_942x836_1_', width: 500, height: 300 },
    { src: 'Korean_Banners_942x836_.jpg', alt: 'Korean_Banners_942x836_', width: 500, height: 300 },
    { src: 'Minimalist_Banners_942x836_a.jpg', alt: 'Minimalist_Banners_942x836_a', width: 500, height: 300 },
    { src: 'Tru_Diagno_Banners_942x836_.png', alt: 'Tru_Diagno_Banners_942x836_', width: 500, height: 300 },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
    return (
        <div className="relative h-full justify-center item-center rounded-lg">
            <Image
                    src={`/images/carousel/${images[currentIndex].src}`}
                    alt={images[currentIndex].alt}
                    width={images[currentIndex].width} // Adjust size as needed
                    height={images[currentIndex].height} // Adjust size as needed
                    objectFit="cover"
                    className="absolute block h-full w-full duration-700 ease-in-out" />
                     {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-200"
            >
                &#10094;
            </button>
            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-200"
            >
                &#10095;
            </button>
           
        </div>
    );
};


export default Carousel;