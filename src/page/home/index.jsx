import News from '../../components/home/News';
import NintendoPage from '../../components/home/NintendoPage';
import Software from '../../components/home/Software';
import Switch2Ads from '../../components/home/Switch2Ads';
import Video from '../../components/home/Video';
import Visual from '../../components/home/visual';

const Home = () => {
    return (
        <div id="home">
            <Visual />
            <NintendoPage />
            <Video />
            <Software />
            <News />
            <Switch2Ads />
        </div>
    );
};

export default Home;
