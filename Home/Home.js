import React from "react";
import Img from '../Images/MI.png';
import moon from "../Images/rcb.webp";

function Home(){
return(

    <>
  
  <div className="Container">
    <div className="insideCard">
        <h1>INDIAN SUPER LEAGUE</h1>
      <img src={Img} className="sarath"/>
      <img src={moon} className="monish"/>
    </div>
  </div>

    </>
)

}
export default Home;