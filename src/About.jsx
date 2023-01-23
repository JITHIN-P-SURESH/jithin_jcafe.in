import React from "react";
import Common from "./Common";
// import web from "../src/images/img9.jpg"
const About = () =>{
    return( 
        <>
            <Common 
            name='Welcome to-'
            // imgsrc={web} 
            dis='We are also a big favorite amongst individuals who are looking for a tasty alternative to formulaic fast food.'
            visit="/contact" 
            btname="Contact Us" />
        </>
    );
};
export default About;