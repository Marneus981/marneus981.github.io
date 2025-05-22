import React from 'react';

import './hamburger.css';
import '../../config';

const Hamburger_Custom = ({ model = 1, onClick, isOpen, color = '#000', size = 60, display = 'block', positionRight = '10px' }) => {
    // Dynamically determine the ID for the hamburger model
    const modelId = `nav-icon${model}`;

    // Calculate spacing dynamically based on size
    const spacing = size * 0.3; // Adjust this multiplier to control the spacing

    return (
        <div
            id={modelId}
            className={isOpen ? 'open' : ''}
            onClick={onClick}
            style={{
                width: `${size}px`,
                height: `${size * 0.75}px`, // Maintain a 4:3 aspect ratio
                display: display,
                position: 'absolute', // Ensure the menu is positioned relative to the screen
                right: positionRight, // Adjust the distance from the right edge
                marginTop: '10px', // Adjust the distance from the top edge
            }}
        >
            <span style={{ backgroundColor: color, height: `${size * 0.15}px`, top: `0px` }}></span>
            <span style={{ backgroundColor: color, height: `${size * 0.15}px`, top: `${spacing}px` }}></span>
            <span style={{ backgroundColor: color, height: `${size * 0.15}px`, top: `${spacing * 2}px` }}></span>
            {/* Add additional spans based on the model */}
            {model === 2 && (
                <>
                    <span style={{ backgroundColor: color, height: `${size * 0.15}px`, top: `${spacing * 3}px` }}></span>
                    <span style={{ backgroundColor: color, height: `${size * 0.15}px`, top: `${spacing * 4}px` }}></span>
                    <span style={{ backgroundColor: color, height: `${size * 0.15}px`, top: `${spacing * 5}px` }}></span>
                </>
            )}
            {model === 3 && <span style={{ backgroundColor: color, height: `${size * 0.15}px`, top: `${spacing * 3}px` }}></span>}
        </div>
    );
};

export default Hamburger_Custom;