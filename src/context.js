import React, { useState, useContext, useEffect, createContext } from 'react';
import { useCallback } from 'react';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [receipes, setReceipies] = useState([]);

  const fetchReceipes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { meals } = data;
      if (meals) {
        const newReceipies = meals.map((meal) => {
          const {
            idMeal,
            strMeal,
            strCategory,
            strArea,
            strInstructions,
            strMealThumb,
            strYoutube,
          } = meal;
          return {
            id: idMeal,
            name: strMeal,
            category: strCategory,
            country: strArea,
            receipeinfo: strInstructions,
            image: strMealThumb,
            videourl: strYoutube,
          };
        });
        setReceipies(newReceipies);
      } else {
        setReceipies([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchReceipes();
  }, [searchTerm, fetchReceipes]);

  return (
    <AppContext.Provider
      value={{ loading, searchTerm, receipes, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
