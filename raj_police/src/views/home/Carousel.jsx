import React, { useState, useEffect } from "react";
import "./home.css";
const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel">
            {images.map((item, index) => (
                <img
                    key={index}
                    src={item}
                    alt={`Image ${index}`}
                    className={index === currentImageIndex ? "active" : ""}
                />
            ))}
        </div>
    );
};

export default Carousel;
