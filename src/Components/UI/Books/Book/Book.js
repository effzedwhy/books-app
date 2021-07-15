import React from 'react'
import classes from './Book.module.css'
import Image from './Image'

const Book = ({ book }) => {
  const title = book.volumeInfo.title
  const subtitle = book.volumeInfo?.subtitle
  const textSnippet = book.searchInfo?.textSnippet
  return (
    <div className={classes.bookLayout}>
      <div className={classes.titleDiv}>
        <h2>{title}</h2>
      </div>
      <div className={classes.info}>
        <Image book={book} />
        <div className={classes.text}>
          {subtitle && <h3>{subtitle}</h3>}
          {textSnippet && <p>{textSnippet}</p>}
          <p>More Info</p>
        </div>
      </div>
    </div>
  )
}

export default Book
