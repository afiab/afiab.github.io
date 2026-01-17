import React from 'react';
import './MainContent.css';

const MainContent = ({ sections = [] }) => {
    return (
        <main className="main-viewport">
            <div className="content-container">
                {sections.map((section, index) => {
                    
                    // If the section is a text block
                    if (section.type === "text") {
                        return (
                            <div key={index} className="text-block">
                                <h2 className="header-secondary">{section.header}</h2>
                                <p className="paragraph-text">{section.content}</p>
                            </div>
                        );
                    }

                    // If the section is a paragraph block
                    if (section.type === "paragraph") {
                        return (
                            <div key={index} className="text-block">
                                <p className="paragraph-text">{section.content}</p>
                            </div>
                        );
                    }

                    // If the section is an image overlay
                    if (section.type === "image-overlay") {
                        return (
                            <a key={index} href={section.link} className="image-link-wrapper">
                                <div className="image-overlay-container">
                                    <img src={section.imageUrl} alt={section.title} className="wide-image" />
                                    <div className="overlay-text-wrapper">
                                        <h2 className="overlay-title">{section.title}</h2>
                                        <p className="overlay-subtitle">{section.subtitle}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    }

                    return null;
                })}
            </div>
        </main>
    );
};

export default MainContent;