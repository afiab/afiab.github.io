import React, { useEffect } from 'react';
import './MainContent.css';

const MainContent = ({ sections = [] }) => {
    useEffect(() => {
    const handleMouseMove = (e) => {
      // This creates the --mouse-x and --mouse-y variables globally
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up listener when you leave the page
    return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return (
        <>
        <div className="app-layout"></div>
        <div className="custom-cursor"></div>
        <main className="main-viewport">
            <div className="content-container">
                {sections.map((section, index) => {
                    
                    // If the section is a big title block
                    if (section.type === "title") {
                        return (
                            <div key={index} className="title-block">
                                <h1 className="header-primary">{section.header}</h1>
                            </div>
                        );
                    }

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
                            <a 
                                key={index} 
                                href={section.link} 
                                className="image-link-wrapper"
                                // If external is true, open in new tab, otherwise do nothing
                                target={section.external ? "_blank" : undefined}
                                // Security best practice when using target="_blank"
                                rel={section.external ? "noopener noreferrer" : undefined}
                            >
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

                    if (section.type === "iframe") {
                        return (
                            <iframe src={section.link} width="100%" height="600px" frameborder="0"></iframe>
                        );
                    }

                    // If the section is a job experience block
                    if (section.type === "experience") {
                        return (
                            <div key={index} className="experience-block">
                                <div className="experience-header">
                                    <div className="experience-titles">
                                        <h3 className="job-title">{section.jobTitle}</h3>
                                        <h4 className="company-name">{section.company}</h4>
                                    </div>
                                    <div className="experience-date">
                                        {section.startDate} — {section.endDate}
                                    </div>
                                </div>

                                {/* --- New Skills Highlight Section --- */}
                                {section.skills && (
                                    <div className="experience-skills">
                                        {section.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <ul className="responsibility-list">
                                    {section.responsibilities.map((item, resIdx) => (
                                        <li key={resIdx} className="responsibility-item">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    }

                    // If the section is ONLY a skills cloud (no header)
                    if (section.type === "skills-only") {
                        return (
                            <div key={index} className="skills-container standalone">
                                {section.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-tag large">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        </main>
        </>
    );
};

export default MainContent;