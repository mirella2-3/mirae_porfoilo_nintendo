import React from 'react';

const Nav_tab4 = ({ isActive, onMouseEnter }) => {
    return (
        <li className="m m4" onMouseEnter={onMouseEnter}>
            <h2>Characters</h2>
            <div className={`sub sub4 ${isActive ? 'on' : ''}`}>
                {/* <div className={`sub sub4 on`}> */}
                <div className="sub_inner">
                    <h2>
                        함께 플레이할 수 있는
                        <strong>Nintendo Characters</strong>
                    </h2>

                    <ul>
                        <li>
                            <i className="xi-angle-left-thin"></i>
                        </li>
                        <li>
                            <div className="chImg1"></div>
                            <span>마리오</span>
                        </li>
                        <li>
                            <div className="chImg2"></div>
                            <span>젤다의 전설</span>
                        </li>
                        <li>
                            <div className="chImg3"></div>
                            <span>별의 커비</span>
                        </li>
                        <li>
                            <div className="chImg4"></div>
                            <span>스플래툰</span>
                        </li>
                        <li>
                            <div className="chImg5"></div>
                            <span>피크민</span>
                        </li>
                        <li>
                            <div className="chImg6"></div>
                            <span>동물의 숲</span>
                        </li>
                        <li>
                            <i className="xi-angle-right-thin"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default Nav_tab4;
