import React from 'react'
import classes from './Image.module.css'

const Book = ({ book }) => {
  const image = book.volumeInfo.imageLinks?.thumbnail

  return (
    <div className={classes['image-container']}>
      {image && <img src={image} alt={book.title}></img>}
    </div>
  )
}

export default Book
