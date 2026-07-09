import React from "react";
import "./Education.css";

function Education(){

    return(
        <section className="education" id="education">

            <h1>
                Education & Experience
            </h1>


            <div className="education-container">


                <div className="education-card">

                    <h2>Education</h2>

                    <h3>Bachelor of Software Engineering</h3>

                    <p>CamTech University</p>

                    <p>Year 2 Student</p>

                    <h4>Relevant Courses</h4>

                    <ul>
                        <li>Web Development</li>
                        <li>Object-Oriented Programming</li>
                        <li>Database Systems</li>
                        <li>Human-Computer Interaction</li>
                        <li>Software Design</li>
                        <li>Data Structures and Algorithms</li>
                    </ul>

                </div>



                <div className="experience-card">

                    <h2>Experience</h2>

                    <h3>Software Engineering Intern</h3>

                    <p>Smart Energy Monitoring System</p>


                    <h4>Responsibilities</h4>

                    <ul>
                        <li>Developed frontend using React</li>

                        <li>Created REST API using Node.js</li>

                        <li>Integrated MongoDB database</li>

                        <li>Conducted user research</li>
                    </ul>

                </div>


            </div>

        </section>
    );
}


export default Education;