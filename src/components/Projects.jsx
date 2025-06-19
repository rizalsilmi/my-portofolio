import React from "react";
import "./Projects.css"
import { FiEye } from 'react-icons/fi';

function Projects(){
    return(
        <section className="section-projects">
            <h2 className="section-title">
                Projects
            </h2>
            <div className="container-project">

                <div className="card-project">
                    <div className="title-project">
                        <span>Vision+</span>
                    </div>
                    <div className="content-project">
                        <div className="icon">
                            <FiEye className="icon" title="View" />
                        </div>
                        <div className="image-project">
                            <img src="/visionplus.png" alt="Vision Plus" className="project-img" />
                        </div>
                        <div className="desc-project">
                            <span>Vision+ is an Indonesian over-the-top (OTT) streaming service launched by MNC Group. It offers a wide range of entertainment, including live TV, video-on-demand (VOD), and original programming.​</span>
                        </div> 
                    </div>
                </div>

                <div className="card-project">
                    <div className="title-project">
                        <span>Kelas Pintar Revamp</span>
                    </div>
                    <div className="content-project">
                        <div className="icon">
                            <FiEye className="icon" title="View" />
                        </div>
                        <div className="image-project">
                            <img src="/image.png" alt="Kelas Pintar" className="project-img" />
                        </div>
                        <div className="desc-project">
                            <span>Kelas Pintar (kelaspintar.id) is an Indonesian online learning platform designed for elementary to high school students. It offers interactive lessons, practice questions, and live online classes based on the national curriculum.</span>
                        </div> 
                    </div>
                </div>

                <div className="card-project">
                    <div className="title-project">
                        <span>BCA Multifinance</span>
                    </div>
                    <div className="content-project">
                        <div className="icon">
                            <FiEye className="icon" title="View" />
                        </div>
                        <div className="image-project">
                            <img src="/bcamf.png" alt="BCA Multifinance" className="project-img" />
                        </div>
                        <div className="desc-project">
                            <span>
                                BCA Multifinance (BCAMF) was a financial service under BCA Group, focusing on vehicle financing. I contributed as a QA Engineer in the development and testing of digital services for loan application and user authentication. Following its official merger into BCA Finance (<a href="https://www.bcamf.co.id/merger/" target="_blank" rel="noopener noreferrer">more info</a>), the digital assets from BCAMF are now managed under BCA Finance's domain.
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Projects;