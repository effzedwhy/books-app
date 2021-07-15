

// const API_KEY = "AIzaSyCZ0mQcXEDMiW5ahp8BuJMXBf4lG_ceqbQ";
const URL = "https://www.googleapis.com/books/v1/volumes";

export const callAPI = async (searchTerm) => {


    console.log("callAPI for " + searchTerm);
    const url = `${URL}?q=${searchTerm}&maxResults=40`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result.items;
    } catch (err) {
        console.log(err);
    }
};
