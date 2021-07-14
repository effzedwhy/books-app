import { Fragment, useState } from 'react'
import './SearchForm.css'

const SearchForm = () => {
  const [userInput, setUserInput] = useState('');
  const inputChangeHandler = event => {
    const input = event.target.value;
    console.log(input);
    setUserInput(input);
  }
  const searchHandler = () => {
    if (userInput !== '') {
      // call books API
      console.log('calling book search API');
    }
  }
  return (
    <Fragment>
      <section className='form-container'>
        <form className='search-form'>
          <label className='search-text'>Search</label>
          <div className='search-container'>
            <input
              placeholder='Search by name, author or keyword'
              className='search-box'
              value={userInput}
              onChange={inputChangeHandler}
            ></input>
            <button className='search-btn'
              disabled={userInput === ''}
              onClick={searchHandler}>Search</button>
          </div>
        </form>
      </section>
    </Fragment>
  )
}

export default SearchForm
