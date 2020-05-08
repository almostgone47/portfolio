import React from 'react';
import profilePic from '../../images/profilePic.png';
import githubPic from '../../images/green-github.png';
import twitterPic from '../../images/green-twitter.png';
import emailPic from '../../images/green-email.png';


const About = () => {
    return (
        <div className="about-section">
            <div className="about-img-container">
                <img src={profilePic} alt="Jeremiah" id="profilePic" />
                <ul>
                    <li>
                        <a href="https://github.com/almostgone47" target="_blank" rel="noopener noreferrer">
                            <img src={githubPic} alt="GitHub icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/BarroJeremiah" target="_blank" rel="noopener noreferrer">
                            <img src={twitterPic} alt="Twitter icon" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:almostgone47@gmail.com">
                            <img src={emailPic} alt="Email icon" />
                        </a>
                    </li>
                </ul>
            </div>
            <div id="about-text">
                <h1>JEREMIAH BARRO</h1>
                <p className="lead">Fullstack JavaScript Developer </p>
                <p>I grew up in Juneau, Alaska and formerly owned and managed Hi 5 Hostel and David HasselHostel in Budapest, Hungary. I have a 16 year old beagle named Avery who has travelled with me through the US, most of Europe and SE Asia until we settled in Australia.</p>
                <p>Although the first programming language I started learning was C++ in university, it wasn't until I learned Ruby on Rails I found out how much I really enjoy coding. I love that there's always something new to learn and each project is like a puzzle waiting to be put together.</p> 
            </div>
        </div>
    )
}

export default About;