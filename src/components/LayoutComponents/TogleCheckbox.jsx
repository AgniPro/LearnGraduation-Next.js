'use client';

import { useState, useEffect } from 'react';

const ToggleCheckbox = ({ htmlFor, children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 896);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 896);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        if (isMobile) {
            const checkbox = document.getElementById(htmlFor);
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        }
    };

    return <div onClick={handleClick}>{children}</div>;
};

export default ToggleCheckbox;