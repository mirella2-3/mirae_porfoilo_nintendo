import { useState } from 'react';
import HorizontalScroll from '../../components/home/HorizontalScroll';
import adsData from '../../assets/adsData';

const Nav_tab1 = ({ isActive, onMouseEnter }) => {
    const [selectedType, setSelectedType] = useState(0);

    return (
        <li className="m m1" onMouseEnter={onMouseEnter}>
            <h2>본체 및 amiilbo</h2>
            <div className={`sub sub1 ${isActive ? 'on' : ''}`}>
                <div className="sub_bg">
                    <div className="sub_inner">
                        <ul className="switchType">
                            <li
                                className={selectedType === 0 ? 'on' : ''}
                                onClick={() => setSelectedType(0)}
                                style={{ cursor: 'pointer' }}
                            >
                                Nintendo Switch
                            </li>
                            <li
                                className={selectedType === 1 ? 'on' : ''}
                                onClick={() => setSelectedType(1)}
                                style={{ cursor: 'pointer' }}
                            >
                                Nintendo Switch 2
                            </li>
                        </ul>

                        {selectedType === 0 && (
                            <div className="sub_inner sub_inner1">
                                <HorizontalScroll images={adsData} speed={100} />
                                <h2>
                                    <strong>Nintendo</strong> Switch
                                </h2>
                                <span>
                                    「Nintendo Switch Online」에 가입하면 즐길 수 있는 다양한 클래식
                                    게임을 즐길 수 있습니다.
                                </span>
                                <div className="sub_wrap">
                                    <div className="pic">
                                        <img
                                            src="/images/Nintendo Switch2.png"
                                            alt="Nintendo Switch"
                                        />
                                        <div className="slide"></div>
                                    </div>
                                    <ul className="more">
                                        <li>
                                            <a href="#">기능 | 특징비교</a>
                                        </li>
                                        <li>
                                            <a href="#">확장 기기 | 액세서리</a>
                                        </li>
                                        <li>
                                            <a href="#">amiibo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {selectedType === 1 && (
                            <div className="sub_inner sub_inner2">
                                <HorizontalScroll images={adsData} speed={100} />
                                <h2>
                                    <strong>Nintendo Switch 2</strong>
                                </h2>
                                <span>
                                    「Nintendo Switch Online + 추가 팩」 가입시 「Nintendo
                                    GameCube」 타이틀도 플레이할 수 있습니다.
                                </span>
                                <div className="sub_wrap">
                                    <div className="pic">
                                        <img
                                            src="/images/Nintendo Switch.png"
                                            alt="Nintendo Switch 2"
                                        />
                                        <div className="slide"></div>
                                    </div>
                                    <ul className="more">
                                        <li>
                                            <a href="#">기능 | 특징비교</a>
                                        </li>
                                        <li>
                                            <a href="#">확장 기기 | 액세서리</a>
                                        </li>
                                        <li>
                                            <a href="#">amiibo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Nav_tab1;
