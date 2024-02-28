import React, { useState, useEffect } from "react";
import Newsinfo from "./Newsinfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";

const Newscontent = ({category}) => {
    const [articles, setArticles] = useState([]);

    async function getData(url) {
        try {
            const data = await fetch(url);
            if (!data.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await data.json();
            console.log(jsonData.articles);
            setArticles(jsonData.articles);
        } catch (error) {
            console.error('Error fetching data:', error.message);
            // Handle error (e.g., show error message)
        }
    }
    

    useEffect(() => {
        const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
        getData(url);
    }, [category]);

    return (
        <div>

            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            <div className="row-cols-3 d-flex justify-content-around flex-wrap mt-4">
                {articles && articles.length > 0 ? (
                    articles.map((data, index) => (
                        <Newsinfo key={index} title={data.title} image={data.urlToImage} description={data.description} url={data.url} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            

        </div>
    
    );
}

export default Newscontent;
