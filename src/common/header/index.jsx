import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav_tab1 from './Nav_tab1';
import Nav_tab2 from './Nav_tab2';
import Nav_tab3 from './Nav_tab3';
import Nav_tab4 from './Nav_tab4';
import Nav_tab5 from './Nav_tab5';
import Nav_tab6 from './Nav_tab6';
import Nav_tab7 from './Nav_tab7';

const Header = () => {
    const [activeTab, setActiveTab] = useState(null); // 현재 활성화된 탭

    const handleMouseEnter = (tab) => setActiveTab(tab);
    const handleMouseLeave = () => setActiveTab(null);

    return (
        <header id="header" onMouseLeave={handleMouseLeave}>
            <div className="bg"></div>
            <div className="inner">
                <h1>
                    <Link to="/">
                        <img src="/images/logoRed.png" alt="Logo" />
                    </Link>
                </h1>

                <nav className="nav">
                    <ul className="gnb">
                        <Nav_tab1
                            isActive={activeTab === 'tab1'}
                            onMouseEnter={() => handleMouseEnter('tab1')}
                        />
                        <Nav_tab2
                            isActive={activeTab === 'tab2'}
                            onMouseEnter={() => handleMouseEnter('tab2')}
                        />
                        <Nav_tab3
                            isActive={activeTab === 'tab3'}
                            onMouseEnter={() => handleMouseEnter('tab3')}
                        />
                        <Nav_tab4
                            isActive={activeTab === 'tab4'}
                            onMouseEnter={() => handleMouseEnter('tab4')}
                        />
                        <Nav_tab5
                            isActive={activeTab === 'tab5'}
                            onMouseEnter={() => handleMouseEnter('tab5')}
                        />
                        <Nav_tab6
                            isActive={activeTab === 'tab6'}
                            onMouseEnter={() => handleMouseEnter('tab6')}
                        />
                        <Nav_tab7
                            isActive={activeTab === 'tab7'}
                            onMouseEnter={() => handleMouseEnter('tab7')}
                        />
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
