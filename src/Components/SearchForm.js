import { Fragment, useState } from 'react'
import { callAPI } from '../RestUtility/callAPI'

import classes from './SearchForm.module.css'

const SearchForm = ({ setBookData }) => {
  const [userInput, setUserInput] = useState('')

  const inputChangeHandler = event => {
    const input = event.target.value

    setUserInput(input)
  }
  const searchHandler = e => {
    e.preventDefault()
    if (userInput !== '') {
      console.log('calling book search API')
      callAPI(userInput).then(result => {
        setBookData(result)
        setUserInput('')
      })
    }
  }
  return (
    <Fragment>
      <section className={classes['form-container']}>
        <form className={classes['search-form']} onSubmit={searchHandler}>
          <label className={classes['search-text']}>Search</label>
          <div className={classes['search-container']}>
            <input
              placeholder='Search by name, author or keyword'
              className={classes['search-box']}
              value={userInput}
              onChange={inputChangeHandler}
            ></input>
            <button
              className={classes['search-btn']}
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
