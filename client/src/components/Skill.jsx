import React from "react";
import "./Skill.css";
import c from "../assets/c.jpg";
import cpp from "../assets/cpp.jpg";
import java from "../assets/java.jpg";
import javascript from "../assets/javascript.jpg";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import react from "../assets/react.jpg";
import nodejs from "../assets/nodejs.jpg";
import express from "../assets/express.png";
import mongoDB from "../assets/mongoDB.jpg";
import postgresql from "../assets/postgresql.jpg";
import vscode from "../assets/vscode.jpg";
import git from "../assets/git.jpg";
import github from "../assets/github.jpg";
import figma from "../assets/figma.jpg";

function Skill() {
    return (
        <section className="skill" id="skills">
            <h1>My{" "}<span className="my-skill">Skill</span></h1>
            <div className="contain-all">
                <div className="box">
                    <div className="box-1">
                        <h2>Programming Languages</h2>
                        <div className="language1">
                            <div className="Language-1">
                                <img className="c-img" src={c} alt="C"/>
                                <h3>C</h3>
                            </div>
                            <div className="Language-2">
                                <img className="cpp-img" src={cpp} alt="Cpp"/>
                                <h3>C++</h3>
                            </div>
                            <div className="Language-3">
                                <img className="java-img" src={java} alt="Java"/>
                                <h3>Java</h3>
                            </div>
                            <div className="Language-4">
                                <img className="javascript-img" src={javascript} alt="Javascript"/>
                                <h3>Javascript</h3>
                            </div>
                        </div>

                    </div>
                    <div className="box-2">
                        <h2>Front-End</h2>
                        <div className="language2">
                            <div className="Language-1">
                                <img className="html-img" src={html} alt="Html"/>
                                <h3>HTML</h3>
                            </div>
                            <div className="Language-2">
                                <img className="css-img" src={css} alt="Css"/>
                                <h3>CSS</h3>
                            </div>
                            <div className="Language-3">
                                <img className="react-img" src={react} alt="React"/>
                                <h3>React</h3>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="box2">
                    <div className="box-3">
                        <h2>Back-End</h2>
                        <div className="language3">
                            <div className="Language-1">
                                <img className="nodejs-img" src={nodejs} alt="Nodejs"/>
                                <h3>Node.js</h3>
                            </div>
                            <div className="Language-2">
                                <img className="express-img" src={express} alt="Express"/>
                                <h3>Express.js</h3>
                            </div>
                        </div> 
                    </div>
                    <div className="box-4">
                        <h2>Database</h2>
                        <div className="language4">
                            <div className="Language-1">
                                <img className="mongoDB-img" src={mongoDB} alt="MongoDB"/>
                                <h3>MongoDB</h3>
                            </div>
                            <div className="Language-2">
                                <img className="postgresql-img" src={postgresql} alt="postgresql"/>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box3">
                    <div className="box-5">
                        <h2>Development Tools</h2>
                        <div className="language5">
                            <div className="Language-1">
                                <img className="vscode-img" src={vscode} alt="vscode"/>
                                <h3>VSCode</h3>
                            </div>
                            <div className="Language-2">
                                <img className="git-img" src={git} alt="git"/>
                                <h3>Git</h3>
                            </div>
                            <div className="Language-3">
                                <img className="github-img" src={github} alt="github"/>
                                <h3>GitHub</h3>
                            </div>

                        </div> 
                    </div>
                    <div className="box-6">
                        <h2>Design Tools</h2>
                        <div className="language6">
                            <div className="Language-1">
                                <img className="figma-img" src={figma} alt="figma"/>
                                <h3>Figma</h3>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skill;