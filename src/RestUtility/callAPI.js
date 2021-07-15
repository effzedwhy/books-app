const API_KEY = 'AIzaSyAgvluil9guBcqEYeQznPqdc91wfj9Flpk';
const URL = 'https://www.googleapis.com/books/v1/volumes';
export const callAPI = (searchTerm) => {
    console.log('callAPI for ' + searchTerm);
    const url = `${URL}?q=${searchTerm}&key=${API_KEY}&maxResults=40`;
    fetch(url).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    })
}
