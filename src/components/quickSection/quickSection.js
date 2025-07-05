import React from 'react';
import './quickSection.css';
import '../../config';

const QuickSection = ({ texts = [] }) => {
    if (!texts.length) return null;
    return (
        <div className='quick_section'>
            <div className='quick_section_right'>
                <h2>{texts[0]}</h2>
                <p>{texts[1]}</p>
                
            </div>
            
            {texts.length > 2 && (
                <div className='quick_section_left'>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {texts.slice(2).map((text, idx) => (
                            <li key={idx}>{text}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default QuickSection;