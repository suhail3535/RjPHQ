import React from "react";
import { images } from "../../utils/data";
import Carousel from "./Carousel";
import { FiEye } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuUserCheck } from "react-icons/lu";
import "./home.css";

const Home = () => {
    console.log(images);

    return (
        <div className="carosal_div_container">
            <Carousel images={images} />
            <div className="card_div">
                <div className="card">
                    <FaArrowUpRightFromSquare className="arrow" />

                    <span>Crime Analytics</span>
                    <button id="btn">
                        Open <FiEye className="eye-icon" />
                    </button>
                </div>
                <div className="card">
                    <FaArrowUpRightFromSquare className="arrow" />

                    <span>Crime Analytics</span>
                    <button id="btn">
                        Open <FiEye className="eye-icon" />
                    </button>
                </div>
                <div className="card">
                    <LuUserCheck className="arrow" />

                    <span>Citizen Services And Information</span>
                    <button id="btn">
                        Open <FiEye className="eye-icon" />
                    </button>
                </div>
                <div className="card">
                    <FaArrowUpRightFromSquare className="arrow" />

                    <span>Crime Analytics</span>
                    <button id="btn">
                        Open <FiEye className="eye-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
