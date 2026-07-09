import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";

function Project() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://portfolio-backend-ycrm.onrender.com/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <section className="project" id="projects">
            <div className="containers">

                <h1>My Projects</h1>

                <div className="all">

                    {projects.map((project) => (
                        <div className="boxes" key={project._id}>

                            {project.imageUrl && (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                />
                            )}

                            <h3>{project.title}</h3>

                            {}
                            <p>{project.description}</p>

                            <button
                                className="btn"
                                onClick={() => navigate(`/project/${project._id}`)}
                            >
                                Review Project
                            </button>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Project;