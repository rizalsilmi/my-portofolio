import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="section-contact">
        <div className="section-title">
            <h2>
                Contact
            </h2>
        </div>

        <div className="card-contact">
            <div className="content-card">
                <a
                    href="https://github.com/rizalsilmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-card"
                >
                    <FaGithub className="github-icon" />
                    <span className="github-username">rizalsilmi</span>
                </a>
            </div>

            <div className="content-card">
                <a
                    href="https://www.linkedin.com/in/rizal-athallah-silmi-91186634a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-card"
                >
                    <FaLinkedin className="linkedin-icon" />
                    <span className="github-username">Rizal Athallah Silmi</span>
                </a>
            </div>

            <div className="content-card">
                <a
                    href="https://wa.me/qr/OJNPEUUHG2TWI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-card"
                >
                    <FaWhatsapp className="wa-icon" />
                    <span className="github-username">+62811107441</span>
                </a>
            </div>

            <div className="content-card">
                <a
                    href="mailto:rzlsilmi@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="email-card"
                >
                    <MdEmail className="email-icon" />
                    <span className="github-username">rzlsilmi@gmail.com</span>
                </a>
            </div>

        </div>

        <div className="footer-title">
            <h2>
                I'm avalaible for Freelancing
            </h2>
        </div>


    </section>

    
    

  );
}

export default Contact;
