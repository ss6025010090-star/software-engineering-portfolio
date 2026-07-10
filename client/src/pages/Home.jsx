import React from "react";
import profile from "../assets/profile.jpg";
import "./Home.css";

function Home() {
    return (
        <section className="container" id="home">
            <div className="full-info">
                <div className="info">
                    <h1>Hello, I'm Sok Sonita</h1>
                    <h2>Software Engineering Student | Full Stack Developer</h2>
                    <p>
                        I build modern web applications using React, Node.js, and MongoDB.
                        I enjoy creating clean, simple, and user-friendly designs.
                    </p>
                    <div className="button">
                        <button>Contact Me</button>
                        <button>Download CV</button>
                    </div>
                </div>
                <img className="profile-img" src={profile} alt="Profile"/>

            </div>
            
            

        </section>
    )
}


export default Home;