import React from 'react';
import { Link } from 'react-router-dom';

const Receipe = ({
  image,
  name,
  id,
  category,
  country,
  receipeinfo,
  videourl,
}) => {
  return (
    <article className="receipe">
      <div className="img-container">
        <img src={image} alt={name}></img>
      </div>
      <div className="receipe-footer">
        <h3>name : {name}</h3>
        <h4>category : {category}</h4>
        <h4>country : {country}</h4>
        <p>receipe : {receipeinfo}</p>
        <div>
          <a href={videourl} className="btn btn-primary btn-details">
            Receipe Video : click Me
          </a>
        </div>
        {/* <h5>Receipe Video: {videourl}</h5> */}
        <Link to={`/Receipe/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Receipe;
