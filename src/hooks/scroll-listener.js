import { useEffect, useState } from 'react';

const useScrollListener = () => {
    const [scrolled, setScrolled] = useState({});

    const listenToScroll = () => {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      
        let scrollValue = windowScroll / height;
        
        if(scrollValue){
            setScrolled({
                position: scrollValue,
            })
        }
      } // checks if scroll is at the bottom with a value of 1

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)

        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }

    }, [])

    return [scrolled];
}

export {useScrollListener};