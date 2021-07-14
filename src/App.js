import SearchForm from './Components/SearchForm'
import Header from './Components/UI/Header'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SearchForm />
      </div>
    </BrowserRouter>
  )
}

export default App
