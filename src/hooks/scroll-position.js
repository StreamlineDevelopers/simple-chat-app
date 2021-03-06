import { useEffect, useState } from 'react';

const useScrollPosition = (xy) => {
    const [scrolledPosition, setScrolledPosition] = useState({});
    
    const scrollPositionHandler = () => {
        if(xy === 'x'){
            var x = (window.pageXOffset !== undefined)
            ? window.pageXOffset
            : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    
            setScrolledPosition({ value: x });
        }//number of pixels scrolled horizontally (work with this value instead of window.scrollX or window.pageXOffset)
    
        else if(xy === 'y'){
            var y = (window.pageYOffset !== undefined)
            ? window.pageYOffset
            : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
            setScrolledPosition({ value: y })
        }//number of pixels scrolled vertically (work with this value instead of window.scrollY or window.pageYOffset)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', scrollPositionHandler)

        return () => {
            window.removeEventListener('scroll', scrollPositionHandler)
        }

    }, [])

    return [scrolledPosition];
}

//source: https://stackoverflow.com/questions/8218159/javascript-check-if-page-is-at-the-top
export {useScrollPosition};
