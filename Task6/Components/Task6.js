import React from 'react';
import Img from '../Images/data scientist.png';
import Img1 from '../Images/IoT-3.avif';

import Img3 from '../Images/programmer-using-ai.jpg';
import Img4 from '../Images/full-stack-web-developer.png';
import Img5 from '../Images/image_870x_6629e1ffb806c.jpg';
import Img6 from '../Images/What-is-Frontend-Development.jpg';
import Img7 from '../Images/Concise-Software-Backend-developer-skills-1024x682.webp';
import Img8 from '../Images/web-developer-interview-questions-and-answers.jpg';
import Img9 from '../Images/maxresdefault.jpg';
function App() {
  return (
    <div className="container">
      <h1>Learn 4.0 Technologies</h1>
      <p>Get trained by alumni of IITs and top companies like Amazon, Microsoft, Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved in Product Development.</p>
      <div className="cards">
        <div className="card" style={{borderTop:" 10px purple Solid"}}>
          <h2>Data Scientist</h2>
          <p>Data scientists gather and analyze large sets of structured and unstructured data</p>
          <img src={Img} alt="Data Scientist" />
        </div>
        <div className="card"style={{borderTop:" 10px red Solid"}}>
          <h2>IoT Developer</h2>
          <p>IoT Developers are professionals who can develop, manage, and monitor IoT devices.</p>
          <img src={Img1} alt="IoT Developer" />
        </div>
   
        <div className="card" style={{borderTop:" 10px grey Solid"}}>
          <h2>ML Engineer</h2>
          <p>Machine learning engineers feed data into models defined by data scientists.</p>
          <img src={Img3} alt="ML Engineer" />
        </div>
        <div className="card" style={{borderTop:" 10px brown Solid"}}>
          <h2>Fullstack Developer</h2>
          <p>Full stack development is the process of developing both frontend and backend.</p>
          <img src={Img4} alt="" />
        </div>
        <div className="card" style={{borderTop:" 10px yellow Solid"}}>
          <h2>Data Analyst</h2>
          <p>A data analyst is a data to identify key the ways data can be used to solve problems.</p> 
          <img src={Img5} alt="IoT Developer" />
        </div>
        <div className="card" style={{borderTop:" 10px orange Solid"}}>
          <h2>Frontend Developer</h2>
          <p>A Front-End Developer is someone who creates websites and web applications. </p>
          <img src={Img6} alt="VR Developer" />
        </div>
        <div className="card" style={{borderTop:" 10px green Solid"}}>
          <h2>Backend Developer</h2>
          <p>A back-end developer writes code that forms the backbone of a website or app. </p>
          <img src={Img7} alt="ML Engineer" />
        </div>
        <div className="card" style={{borderTop:" 10px blue Solid"}}>
          <h2>Web Developer</h2>
          <p>Web developers create functional, user-friendly websites and web applications.</p>
          <img src={Img8} alt="Data Scientist" />
        </div>
        <div className="card" style={{borderTop:" 10px black Solid"}}>
          <h2>Ui/Ux Designer</h2>
          <p>UX (user experience) and UI (user interface) are two interdependent terms.</p>
          <img src={Img9} alt="IoT Developer" />
        </div>
       
      </div>
    </div>
  );
}

export default App;