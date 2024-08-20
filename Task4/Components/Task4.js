import React from "react";
import Img from '../Images/Error-512.webp';
import Img1 from '../Images/0046858a53f178485033b1dc73e40d2e.png';
import Img2 from '../Images/images.png';
import Img3 from '../Images/images1.jpeg';
function Task4(){
return(

    <>
  
  <div className="Container">
    <div className="insideCard">
        <h1>Notifications</h1>
<h2><img src={Img3} className="demo"/>Information Message </h2>
<h3><img src={Img2} className="krithish"/>Success Message</h3>
<h4><img src={Img1} className="monish"/>Warning Message</h4>
<h5><img src={Img} className="sarath"/>Error Message</h5>


    </div>
  </div>

    </>
)

}
export default Task4;