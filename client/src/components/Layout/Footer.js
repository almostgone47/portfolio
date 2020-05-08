import React from 'react';

import githubPic from '../../images/green-github.png';
import twitterPic from '../../images/green-twitter.png';
import emailPic from '../../images/green-email.png';

const Footer = () => {
    return(
        <footer>
            <hr />
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
                    <a href="mailto:jeremiah@hostelprofessional.com">
                        <img src={emailPic} alt="Email icon" />
                    </a>
                </li>
            </ul>
            <p>Designed by Jeremiah Barro © 2020</p>
        </footer>
    )
}

export default Footer;