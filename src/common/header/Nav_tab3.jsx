import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import newsData from '../../assets/newsData';

const Nav_tab3 = ({ isActive, onMouseEnter }) => {
    return (
        <li className="m m3" onMouseEnter={onMouseEnter}>
            <h2>뉴스</h2>
            <div className={`sub sub3 ${isActive ? 'on' : ''}`}>
                <div className="sub_bg">
                    <ul className="sub_inner">
                        <li className="left">
                            <div className="title">
                                <div className="titletxt">
                                    <span>Nintendo에서 전해드리는</span>
                                    <h2>Nintendo News</h2>
                                </div>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M9.5 6L15.5 12L9.5 18"
                                            stroke="#757575"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <ul className="newsImgs">
                                {newsData.map((item, index) => (
                                    <li key={index}>
                                        <p>
                                            <img
                                                src={`/images/sub4img${index + 1}.png`}
                                                alt={item.content}
                                            />
                                        </p>
                                        <h5 className="title">{item.content}</h5>
                                        <span className="date">{item.date}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="right">
                            <div className="title">
                                <h2>Event</h2>
                                <button className="switch-next">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M9.5 6L15.5 12L9.5 18"
                                            stroke="#757575"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="content">
                                <p>
                                    <img src="/images/1.jpg" alt="" />
                                </p>
                                <ul>
                                    <li>커비 파이터즈2</li>
                                    <li className="prePrice">22,000</li>
                                    <li className="nowPrice">15,400</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default Nav_tab3;
