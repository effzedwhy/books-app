import { Fragment, useState } from "react";

const CallAPI = (props) => {
  const [booksData, setBooksData] = [];
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(
    "https://www.googleapis.com/books/v1/volumes?q="
  );

  const query = 
  const getUrl = url + query + "&key=AIzaSyCZ0mQcXEDMiW5ahp8BuJMXBf4lG_ceqbQ";
  console.log(url);
  setUrl(getUrl);
  console.log(url);

  async function fetchData() {
    setIsLoading(true);
    setError(null);

    try {
      const response = fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      if (response.ok) {
        console.log("data");
      }

      const data = response.json();

      const getData = data.map((books) => {
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
        };
      });

      setBooksData(getData);
      setIsLoading(false);
      console.log(getData);
    } catch (error) {
      setError(error.message);
    }
  }

  const loadingText = <p>Loading</p>;

  const errorText = <p>Something went wrong.</p>;

  return (
    <Fragment>
      <div>
        <p>{error && !isLoading && errorText}</p>
        <p>{isLoading && loadingText}</p>
        <div>{booksData}</div>
      </div>
    </Fragment>
  );
};

export default CallAPI;
