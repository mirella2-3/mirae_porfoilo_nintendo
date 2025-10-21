import React from 'react';

const Nav_tab5 = ({ isActive, onMouseEnter }) => {
    return (
        <li className="m m5" onMouseEnter={onMouseEnter}>
            <h2>고객지원</h2>
            <div className={`sub sub5 ${isActive ? 'on' : ''}`}>
                {/* <div className={`sub sub5 on`}> */}
                <div className="sub_inner">
                    <h2>
                        Nintendo에서 함께 플레이할 수 있는
                        <strong>Nintendo</strong>
                    </h2>
                    <ul className="wrap">
                        <li>
                            <ul className="left">
                                <li>
                                    <img src="/images/sub5m1.png" alt="" />
                                    <p>Q & A</p>
                                </li>
                                <li>
                                    <img src="/images/sub5m2.png" alt="" />
                                    <p>수리접수</p>
                                </li>
                                <li>
                                    <img src="/images/sub5m3.png" alt="" />
                                    <p>고객상담</p>
                                </li>
                                <li>
                                    <img src="/images/sub5m4.png" alt="" />
                                    <p>닌텐도 e숍</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="right">
                                <li className="1">
                                    <div className="helpImg1"></div>

                                    <p>Nintendo Switch</p>
                                    <p>고객지원</p>
                                </li>
                                <li className="2">
                                    <div className="helpImg2"></div>
                                    <p>Nintendo Switch2</p>
                                    <p>고객지원</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default Nav_tab5;
