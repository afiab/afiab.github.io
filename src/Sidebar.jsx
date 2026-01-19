import React, { useState } from 'react';
import './Sidebar.css';

const navConfig = [
    { title: "", links: [{ label: "HOME", path: "/index" }] },
    {
        title: "Fields",
        links: [
            { label: "SOFTWARE ENGINEERING", path: "/softeng" },
            { label: "GRAPHIC MEDIA DESIGN", path: "/media" },
            { label: "BUSINESS OPS + HR", path: "/business" }
        ]
    },
    { 
        title: "Contact", 
        links: [
            { label: "RESUME", path: "/resume" },
            {label: "LINKEDIN⤴", path: "https://www.linkedin.com/in/afia-bidica/"},
            {label: "GITHUB⤴", path: "https://github.com/afiab"}
        ] 
    }
];

const Sidebar = ({ sections = navConfig, logoText = "AFIA BIDICA" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* The Boxed Hamburger - CSS will hide this on Desktop */}
            <button 
                className={`hamburger-box ${isOpen ? 'is-active' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                <div className="hamburger-inner">
                    <span className="bar top"></span>
                    <span className="bar mid"></span>
                    <span className="bar bot"></span>
                </div>
            </button>

            <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-brand">
                    <div className="logo-box">{logoText}</div>
                </div>

                <nav className="sidebar-nav">
                    {sections.map((section, index) => (
                        <div key={index} className="sidebar-section">
                            {section.title && <h3 className="section-title">{section.title}</h3>}
                            <ul className="section-list">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx} className="section-item">
                                        <a href={link.path} className="section-link" onClick={() => setIsOpen(false)}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
            
            {/* Overlay only active on mobile */}
            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default Sidebar;