import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ images, speed = 840 }) => {
    const scrollClipRef = useRef(null);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    useEffect(() => {
        if (!scrollClipRef.current || !row1Ref.current || !row2Ref.current) return;

        const row1 = row1Ref.current.querySelector('.list');
        const row2 = row2Ref.current.querySelector('.list');

        // 리스트 복제 (무한 스크롤 위해)
        const clone1 = row1.cloneNode(true);
        const clone2 = row2.cloneNode(true);

        row1Ref.current.appendChild(clone1);
        row2Ref.current.appendChild(clone2);

        const scrollClip = scrollClipRef.current;

        ScrollTrigger.create({
            trigger: scrollClip,
            start: 'top 50%',
            onEnter: () => {
                scrollClip.classList.add('motion');

                gsap.to(row1Ref.current, {
                    x: '-100%',
                    ease: 'linear',
                    duration: speed,
                    repeat: -1,
                });

                gsap.fromTo(
                    row2Ref.current,
                    { x: '-50%' },
                    {
                        x: '0%',
                        ease: 'linear',
                        duration: speed,
                        repeat: -1,
                    }
                );
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.killTweensOf(row1Ref.current);
            gsap.killTweensOf(row2Ref.current);
        };
    }, []);

    return (
        <div className="scroll-clip" ref={scrollClipRef}>
            <div className="row row1" ref={row1Ref}>
                <ul className="list">
                    {images.map((src, idx) => (
                        <li key={`row1-${idx}`}>
                            <img src={src} alt={`ad ${idx + 1}`} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="row row2" ref={row2Ref}>
                <ul className="list">
                    {images.map((src, idx) => (
                        <li key={`row2-${idx}`}>
                            <img src={src} alt={`ad ${idx + 1}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HorizontalScroll;
