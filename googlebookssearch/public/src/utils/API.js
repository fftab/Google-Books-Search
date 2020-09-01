import axios from "axios";

const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=`;

export default {
    getGoogleBooks: async function (book) {
        return (await axios.get(`${BASEURL}${book}`));
    },
    getBooks: async function () {
        return (await axios.get(`/api/books`)).data;
    },
    saveBook: async function (body) {
       return (await axios.post(`/api/books`, body)).data;
    },
    deleteBook: async function (_id) {
        return (await axios.delete(`/api/books/${_id}`)).data;
    }
};