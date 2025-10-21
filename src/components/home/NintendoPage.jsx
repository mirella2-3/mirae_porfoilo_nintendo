import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NintendoSlide from './NintendoSlide';
import NintendoMain from './NintendoMain';

gsap.registerPlugin(ScrollTrigger);

const NintendoPage = () => {
    const sectionRef = useRef(null);
    const nintendoTxtRef = useRef(null);
    const switchConRef = useRef(null);
    const switchBoxRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(nintendoTxtRef.current.querySelector('strong'), {
                backgroundPositionX: '100%',
                duration: 3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            });

            gsap.from(switchConRef.current, {
                opacity: 0,
                y: 100,
                duration: 3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                },
            });

            gsap.from(switchBoxRef.current, {
                opacity: 0,
                x: 50,
                delay: 0.5,
                duration: 3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="nintendo" ref={sectionRef}>
            <div id="wrapper">
                <div id="image">
                    <div className="image i1">
                        <img src="./images/1r.png" alt="1r" />
                    </div>
                    <div className="image i2">
                        <img src="./images/2r.png" alt="2r" />
                    </div>
                    <div className="image i3">
                        <img src="./images/3r.png" alt="3r" />
                    </div>
                    <div className="image i4">
                        <img src="./images/4r.png" alt="4r" />
                    </div>
                    <div className="image i5">
                        <img src="./images/5r.png" alt="5r" />
                    </div>
                    <div className="image i6">
                        <img src="./images/6r.png" alt="6r" />
                    </div>
                    <div className="image i7">
                        <img src="./images/7r.png" alt="7r" />
                    </div>
                </div>

                <div className="bg"></div>

                <div id="wrapTop">
                    <div className="nintendoTxt" ref={nintendoTxtRef}>
                        <h2>함께하는 즐거움 , 끝없이 몰입되는 세계</h2>
                        <strong>Nintendo</strong>
                    </div>
                    <div className="switchBox" ref={switchConRef}>
                        <img src="/images/swithBox2.png" alt="" />
                        <NintendoMain className="MainPhoto" />
                    </div>
                    <div className="switchJoycon" ref={switchBoxRef}>
                        <img src="/images/swithBox1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="thumbnail">
                <NintendoSlide />
            </div>
        </section>
    );
};

export default NintendoPage;
