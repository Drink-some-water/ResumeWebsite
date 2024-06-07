import React from 'react';
//import './Header.css';

const openResume = () => {
    window.open(`${process.env.PUBLIC_URL}/Sean Collins Resume 2024 data-4.pdf`, '_blank');
};

const Header = () => {
    return (
        <header className="App-header">
            <div>
                <h1 className="Title">Sean Collins Developer Page</h1>
                <h2 className="Subtitle">the place to learn about me and my graphics work</h2>
            </div>
            <button className="Resume-button" onClick={openResume}>Resume</button>
        </header>
    );
};

export default Header;