import { Fragment } from 'react'
import './SearchForm.css'

const SearchForm = () => {
  return (
    <Fragment>
      <section className='form-container'>
        <form className='search-form'>
          <label className='search-text'>Search</label>
          <div className='search-container'>
            <input
              placeholder='Search by name, author or keyword'
              className='search-box'
            ></input>
            <button className='search-btn'>Search</button>
          </div>
        </form>
      </section>
    </Fragment>
  )
}

export default SearchForm
