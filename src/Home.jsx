import React from "react";
// import web from "../src/images/img7.jpg"
import Common from "./Common";

const Home = () =>{
    return( 
        <>
            <Common  
            name='Enjoy your Day with-'
            // imgsrc={web} 
            dis='"Today’s good mood is sponsored by coffee"'
            visit="/service" 
            btname="Get Started" />
        </>
    );
};
export default Home;