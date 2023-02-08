import React from 'react';
import Receipe from './Receipe';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const ReceipeList = () => {
  const { receipes, loading } = useGlobalContext();
  console.log(receipes);

  if (loading) {
    return <Loading />;
  }
  if (receipes.length < 1)
    return (
      <h2 className="section-title">no receipes match your search criteria</h2>
    );

  return (
    <section className="section">
      <h2 className="section-title">receipes</h2>
      <div className="cocktails-center">
        {receipes.map((meal) => {
          return <Receipe key={meal.id} {...meal} />;
        })}
      </div>
    </section>
  );
};

export default ReceipeList;
