import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetails from '../../NewsDetails/NewsDetails';

const Home = () => {
    const newsData = useLoaderData();
    
    return (
        <div>
            <h1>News Today :{newsData.length } </h1>
            <div>
                {
                    newsData.map(news =><NewsDetails
                    key={news._id}
                    news={news}
                    ></NewsDetails>)
                }
            </div>
        </div>
    );
};

export default Home;