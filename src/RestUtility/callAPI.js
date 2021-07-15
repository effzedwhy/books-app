

// const API_KEY = "AIzaSyCZ0mQcXEDMiW5ahp8BuJMXBf4lG_ceqbQ";
const URL = "https://www.googleapis.com/books/v1/volumes";

export const callAPI = (searchTerm) => {


  console.log("callAPI for " + searchTerm);
  const url = `${URL}?q=${searchTerm}&maxResults=40`;
  fetch(url)
    .then((response) => console.log(response.json()))
    .then(data => data.map((books) => {
        return {
          id: books.items.id,
          link: books.items.selfLink,
          title: books.items.volumeInfo.title,
          subtitle: books.items.volumeInfo.subtitle,
          authors: books.items.volumeInfo.authors, //array
          description: books.items.volumeInfo.description,
          barcode: books.items.volumeInfo.industryIdentifiers[0].identifier, //isbn_13
          categories: books.items.volumeInfo.categories, //array
          averageRating: books.items.volumeInfo.averageRating,
          image: books.items.volumeInfo.imageLinks.thumbnail,
          buyLink: books.items.volumeInfo.saleInfo.buyLink,
          snippet: books.items.volumeInfo.searchInfo.textSnippet,
     } }))
    .catch((err) => {
      console.log(err);
    })
};
