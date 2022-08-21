import React, { useRef }  from 'react'
import { useEffect } from 'react';
import { useGlobalContext } from '../context'

const SearchForm = () => {
      const { setSearchTerm } = useGlobalContext();
      const searchValue = useRef('');
      
      useEffect(() => {
        searchValue.current.focus()
      },[])

      const searchMeal = () => {
        let inpValue = searchValue.current.value;
        setSearchTerm(inpValue)
      }

      const handleSubmit =(e) => {
          e.preventDefault()
      }

      
    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className="form-control">
                  <label htmlFor="name">search your favourites meal</label>
                  <input 
                      type="text" 
                      id='name' 
                      placeholder='e.g Salad'
                      onChange={searchMeal}
                      ref={searchValue} />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
