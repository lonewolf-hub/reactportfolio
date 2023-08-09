import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Alisha Priyadarshni"
                    date="July 20 2023"
                    image={Blog1}
                    title="How to Use Github To Boost Your Efficiency"
                    description="Github becomes a very powerfull tools for the developer for enhancing their code quality and better code optimization."
                />
                <BlogCard
                    user="Alisha Priyadarshni"
                    date="July 20 2023"
                    image={Blog2}
                    title="Single Page Application as a Website"
                    description="Single Page Application are grabing the web development market very fastly."
                />
                <BlogCard
                    user="Alisha Priyadarshni"
                    date="July 20 2023"
                    image={Blog3}
                    title="Next-js a fullstack framework"
                    description="Next-js is another framework on Javascript that is becoming very popular."
                />
            </div>
        </Section>
    );
};

export default Blogs;
