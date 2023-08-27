# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// AnimatedPage.js
import React, { useEffect, useState } from 'react';
import './animation.css'; // Import the animation styles

const AnimatedPage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <div className={`min-h-screen flex justify-center items-center ${showContent ? 'fade-in' : ''}`}>
            <div className="bg-gray-300 p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Animated Page</h1>
                <p>This content fades in when the page loads.</p>
            </div>
        </div>
    );
};

export default AnimatedPage;
