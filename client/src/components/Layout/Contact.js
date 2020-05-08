import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="section">
            <div id="contact-text">
                <h2>Contact Me</h2>
                <p className="lead">Hire me for your next project, ask a question, or simply get in touch!</p>
            </div>
            <form action="https://formspree.io/jeremiah@hostelprofessional.com" method="POST">
                <input type="text" name="name" placeholder="Your Name:" required="" />
                <input type="email" name="email" placeholder="Your Email:" required="" />
                <textarea rows="3" name="message" placeholder="Your Message:" required=""></textarea>
                <input type="submit" name="submit" />
            </form>
        </div>
    )
}

export default Contact;