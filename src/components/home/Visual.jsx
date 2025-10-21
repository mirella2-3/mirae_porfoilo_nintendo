import React, { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        img: '/images/visual/mario.png',
        text: '더 큰 모험, 더 짜릿한 즐거움',
        title: 'Nintendo Switch 2',
    },
    {
        id: 2,
        img: '/images/visual/mario2.png',
        text: '끝없는 도전, 한계를 넘어선 재미',
        title: 'Nintendo Switch',
    },
    {
        id: 3,
        img: '/images/visual/donkey.png',
        text: '가족과 함께하는 즐거운 시간',
        title: 'Nintendo Switch Lite',
    },
];

const Visual = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // 처음 렌더링 시 텍스트 표시 딜레이
        setShowText(false);
        const showTextTimeout = setTimeout(() => setShowText(true), 500);

        const slideInterval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
            setShowText(false);
            setTimeout(() => setShowText(true), 500);
        }, 5000);

        return () => {
            clearInterval(slideInterval);
            clearTimeout(showTextTimeout);
        };
    }, []);

    return (
        <div className="visual-container">
            {slides.map(({ id, img, text, title }, i) => (
                <div
                    key={id}
                    className={`slide slide${id} ${activeIndex === i ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="overlay"></div>
                    <div className={`slide-text ${activeIndex === i && showText ? 'show' : ''}`}>
                        <p className="text">{text}</p>
                        <h2 className="title">{title}</h2>
                        <button className="allMore">소프트웨어 더 보러가기</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Visual;
