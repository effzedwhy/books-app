import React from 'react'
import classes from './Image.module.css'

const image = ({ image,buyLink,title }) => {
  

  return (
    <div className={classes['image-container']}>
      {image && (
        <img src={image} alt={title} className={classes.image}></img>
      )}
      <section className={classes.bottomSection}>
        {buyLink && (
          <a className={classes.buy} href={buyLink} target="_blank">
            Buy this book?
          </a>
        )}
      </section>
    </div>
  )
}

export default image
