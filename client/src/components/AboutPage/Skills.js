import React from 'react';
import rubyPic from '../../images/rubyonrailsLogo.png';
import nodePic from '../../images/node.png';
import reactPic from '../../images/react1.png';
import jsPic from '../../images/javascriptpng.jpg';
import htmlPic from '../../images/html.png';
import cssPic from '../../images/csspng.jpg';
import gitPic from '../../images/git.png';
import bsPic from '../../images/bootstrap.png';
import wpPic from '../../images/wordpress.png';
import postgresPic from '../../images/postgres.png';
import mongoPic from '../../images/mongoDb.png';
import mysqlPic from '../../images/mysql.png';

const Skills = () => {
    return (
        <div className="section" id="skills">
            <h2>My Skills</h2>
            <div className="img-row">
                <div className="img-with-label">
                    <img src={rubyPic} alt="Ruby on Rails logo" />
                    <h5>Ruby on Rails</h5>
                </div>
                <div className="img-with-label">
                    <img src={nodePic} alt="Node Logo" />
                    <h5>Node JS</h5>
                </div>
                <div className="img-with-label">
                    <img src={reactPic} id="react-img" alt="React Logo" />
                    <h5>React JS</h5>
                </div>
            </div>
            <div className="img-row">
                <div className="img-with-label">
                    <img src={mongoPic} alt="CSS3" />
                    <h5>MongoDB</h5>
                </div>
                <div className="img-with-label">
                    <img src={postgresPic} alt="HTML5" />
                    <h5>PostgreSQL</h5>
                </div>
                <div className="img-with-label">
                    <img src={mysqlPic} alt="JavaScript" />
                    <h5>MySQL</h5>
                </div>
            </div>
            <div className="img-row">
                <div className="img-with-label">
                    <img src={jsPic} alt="JavaScript" />
                    <h5>JavaScript</h5>
                </div>
                <div className="img-with-label">
                    <img src={htmlPic} alt="HTML5" />
                    <h5>HTML5</h5>
                </div>
                <div className="img-with-label">
                    <img src={cssPic} alt="CSS3" />
                    <h5>CSS3</h5>
                </div>
            </div>
            <div className="img-row">
                <div className="img-with-label">
                    <img src={bsPic} alt="Bootstrap" />
                    <h5>Bootstrap</h5>
                </div>
                <div className="img-with-label">
                    <img src={wpPic} alt="JavaScript" />
                    <h5>WordPress</h5>
                </div>
                <div className="img-with-label">
                    <img src={gitPic} alt="Git" />
                    <h5>Git</h5>
                </div>
            </div>
        </div>
    )
}

export default Skills;