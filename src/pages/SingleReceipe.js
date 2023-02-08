import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';

const SingleReceipe = () => {
  const { id } = useParams();

  return <div>SingleReceipe</div>;
};

export default SingleReceipe;
