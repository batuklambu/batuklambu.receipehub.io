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
        <h3>{name}</h3>
        <h4>{category}</h4>
        <h4>{country}</h4>
        <h5>{videourl}</h5>
        <p>{receipeinfo}</p>
        <Link to={`/Receipe/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Receipe;
