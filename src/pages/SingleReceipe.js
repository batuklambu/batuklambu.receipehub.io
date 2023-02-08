import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

// const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}';

const SingleReceipe = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [receipe, setReceipie] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getReceipe() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        console.log(data);
        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strCategory: category,
            strArea: country,
            strYoutube: videourl,
            strInstructions: receipeinfo,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
          } = data.meals[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
          ];
          const newReceipe = {
            name,
            image,
            category,
            country,
            videourl,
            receipeinfo,
            ingredients,
          };
          setReceipie(newReceipe);
        } else {
          setReceipie(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getReceipe();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!receipe) {
    return <h2 className="section-title">no meals to display</h2>;
  } else {
    const {
      name,
      image,
      category,
      country,
      videourl,
      receipeinfo,
      ingredients,
    } = receipe;

    return (
      <section className="section receipe-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="receipe">
          <img src={image} alt={name}></img>
          <div className="receipe-info">
            <p>
              <span className="receipe-data">name:</span>
              {name}
            </p>
            <p>
              <span className="receipe-data">category:</span>
              {category}
            </p>
            <p>
              <span className="receipe-data">country:</span>
              {country}
            </p>
            <p>
              <span className="receipe-data">videourl:</span>
              {videourl}
            </p>
            <p>
              <span className="receipe-data">ingredients:</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
            <p>
              <span className="receipe-data">receipeinfo:</span>
              {receipeinfo}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleReceipe;
