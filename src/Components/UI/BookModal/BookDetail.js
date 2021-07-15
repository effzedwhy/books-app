import React from 'react'
import classes from './BookDetail.module.css'
import Image from '../Books/Book/Image'

const BookDetail = ({ title, subtitle, textSnippet }) => {
  return (
    <div className={classes.modalbackground}>
      <div className={classes.modalContainer}>
        <div className={classes.bookLayout}>
          <div className={classes.titleDiv}>
            <h2>{title}</h2>
          </div>
          <div className={classes.info}>
            <Image />
            <div className={classes.text}>
              {subtitle && <h3>{subtitle}</h3>}
              {textSnippet && <p>{textSnippet}</p>}
         
                     
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
