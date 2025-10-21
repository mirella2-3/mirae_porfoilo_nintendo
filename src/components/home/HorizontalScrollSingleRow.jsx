import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSingleRow = ({ images }) => {
    const scrollClipRef = useRef(null);
    const rowRef = useRef(null);

    useEffect(() => {
        if (!scrollClipRef.current || !rowRef.current) return;

        const row = rowRef.current.querySelector('.list');

        const clone = row.cloneNode(true);
        rowRef.current.appendChild(clone);

        const scrollClip = scrollClipRef.current;

        ScrollTrigger.create({
            trigger: scrollClip,
            start: 'top 80%',
            onEnter: () => {
                scrollClip.classList.add('motion');

                gsap.to(rowRef.current, {
                    x: '-100%',
                    ease: 'linear',
                    duration: 180,
                    repeat: -1,
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.killTweensOf(rowRef.current);
        };
    }, []);

    return (
        <div className="scroll-clip" ref={scrollClipRef} style={{ overflow: 'hidden' }}>
            <div className="row" ref={rowRef} style={{ display: 'flex', width: 'max-content' }}>
                <ul
                    className="list"
                    style={{ display: 'flex', gap: '20px', margin: 0, padding: 0 }}
                >
                    {images.map((src, idx) => (
                        <li key={`row-${idx}`} style={{ listStyle: 'none', width: '300px' }}>
                            <img
                                src={src}
                                alt={`ad ${idx + 1}`}
                                style={{ width: '100%', display: 'block' }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HorizontalScrollSingleRow;
