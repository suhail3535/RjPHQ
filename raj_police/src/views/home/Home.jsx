import React from "react";
import { images } from "../../utils/data";
import Carousel from "./Carousel";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Home = () => {
    console.log(images);

    return (
        <div className="carosal_div_container">
            <Carousel images={images} />
            <div className="card_div">
                <div>
                    <FaArrowUpRightFromSquare />
                    <span>Crime Analytics</span>
                    <button>Open</button>
                </div>
                <div>
                    <FaArrowUpRightFromSquare />
                    <span>Crime Analytics</span>
                    <button style={{backgroundColor:"red"}}>Open</button>
                </div>
                <div>
                    <FaArrowUpRightFromSquare />
                    <span>Crime Analytics</span>
                    <button>Open</button>
                </div>
                <div>
                    <FaArrowUpRightFromSquare />
                    <span>Crime Analytics</span>
                    <button>Open</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
