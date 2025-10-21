import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                },
            })
                .from(
                    '.video-overlay h2',
                    {
                        opacity: 0,
                        y: 40,
                        duration: 0.8,
                        ease: 'power3.out',
                    },
                    '+=0.1'
                )

                .from(
                    '.video-overlay .h11',
                    {
                        opacity: 0,
                        y: 40,
                        duration: 0.8,
                        ease: 'power3.out',
                    },
                    '+=0.1'
                )
                .from(
                    '.video-overlay .h12',
                    {
                        opacity: 0,
                        y: 40,
                        duration: 0.8,
                        ease: 'power3.out',
                    },
                    '+=0.1'
                )
                .from(
                    '.video-overlay img',
                    {
                        opacity: 0,
                        y: 40,
                        duration: 3,
                        ease: 'power3.out',
                    },
                    '+=0.3'
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="video-container" ref={containerRef}>
            <video autoPlay muted loop playsInline id="bg-video">
                <source src="/video/video.mp4" type="video/mp4" />
                브라우저가 비디오를 지원하지 않습니다.
            </video>
            <div className="video-overlay">
                <div className="inner">
                    <ul>
                        <li>
                            <h2>새로워진 Nintendo</h2>
                            <h1 className="h11">당신이 꿈꾸던 모든 플레이,</h1>
                            <h1 className="h12">Nintendo Switch 2</h1>
                        </li>
                        <li>
                            <p>
                                <img src="./images/con4switch.png" alt="" />
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Video;
