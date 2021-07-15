import React from 'react'
import classes from './Book.module.css'

const Book = ({ book }) => {
  const title = book.volumeInfo.title
  const subtitle = book.volumeInfo?.subtitle
  const textSnippet = book.searchInfo?.textSnippet
  return (
    <div className={classes.bookLayout}>
      <div className={classes.titleDiv}>
        <h2>{title}</h2>
      </div>
      {subtitle && <h3>{subtitle}</h3>}
      {textSnippet && <p>{textSnippet}</p>}x
    </div>
  )
}

export default Book
