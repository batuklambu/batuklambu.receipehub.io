import React from 'react';
import Receipe from './Receipe';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const ReceipeList = () => {
  const { receipes, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (receipes.length < 1)
    return (
      <h2 className="section-title">no receipes match your search criteria</h2>
    );

  return <div>ReceipeList</div>;
};

export default ReceipeList;
