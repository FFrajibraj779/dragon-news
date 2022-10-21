import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetails from '../NewsDetails/NewsDetails';

const Category = () => {
    const newsData =useLoaderData()
   
    return (
        <div>
        {
            newsData.map(news =><NewsDetails
            key={news._id}
            news={news}
            ></NewsDetails>)
        }
        </div>
    );
};

export default Category;