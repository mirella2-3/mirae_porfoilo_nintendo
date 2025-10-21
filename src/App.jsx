import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './page/home';
import Layout from './common/Layout';
import './styles/index.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
