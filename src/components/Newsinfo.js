import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/image1.jpg';
const Newsinfo = ({ title, image, description, url }) => {
    return (
        <div className="card mb-4">
            <div className="card-image">
                <img className="image" src={image?image:image1} alt="required" />
            </div>
            <div className="card-description">
                <h4>{title.slice(0,50)}...</h4>
                <p>{description?.slice(0, 90)}</p>
                
            </div>
            <div className="read-more d-flex justify-content-center align-items-center">
            <a href={url} className="btn btn-primary bg-danger">
                    Read more
                </a>
            </div>
        </div>
    );
};

export default Newsinfo;
