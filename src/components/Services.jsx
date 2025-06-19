import React from "react";
import './Services.css'

const services = [
  {
    title: "Testing Automation",
    description:
      "I have experience creating automated test scripts for web, mobile, and Android TV platforms using Pytest and Python. I use Jenkins to schedule and run tests automatically, helping to save time and improve accuracy. For API testing, I create automation with Postman, and for performance testing, I use K6 and JMeter to check how systems perform under load. I also have experience using UFT One with VBScript to automate complex business processes. My focus is on making testing faster, reducing bugs, and helping teams deliver better products through reliable automation.",
  },
  {
    title: "Testing Engineer",
    description:
      "I have strong experience in manual testing for web, Android, and iOS applications. I create test cases, test scenarios, and run tests to check functionality, UI, and overall user experience. I handle bug reporting using JIRA, and I also support UAT (User Acceptance Testing) by preparing test data, presenting results, and working closely with developers and product teams to fix issues. As a testing engineer, I help ensure every feature works as expected before release, and I often collaborate across teams to meet project goals and improve product quality.",
  },
  {
    title: "Testing Performance",
    description:
      "I have experience in performance testing using tools like K6 and JMeter to check how systems perform under heavy load and high traffic. I create test scripts to simulate multiple users accessing the application at the same time, helping to identify slow responses, bottlenecks, and potential failures. This testing helps ensure that the system stays stable and responsive even under pressure, especially before major releases. I also analyze test results to provide recommendations for improving speed and system performance.",
  },
  {
    title: "Product Strategy",
    description:
      "I collaborate to define clear goals, target audiences, and a success roadmap. My expertise in product ideation and market analysis ensures your product meets user needs and aligns with your business strategy for long-term growth and full potential realization. Drive your product's success with strategic planning.",
  },
];


function Services() {
    return(
        <section id="services" className="services-section">
            <h2 className="section-title">
                Services
            </h2>
            <div className="services-container">
                {services.map((services, index) => (
                    <div className="service-card" key={index}>
                        <h3>{services.title}</h3>
                        <p>{services.description}</p>
                    </div>
                ))}

            </div>
        </section>


    )
}

export default Services;