import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoMicOutline } from 'react-icons/io5';
import { MdOutlineClose } from 'react-icons/md';

const Nav_tab7 = ({ isActive, onMouseEnter }) => {
    const [query, setQuery] = useState('');
    const [recent, setRecent] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = () => {
        if (!query.trim()) return;
        setRecent((prev) => {
            const updated = [query, ...prev.filter((item) => item !== query)];

            return updated.slice(0, 4);
        });
        setShowModal(true);
        setQuery('');
        setTimeout(() => setShowModal(false), 1000);
    };

    const clearRecent = () => setRecent([]);

    const removeItem = (target) => {
        setRecent((prev) => prev.filter((item) => item !== target));
    };

    return (
        <li className="m m7" onMouseEnter={onMouseEnter}>
            <h2>
                <IoIosSearch style={{ fontSize: 27 }} />
            </h2>
            <div className={`sub sub1 ${isActive ? 'on' : ''}`}>
                {/* <div className={`sub sub1 on`}> */}
                <div className="sub_inner">
                    <div className="search-container">
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="검색어를 입력해주세요."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button className="search" onClick={handleSearch}>
                                <IoIosSearch style={{ fontSize: 20 }} />
                            </button>

                            <button className="close">
                                <MdOutlineClose style={{ fontSize: 20 }} />
                            </button>
                        </div>

                        <div className="search-lists">
                            <div className="popular">
                                <h4>인기 검색어</h4>
                                <ul>
                                    <li>
                                        <strong>1</strong>닌텐도스위치2
                                    </li>
                                    <li>
                                        <strong>2</strong>닌텐도소식
                                    </li>
                                    <li>
                                        <strong>3</strong>이벤트
                                    </li>
                                    <li>
                                        <strong>4</strong>이벤트
                                    </li>
                                    <li>
                                        <strong>5</strong>이벤트
                                    </li>
                                </ul>
                            </div>

                            <div className="recent">
                                <div className="recent-header">
                                    <h4>최근 검색어</h4>
                                    <button className="clear" onClick={clearRecent}>
                                        전체삭제
                                    </button>
                                </div>
                                <ul>
                                    {recent.length === 0 ? (
                                        <li className="empty">최근 검색 내역이 없습니다.</li>
                                    ) : (
                                        recent.map((item, idx) => (
                                            <li key={idx}>
                                                <span className="keyword">{item}</span>
                                                <button
                                                    className="delete-btn"
                                                    onClick={() => removeItem(item)}
                                                    title="삭제"
                                                >
                                                    ✖
                                                </button>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Nav_tab7;
