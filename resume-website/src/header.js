import React from 'react';
import './header.css';

const openResume = () => {
    window.open(`${process.env.PUBLIC_URL}/Sean Collins Resume 2024 data-4.pdf`, '_blank');
};

const Header = () => {
    return (
        <header className="App-header">
            <div className="Top-container">
                <div className="Title-container">
                    <h1 className="Title">Sean Collins Developer Page</h1>
                    <h2 className="Subtitle">the place to learn about me and my graphics work</h2>
                </div>
                <div className="button-bar">
                    <button className="Resume-button" onClick={openResume}>Resume</button>
                    <button className="GitHub-button" onClick={openResume}>GitHub</button>
                    <button className="LinkedIn-button" onClick={openResume}>LinkedIn</button>
                </div>

            </div>

        </header>
    );
};

export default Header;