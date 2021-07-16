import React from 'react'
import classes from './Image.module.css'

const image = ({ book }) => {
  const image = book?.volumeInfo.imageLinks?.thumbnail

  return (
    <div className={classes['image-container']}>
      {image && (
        <img src={image} alt={book.title} className={classes.image}></img>
      )}
    </div>
  )
}

export default image
