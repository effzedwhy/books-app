import React from 'react'
import classes from './Book.module.css'
import Image from './Image'
// import BookDetail from '../../BookModal/BookDetail'

const Book = ({ book }) => {
  // const [showDetail, setShowDetail] = useState(false)
  console.log(book);
  const title = book.volumeInfo.title
  const subtitle = book.volumeInfo?.subtitle
  const textSnippet = book.searchInfo?.textSnippet

  // const moreButtonHandler = () => {
  //   setShowDetail(true)
  // }

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
          {/* <button className={classes.moreInfo} onClick={moreButtonHandler}>
            More Info
          </button> */}
        </div>
      </div>
      {/* {showDetail && <BookDetail title={title} subtitle={subtitle} textSnippet={textSnippet} />} */}
    </div>
  )
}

export default Book
