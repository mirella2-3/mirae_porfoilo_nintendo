import newsData from '../../assets/newsData';

const News = () => {
    return (
        <div className="news">
            <div className="inner">
                <div className="head">
                    <h4>Nintendo 에서 전해드리는</h4>
                    <h2>Nintendo News</h2>
                </div>

                <ul className="newsWrap">
                    {newsData.map((news, index) => (
                        <li key={index} className="newsContentsWrap">
                            <p>
                                <img src={news.imgUrl} alt={news.content} />
                            </p>
                            <div className="txtWrap">
                                <div className="title">{news.content}</div>
                                <div className="summary">{news.summary}</div>
                                <div className="desc">{news.desc}</div>
                            </div>
                            <div className="newsMore">→</div>
                        </li>
                    ))}
                </ul>
                <button className="allMore">전체보기</button>
            </div>
        </div>
    );
};
export default News;
