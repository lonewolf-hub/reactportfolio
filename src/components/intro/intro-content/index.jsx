import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.jpg";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Alisha Priyadarshni</span>
                    </h1>
                    <p className="title">
                    Welcome to my portfolio website! I'm Alisha Priyadarshni, a BCA graduate with a relentless passion for web development. Through my journey in computer applications, I've cultivated a unique blend of technical prowess and creative flair. Join me as I take you through my ventures in crafting immersive web experiences.
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Hello i am Alisha Priyadarshni"

                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Internship Project</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>ReactJs</span>
                            Frontend-Developer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
