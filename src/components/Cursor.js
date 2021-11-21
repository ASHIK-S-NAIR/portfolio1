import React,{useEffect, useRef} from 'react'

function Cursor() {

    const cursorOutline = useRef(null);
    const cursorDot = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseOutlineX = clientX - cursorOutline.current.clientWidth / 2;
            const mouseOutlineY = clientY - cursorOutline.current.clientHeight / 2;
            const mouseDotX = clientX - cursorDot.current.clientWidth / 2;
            const mouseDotY = clientY - cursorDot.current.clientHeight / 2;
        cursorOutline.current.style.transform = `translate3d(${mouseOutlineX}px, ${mouseOutlineY}px, 0)`;
        cursorDot.current.style.transform = `translate3d(${mouseDotX}px, ${mouseDotY}px, 0)`;
        });
    }, []);

    return (
        <>
            <div className="cursor-outline hovering" ref={cursorOutline} ></div>
            <div className="cursor-dot" ref={cursorDot}></div>
        </>
    )
}

export default Cursor
