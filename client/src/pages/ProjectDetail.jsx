import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetail.css";

function ProjectDetails() {
    const { id } = useParams();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/api/projects/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Project not found");
                }
                return res.json();
            })
            .then(data => {
                setProject(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="project-details">

            <h1>{project.title}</h1>

            

            <p><b className="all-text">detailDescription:</b> {project.detailDescription}</p>

            <p><b className="all-text">Problem:</b> {project.problem}</p>

            <p><b className="all-text">Technologies:</b> {project.technologies?.join(", ")}</p>

            <p><b className="all-text">Contribution:</b> {project.contribution}</p>

            <p><b className="all-text">Challenges:</b> {project.challenges}</p>

            <p><b className="all-text">Lessons Learned:</b> {project.lessonsLearned}</p>

            <p><b className="all-text">Features:</b></p>
            <ul>
                {project.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>

            <p>
                <b className="git">GitHub:</b>{" "}
                {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        View Repository
                    </a>
                ) : (
                    "Not available"
                )}
            </p>

            <p>
                <b className="live">Live Demo:</b>{" "}
                {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Visit Website
                    </a>
                ) : (
                    "Not available"
                )}
            </p>

            <div className="btns">
                <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
            </div>


            

        </div>
        
    );
}

export default ProjectDetails;