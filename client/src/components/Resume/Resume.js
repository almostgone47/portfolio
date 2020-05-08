 import React from 'react';

import '../main.css';

const Resume = () => {
    return (
        <div className="Resume">
            <h1 className="display-4">Resume</h1>
            <div className="col-md-8">
                <div className="card mb-5">
                    <div className="card-body">
                        <div className="ResumeHeader">      
                            <div>
                                <h2>Jeremiah Barro</h2>
                                <h3>Software Developer</h3>
                                <h5>U.S. Secret Security Clearance</h5>
                            </div>
                            <div className="ResumeHeaderColumn2">
                                <p><a href="www.linkedin.com/in/jeremiah-barro">linkedin.com/in/jeremiah-barro</a></p>
                                <p><a href="www.github.com/almostgone47">github.com/almostgone47</a></p>
                                <p>jeremiah@hostelprofessional.com</p>
                            </div>
                        </div>
                        <div className="ResumeBody">
                            <div>
                                <h4 className="card-title">Summary</h4>
                                <ul>
                                    <li>Ambitious developer with experience working in the complete SDLC from, design, documentation, development and unit testing of applications</li>
                                    <li>Motivated to produce performant and robust software; highly passionate about programming</li>
                                    <li>Experienced working in the complete SDLC including creating, design, documentation, development and unit testing of Ruby and JS applications</li>
                                    <li>Competent in the use of Functional Driven JavaScript in SPAs, React, UI Components, Mobile web and Performance optimization</li>
                                    <li>Experienced in developing web apps by following the MVC Architecture using Ruby on Rails and JavaScript</li>
                                    <li>Proficient configuring and using front-end development tools such as Babel, Webpack, NPM, etc</li>
                                </ul>      
                                <h4 className="card-title">Experience</h4>
                                <h5 className="card-title">Founder and Software Developer - <span  className="subtext">HostelProfessional.com</span></h5>
                                <ul>
                                    <li>Took a concept, from design, to development and implementation of a SAAS application that centralizes and simplifies business management, bookings, payments and finances for hostels and hotels</li>
                                    <li>Took a concept, from design, to development and implementation of a SAAS application that centralizes and simplifies business management, bookings, payments and finances for hostels and hotels</li>
                                    <li>Used responsive web application design with Media Queries and Bootstrap</li>
                                </ul>
                                <h5 className="card-title">Field Service Engineer - <span  className="subtext">Mantech International Corporation</span></h5>
                                <ul>
                                    <li>Installed, maintained, repaired communication devices, RF jammers, and mine detectors</li>
                                    <li>Repairs requiring knowledge of analog and digital electronic circuits, trouble-shooting and component replacement</li>
                                    <li>Actively adapted and modified communications systems and other electronic devices to integrate them and optimise their potential</li>
                                </ul>      
                                <h5 className="card-title">Telecommunications Supervisor - <span  className="subtext">United States Army</span></h5>
                                <ul>
                                    <li>Installed mobile networks of line-of-site and omni-directional antenna fields</li>
                                    <li>Ran and terminated fiber-optic cable, CAT 5 cable and phone lines</li>
                                    <li>Provided technical assistance by assessing bit error rates, isolating faults, and maintenance on radios and basebands, antennas, multiplexers and patch panels down to the circuit card assembly level</li>
                                </ul>      
                                <h4 className="card-title">Projects</h4>
                                <h5 className="card-title">Real Estate Website: System Design</h5>
                                <h5  className="subtext">Technologies: Node JS, PostgreSQL, New Relic, K6.io, AWS</h5>
                                <ul>
                                    <li>Scaled microservice to handle 1000+ RPS with 10M+ records of user data by deploying multiple Node/Express servers with AWS EC2 and Postgres</li>
                                    <li>Identified system bottlenecks with K6 and New Relic to implement optimizations increasing RPS</li>
                                </ul>
                                <h5 className="card-title">Hotel Booking Website: Developed and Implemented Ratings Module</h5>
                                <h5  className="subtext">Technologies: React, Node JS, MySQL, Jest/Enzyme, D3</h5>
                                <ul>
                                    <li>Using Figma designs developed ratings React module with Jest/Enzyme unit testing</li>
                                    <li>Rendered sortable, paginated reviews using React and Webpack bundled CSS to deliver modular UI/UX</li>
                                    <li>Identified slow read queries and indexed legacy MySQL database for faster data retrieval</li>
                                </ul>
                                <h5 className="card-title">Etsy Clone: Developed Front-End and Back-End</h5> <h5 className="subtext">Technologies: Ruby on Rails, Bootstrap, AWS, Stripe</h5>
                                <ul>
                                    <li>Used AWS S3 and Carrier Wave to store photos uploaded by users</li>
                                    <li>Implemented Devise and Omniauth for user authorization and authentication</li>
                                    <li>Integrated the Stripe payment gateway to handle user payments</li>
                                </ul>
                                <h5 className="card-title">Github Search App: Built React Front-End</h5>
                                <h5 className="subtext">Technologies: React, SCSS, Flexbox, Webpack</h5>
                                <ul>
                                    <li>Developed a Github Search App, implemented the Github API to find and search users</li>
                                    <li>Container components as the logic layer for the UI components</li>
                                    <li>Achieved APIs calls from back end Ruby on Rails using React Axios</li>
                                </ul>
                                <h4 className="card-title">Education</h4>
                                <h5 className="card-title">Hack Reactor, <span className="subtext-grey">Advanced Software Engineering Immersive – </span><span className="subtext">San Francisco, CA</span></h5>      
                                <h5 className="card-title">Next Academy, <span className="subtext-grey">Full-Stack Web Development – </span><span className="subtext">Kuala Lumpur, Malaysia</span></h5>      
                                <h5 className="card-title">Devry University,<span className="subtext-grey"> Bachelors of Science in Technical Management – </span><span className="subtext">Denver, CO</span>
                                </h5>
                            </div>
                        
                            <div className="ResumeSideBar">
                                <h4>Languages/<br />Frameworks</h4>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>React/Redux</li>
                                    <li>Vue.JS</li>
                                    <li>Node.JS</li>
                                    <li>Express.JS</li>
                                    <li>JQuery</li>
                                    <li>Ruby</li>
                                    <li>Sinatra</li>
                                    <li>Ruby on Rails</li>
                                </ul>
                                <h4>Technologies</h4>
                                <ul>
                                    <li>Next.JS</li>
                                    <li>D3</li>
                                    <li>AJAX</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>SCSS</li>
                                    <li>Redis</li>
                                    <li>New Relic</li>
                                    <li>Docker</li>
                                    <li>SQLite</li>
                                    <li>MySQL</li>
                                    <li>PostgreSQL</li>
                                    <li>MongoDB</li>
                                    <li>AWS</li>
                                    <li>Rspec</li>
                                    <li>Jasmine</li>
                                    <li>Mocha</li>
                                    <li>Jasmine</li>
                                    <li>Enzyme</li>
                                </ul>
                                <h4>Technologies</h4>
                                <ul>
                                    <li>Object Oriented Programming</li>
                                    <li>Design Patterns</li>
                                </ul>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;