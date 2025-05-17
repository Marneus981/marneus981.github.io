import React from 'react'

import './hamburger.css'
import '../../config'
const Hamburger_Custom = ({ model = 1, onClick, isOpen, color = '#000'}) => {
    // Dynamically determine the ID for the hamburger model
    const modelId = `nav-icon${model}`;

    return (
        <div
            id={modelId}
            className={isOpen ? 'open' : ''}
            onClick={onClick}

        >
            <span style={{ backgroundColor: color }}></span>
            <span style={{ backgroundColor: color }}></span>
            <span style={{ backgroundColor: color }}></span>
            {/* Add additional spans based on the model */}
            {model === 2 && (
                <>
                    <span style={{ backgroundColor: color }}></span>
                    <span style={{ backgroundColor: color }}></span>
                    <span style={{ backgroundColor: color }}></span>
                </>
            )}
            {model === 3 && <span style={{ backgroundColor: color }}></span>}
        </div>
    );
};

export default Hamburger_Custom;