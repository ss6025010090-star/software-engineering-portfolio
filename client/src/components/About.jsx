import React from "react";
import profile from "../assets/profile.jpg";
import "./About.css";


function About() {
    return (
        <section className="about" id="about">
            <div className="container-1">
                <img className="profile-img" src={profile} alt="Profile"/>

                <div className="info-1">
                    <h2>About Me</h2>
                    <p>
                    I am a second-year Software Engineering student who is passionate about building modern web applications. 
                    I enjoy learning new technologies and improving my programming skills through hands-on projects.
                    I am currently pursuing a Bachelor of Software Engineering where I have learned programming, web development, and database management.
                    My goal is to become a Full-Stack Developer and build scalable and user-friendly web applications. 
                    I am learning and improving my problem-solving skills, and I am gaining experience working in team environments through my studies and projects.
                    I value continuous learning, responsibility, and teamwork in every project I work on.
                    I enjoy working with {" "} 
                    ,<span className="tech">React</span>{" "}
                    <span className="tech">Node.js</span>,{" "} 
                    <span className="tech">Express</span>,{" "}and{" "}
                    <span className="tech">MongoDB</span>{" "}to build full-stack web applications.
                    </p>
                </div>
            </div>


        </section>
    );
}
export default About;