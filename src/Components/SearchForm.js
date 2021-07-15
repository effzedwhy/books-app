import { Fragment, useState } from 'react'
import { callAPI } from '../RestUtility/callAPI'

import './SearchForm.css'

const SearchForm = ({ setBookData }) => {
  const [userInput, setUserInput] = useState('');

  const inputChangeHandler = event => {
    const input = event.target.value
    console.log(input)
    setUserInput(input)
  }
  const searchHandler = e => {
    e.preventDefault();
    if (userInput !== '') {
      console.log('calling book search API');
      callAPI(userInput).then(result => {
        console.log('result', result);
        setBookData(result);
        setUserInput('');
      });
    }
  }
  return (
    <Fragment>
      <section className='form-container'>
        <form className='search-form' onSubmit={searchHandler}>
          <label className='search-text'>Search</label>
          <div className='search-container'>
            <input
              placeholder='Search by name, author or keyword'
              className='search-box'
              value={userInput}
              onChange={inputChangeHandler}
            ></input>
            <button
              className='search-btn'
              disabled={userInput === ''}
              type='submit'
            >
              Search
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  )
}

export default SearchForm
