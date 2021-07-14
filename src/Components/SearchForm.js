import { Fragment, useState, useRef } from 'react'
import CallAPI from '../RestUtility/callAPI'

import './SearchForm.css'

const SearchForm = fetchData => {
  const [userInput, setUserInput] = useState('')
  const ref = useRef()

  const inputChangeHandler = event => {
    const input = event.target.value
    console.log(input)
    setUserInput(input)
  }
  const searchHandler = e => {
    e.preventDefault()
    if (userInput !== '') {
      console.log(fetchData)
      console.log('calling book search API')
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
            <button
              className='search-btn'
              disabled={userInput === ''}
              onClick={searchHandler}
              fetchData={fetchData}
              ref={ref}
            >
              Search
            </button>
          </div>
        </form>
        <section>
          <CallAPI />
        </section>
      </section>
    </Fragment>
  )
}

export default SearchForm
