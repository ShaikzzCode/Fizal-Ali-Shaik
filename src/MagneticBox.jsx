import React, { useState, useEffect } from 'react';
import './css/magneticHover.css';
// import projectsData from "../public/projects_data.json";
// import projectsData from "../projects_data.json";
// import projectsData from "./projects_data.json";


const MagneticBox = () => {
    useEffect(() => {
        const hoverBoxes = document.querySelectorAll('.magnetic_hover');

        hoverBoxes.forEach(hoverBox => {
            const handleMouseMove = (e) => {
                const rect = hoverBox.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const deltaX = x - centerX;
                const deltaY = y - centerY;

                const rotateX = deltaY / centerY * 20;
                const rotateY = deltaX / centerX * -20;

                hoverBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            };

            const handleMouseLeave = () => {
                hoverBox.style.transform = `rotateX(0deg) rotateY(0deg)`;
            };

            hoverBox.addEventListener('mousemove', handleMouseMove);
            hoverBox.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                hoverBox.removeEventListener('mousemove', handleMouseMove);
                hoverBox.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, []);

    // fetching projects from json file using react useEffect

    const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     setProjects(projectsData);
    // }, []);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>

            {/* Project */}
            <div className="magnetic_hover magnetic_box">
                <img src="./assets/projects_png/rook_bird.png" alt="pImg" />
                <div className='projectTitle'>
                    <p>Rook Editor</p>
                    <span>
                        Rook Editor is an online code Editor for practicing HTML,CSS,JavaScript and jQuery.
                        It is an Upgraded version of W3Schools Online HTML Editor.
                    </span>
                    <button onClick={() => openInNewTab("https://rookeditor-686e2.web.app/")}>Open</button>
                </div>
            </div>
            {/* Project */}
            <div className="magnetic_hover magnetic_box">
                <img src="./assets/projects_png/gradientPro.png" alt="pImg" />
                <div className='projectTitle'>
                    <p>Gradient PRO</p>
                    <span>
                        Gradient PRO is a CSS gradient generator where you can you create some amazing gradients.
                    </span>
                    <button onClick={() => openInNewTab("https://gradient-pro.web.app/")}>Open</button>
                </div>
            </div>
            {/* Project */}
            <div className="magnetic_hover magnetic_box">
                <img src="./assets/projects_png/t2h.png" alt="pImg" />
                <div className='projectTitle'>
                    <p>T2H</p>
                    <span>
                        T2H is a Text to Handwriting conversion tool which helps to create notes.
                    </span>
                    <button onClick={() => openInNewTab("https://text-to-hand-writing.web.app/")}>Open</button>
                </div>
            </div>
            {/* Project */}
            <div className="magnetic_hover magnetic_box">
                <img src="./assets/projects_png/weather_p.png" alt="pImg" />
                <div className='projectTitle'>
                    <p>Weather Prediction</p>
                    <span>
                        A simple Weather Prediction App With React. Which helps to predict weather based on your current location and the locations you search.
                    </span>
                    <button onClick={() => openInNewTab("https://weather-prediction-ba946.web.app/")}>Open</button>
                </div>
            </div>
            {/* Project */}
            <div className="magnetic_hover magnetic_box">
                <img src="./assets/projects_png/et.png" alt="pImg" />
                <div className='projectTitle'>
                    <p>Expense Tracker</p>
                    <span>
                    Expense Tracker - An Expense Tracking website create using Html, CSS, JavaScript.
                    </span>
                    <button onClick={() => openInNewTab("https://expensetrackerbyshaik.000webhostapp.com/")}>Open</button>
                </div>
            </div>
            {/* Project */}
            <div className="magnetic_hover magnetic_box">
                <img src="./assets/projects_png/todo_fav.png" alt="pImg" />
                <div className='projectTitle'>
                    <p>Todo</p>
                    <span>
                    Simple Todo app with beautiful UI and with local storage.
                    </span>
                    <button onClick={() => openInNewTab("https://todo-b327a.web.app/")}>Open</button>
                </div>
            </div>
            {/* Project */}
            <div className="magnetic_hover magnetic_box">
                <img src="./assets/projects_png/tic_tac_toe_icon.png" alt="pImg" />
                <div className='projectTitle'>
                    <p>Tic Tac Toe</p>
                    <span>
                    A Tic Tac Toe Game created using HTML, CSS and JavaScript with features like multiplayer and score board.
                    </span>
                    <button onClick={() => openInNewTab("https://tic-tac-toe-56635.web.app/")}>Open</button>
                </div>
            </div>
            {/* Project */}
            <div className="magnetic_hover magnetic_box">
                <img src="./assets/projects_png/calculator_icon.png" alt="pImg" />
                <div className='projectTitle'>
                    <p>Calculator</p>
                    <span>
                    A Beautiful Calculator created using HTML, CSS and JavaScript.
                    </span>
                    <button onClick={() => openInNewTab("https://calculator-156fc.web.app/")}>Open</button>
                </div>
            </div>




            {/* {projects.map((project) => (
                <div className="magnetic_hover magnetic_box">
                    <img src={project.pImage} alt="pImg" />
                    <div className='projectTitle'>
                        <p>{project.pName}</p>
                        <span>
                            {project.pDescription}
                        </span>
                        <button onClick={() => openInNewTab(project.pUrl)}>Open</button>
                    </div>
                </div>
            ))} */}
        </>
    );
};

export default MagneticBox;