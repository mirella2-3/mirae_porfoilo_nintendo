import { useState } from 'react';
import softwareList from '../../assets/softwareList ';

const editions = ['Nintendo Switch 2 software', 'Nintendo Switch 2 Edition', 'Nintendo Classics'];

const Software = () => {
    const [activeEdition, setActiveEdition] = useState(editions[0]);

    return (
        <div className="software">
            <div className="inner">
                <ul className="con5Head">
                    <li>
                        <h4>Nintendo Switch 2에서 플레이할 수 있는</h4>
                        <h2>Nintendo Switch2 software</h2>
                    </li>
                    <li>
                        <ul className="edition">
                            {editions.map((edition) => (
                                <li
                                    key={edition}
                                    className={`ed ${activeEdition === edition ? 'on' : ''}`}
                                    onClick={() => setActiveEdition(edition)}
                                >
                                    {edition}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>

                <ul className="software">
                    {softwareList[activeEdition].map((item, i) => (
                        <li key={i}>
                            <p>
                                <img src={item.imgUrl} alt={item.title} />
                            </p>
                            <div className="textWrap">
                                <h5>{item.title}</h5>
                                <span>{item.version}</span>
                                <span>{item.release}</span>
                                <span>한국닌텐도</span>
                                <ul className="ver">
                                    <li>패키지 버전</li>
                                    <li>다운로드 버전</li>
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>

                <button className="allMore">전체보기</button>
            </div>
        </div>
    );
};

export default Software;
