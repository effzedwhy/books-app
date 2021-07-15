import React from 'react';
import classes from './Book.module.css'

const Book = ({ book }) => {
    const title = book.volumeInfo.title;
    const subtitle = book.volumeInfo?.subtitle;
    const textSnippet = book.searchInfo.textSnippet;
    return (
        <div className={classes.bookLayout}>
            <h2>{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <p>{textSnippet}</p>
        </div>
    )
}

export default Book
