import SearchForm from './Components/SearchForm'
import Header from './Components/UI/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import Books from './Components/UI/Books/Books';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const setBookData = (data) => {
    setBooks(data);
  }
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SearchForm setBookData={setBookData} />
        {books && <Books books={books} />}
      </div>
    </BrowserRouter>
  )
}

export default App
