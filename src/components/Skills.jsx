import React from "react";
import './Skills.css';
import { FaJsSquare, FaPython, FaReact, FaGitAlt } from "react-icons/fa";
import { FaTools } from 'react-icons/fa'; // from Font Awesome
import { DiJava } from "react-icons/di";
import { SiPostman, SiJenkins, SiGithub, SiGitlab, SiMongodb, SiMysql, SiPostgresql, SiJira } from "react-icons/si";
import { FaClipboardList, FaChalkboardTeacher } from "react-icons/fa"; // ✅ icons for test design & presentation


function Skills() {
    return (
        <section id="skills" className="section-skills">
            <h2 className="section-title">Skills</h2>
            <div className="container-skill">
                {/* Programming Languages */}
                <div className="card-skill">
                    <div className="title-skill">
                        <p>Programming Languages</p>
                    </div>
                    <div className="content-skill">
                        <div className="row-skill"><FaJsSquare className="icon" title="JavaScript" /><span className="desc">JavaScript</span><span className="level">Intermediate</span></div>
                        <div className="row-skill"><FaPython className="icon" title="Python" /><span className="desc">Python</span><span className="level">Intermediate</span></div>
                        <div className="row-skill"><DiJava className="icon" title="Java" /><span className="desc">Java</span><span className="level">Intermediate</span></div>
                        <div className="row-skill"><FaReact className="icon" title="React JS" /><span className="desc">React JS</span><span className="level">Beginner</span></div>
                    </div>
                </div>

                {/* Automation Testing */}
                <div className="card-skill">
                    <div className="title-skill">
                        <p>Automation Testing</p>
                    </div>
                    <div className="content-skill">
                        <div className="row-skill"><FaPython className="icon" title="Python" /><span className="desc">Python API Automation</span><span className="level">Intermediate</span></div>
                        <div className="row-skill"><DiJava className="icon" title="Java" /><span className="desc">Selenium Java</span><span className="level">Intermediate</span></div>
                        <div className="row-skill"><FaReact className="icon" title="React" /><span className="desc">Katalon Studio</span><span className="level">Beginner</span></div>
                    </div>
                </div>

                {/* QA Engineering */}
                <div className="card-skill">
                <div className="title-skill">
                    <p>QA Engineering</p>
                </div>
                <div className="content-skill">
                    <div className="row-skill">
                    <SiJira className="icon" title="Jira" />
                    <span className="desc">Jira</span>
                    <span className="level">Advanced</span>
                    </div>
                    <div className="row-skill">
                    <SiPostman className="icon" title="Postman" />
                    <span className="desc">Postman</span>
                    <span className="level">Intermediate</span>
                    </div>
                    <div className="row-skill">
                    <FaClipboardList className="icon" title="Test Case Design" />
                    <span className="desc">Test Case & Scenario Design</span>
                    <span className="level">Advanced</span>
                    </div>
                    <div className="row-skill">
                    <FaChalkboardTeacher className="icon" title="Presentation" />
                    <span className="desc">Presentation</span>
                    <span className="level">Intermediate</span>
                    </div>
                </div>
                </div>


                {/* Performance Testing */}
                <div className="card-skill">
                    <div className="title-skill">
                        <p>Performance Testing</p>
                    </div>
                    <div className="content-skill">
                        <div className="row-skill"><FaTools className="icon" title="JMeter" /><span className="desc">JMeter</span><span className="level">Beginner</span></div>
                    </div>
                </div>

                {/* DevOps Tools */}
                <div className="card-skill">
                    <div className="title-skill">
                        <p>DevOps & Version Control</p>
                    </div>
                    <div className="content-skill">
                        <div className="row-skill"><SiGithub className="icon" title="GitHub" /><span className="desc">GitHub</span><span className="level">Intermediate</span></div>
                        <div className="row-skill"><SiGitlab className="icon" title="GitLab" /><span className="desc">GitLab</span><span className="level">Intermediate</span></div>
                        <div className="row-skill"><SiJenkins className="icon" title="Jenkins" /><span className="desc">Jenkins</span><span className="level">Intermediate</span></div>
                        <div className="row-skill"><FaGitAlt className="icon" title="Git" /><span className="desc">Git</span><span className="level">Intermediate</span></div>
                    </div>
                </div>

                {/* Databases */}
                <div className="card-skill">
                    <div className="title-skill">
                        <p>Database Management</p>
                    </div>
                    <div className="content-skill">
                        <div className="row-skill"><SiMongodb className="icon" title="MongoDB" /><span className="desc">MongoDB</span><span className="level">Beginner</span></div>
                        <div className="row-skill"><SiPostgresql className="icon" title="PostgreSQL" /><span className="desc">PostgreSQL</span><span className="level">Intermediate</span></div>
                        <div className="row-skill"><SiMysql className="icon" title="MySQL" /><span className="desc">MySQL</span><span className="level">Intermediate</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
