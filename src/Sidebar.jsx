import React from 'react';
import './Sidebar.css';

const navConfig = [
    {
    title: "", // Empty for the top section
    links: [
        { label: "HOME", path: "/about" }
        ]
    },
    {
    title: "Fields",
    links: [
        { label: "SOFTWARE ENGINEERING", path: "/swe" },
        { label: "GRAPHIC MEDIA DESIGN", path: "/gmd" },
        { label: "BUSINESS OPS + HR", path: "/ds" }
        ]
    },
    {
    title: "Resources",
    links: [
        { label: "CONTACT + RESUME", path: "/res" }
        ]
    }
];

const Sidebar = ({ sections = navConfig, logoText = "AFIA BIDICA" }) => {
    return (
    <aside className="sidebar">
      {/* Logo Section */}
        <div className="sidebar-brand">
        <div className="logo-box">{logoText}</div>
        </div>

        <nav className="sidebar-nav">
        {sections.map((section, index) => (
            <div key={index} className="sidebar-section">
            {section.title && (
                <h3 className="section-title">{section.title}</h3>
            )}
            <ul className="section-list">
                {section.links.map((link, linkIdx) => (
                <li key={linkIdx} className="section-item">
                    <a href={link.path} className="section-link">
                    {link.label}
                    </a>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </nav>
    </aside>
    );
};

export default Sidebar;