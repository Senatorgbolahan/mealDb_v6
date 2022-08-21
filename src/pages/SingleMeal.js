import React,{ useEffect, useState} from 'react'
import Loading from '../components/Loading'
import { useParams,  Link } from 'react-router-dom'

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [meal, setMeal] = useState(null)

  const getMeal = async () => {
    setLoading(true)
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json() 
        if (data.meals) {
            const { 
                 strMeal:name,strMealThumb:image,strArea:info,strTags:glass, 
                 strCategory:category, strInstructions:instructions,
                 strIngredient1,strIngredient2,strIngredient3,
                 strIngredient4,strIngredient5,strIngredient6
                } = data.meals[0];

              const ingredients = [ 
                strIngredient1,strIngredient2,strIngredient3,
                strIngredient4,strIngredient5,strIngredient6
              ]

              const newMeals = {
                name, image,info, glass,
                category, instructions, ingredients
              }
              setMeal(newMeals)
        } 
        else {
          setMeal(null)  
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
  }

  useEffect(() => {
    getMeal();
  }, [id])

  if (loading) {
    return <Loading/>
  }

  if (!meal) {
    return <h2 className='section-title'>no meal to display</h2>
  }
  const {name, image, info, glass, category, instructions, ingredients} = meal;
  return (
    <section className='section cocktail-section'>
        <Link to= '/' className='btn btn-primary'>back home</Link>
        <h2 className='section-title'>{name}</h2>
        <div className="drink">
           <img src={image} alt= {name} />
           <div className="drink-info">
              <p><span className="drink-data">name :</span>{name}</p>
              <p><span className="drink-data">category :</span>{category}</p>
              <p><span className="drink-data">info :</span>{info}</p>
              <p><span className="drink-data">glass :</span>{glass}</p>
              <p><span className="drink-data">instructions :</span>{instructions}</p>
              <p><span className="drink-data">ingredients :</span>{ingredients.map((item,index) => {
                return item ? <span key={index}>{item}</span> : null
              })}</p>
           </div>
        </div>
    </section>
  )
}

export default SingleCocktail
