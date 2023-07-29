import { useState, useEffect } from 'react';

const TABLET_WIDTH = 769;

export const useIsMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);


    return width <= TABLET_WIDTH;
}
