import React, { useRef } from 'react';
import HorizontalScroll from './HorizontalScroll';
import adsData from '../../assets/adsData';

const Switch2Ads = () => {
    const switch2AdsRef = useRef(null);

    return (
        <div className="Switch2Ads" ref={switch2AdsRef}>
            <div className="inner">
                <h1>Nintendo Switch2</h1>
                <span>지금 바로 가까운 매장에서 만나보세요</span>
                <button className="allMore">가까운 매장 찾아보기</button>
            </div>
            <HorizontalScroll images={adsData} speed={1000} />
        </div>
    );
};

export default Switch2Ads;
