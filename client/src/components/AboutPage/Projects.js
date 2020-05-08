import React from 'react';
import yelpPic from '../../images/yelpClone.png';
import EtsyPic from '../../images/etsyClone.png';
import githubPic from '../../images/gub.png';
import hpPic from '../../images/hp-landing.png';
import reviewPic from '../../images/review-module.png';


const Projects = () => {
    return (
        <div id="projects" className="section">
            <h2>My Projects</h2>
            <div className="card-columns">
                <div className="card">
                    <div className="card-image">
                        <a href="https://enigmatic-wave-73537.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="img-a">
                            <img className="card-img-top" src={yelpPic} alt="YelpClone" />
                        </a>
                    </div>
                    <div className="card-body">
                        <a href="https://enigmatic-wave-73537.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <h5 className="card-title">Yelp Clone</h5>
                        </a>
                        <p className="card-text">Create listings for restaurants. Leave star ratings write reviews. Search for and read reviews left by otheres. Used the JQuery Star Raty for star ratings, AWS S3 and Carrier Wave for saving photos. Devise and Omniauth for login. And used Google maps API for address mapping.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <a href="https://enigmatic-wave-73537.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="img-a">
                            <img className="card-img-top" src={EtsyPic} alt="Etsy Clone Pic" />
                        </a>
                    </div>
                    <div className="card-body"><a href="https://enigmatic-wave-73537.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h5 className="card-title">Etsy Clone</h5>
                        </a>
                        <p className="card-text">List or buy items for sale. Track and manage your Etsy sales. Used Bootstrap for the front end. Carrierwave-AWS S3 for image storage. Integrated with Stripe payment gateway to take payments.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <a href="https://hostelprofessional.com/" className="img-a" target="_blank" rel="noopener noreferrer">
                            <img className="card-img-top" src={hpPic} alt="HostelProfessional Landing Page" id="hp-landing-img" />
                        </a>
                    </div>
                    <div className="card-body">
                        <a href="https://hostelprofessional.com/" target="_blank" rel="noopener noreferrer">
                            <h5 className="card-title">HostelProfessional</h5>
                        </a>
                        <p className="card-text">Starting from concept, I built a full scale app using PHP Laravel, Vue JS, and JavaScript. The website is still in production and a project that I continue to improve.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <a href="https://gentle-thicket-41849.herokuapp.com/" className="img-a" target="_blank" rel="noopener noreferrer">
                            <img className="card-img-top" src={githubPic} alt="GitHub Search App Pic" />
                        </a>
                    </div>
                    <div className="card-body">
                        <a href="https://mighty-brushlands-14214.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <h5 className="card-title">Github Search React App</h5>
                        </a>
                        <p className="card-text">This project is done using React and the Github API to find users by their username.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        // eslint-disable-next-line
                        <a href="#" className="img-a" target="_blank" rel="noopener noreferrer">
                            <img className="card-img-top" src={reviewPic} alt="Hotel Ratings Module Pic" />
                        </a>
                    </div>
                    <div className="card-body">
                        // eslint-disable-next-line
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <h5 className="card-title">Hotel Booking Website, Review Module</h5>
                        </a>
                        <p className="card-text">Review and rating module I designed and developed using React, Express, Node, MySQL and D3. </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects;