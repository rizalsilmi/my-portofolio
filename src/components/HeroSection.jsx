import React from "react";
import './HeroSection.css';
import { Typewriter } from 'react-simple-typewriter';


function HeroSection() {
    return (
      <section id="about" className="home-section">
        <div className="container">
          <div className="home-left">
            <h2>Hello,</h2>
            <h1>I’m <span>Rizal Athallah Silmi</span></h1>
            <h2 className="typed-text">
              <Typewriter
                words={[
                  "Software Quality Assurance Engineer 💻",
                  // "Automation Tester (Java/Python) 🔍",
                  // "Future Fullstack Developer 🚀",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>


          <div className="home-right">
            <img src="/profile2.png" alt="Your profile" className="profile-img" />
          </div>
        </div>
      </section>  
    );
}

export default HeroSection;