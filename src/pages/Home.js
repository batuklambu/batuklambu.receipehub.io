import React from 'react';
import ReceipeList from '../components/ReceipeList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <ReceipeList />
    </main>
  );
};

export default Home;
