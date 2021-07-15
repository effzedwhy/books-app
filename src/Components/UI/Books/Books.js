import React from 'react'
import Book from './Book/Book';
import classes from './Books.module.css';

const Books = props => {
    const books = props.books;
    return (
        <ul className={classes.outerSection}>
            {
                books.map(book => <li key={book.id}><Book book={book} /></li>)
            }
        </ul>
    )
}

export default Books
