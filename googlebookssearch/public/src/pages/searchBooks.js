import React, { Component } from "react";
import API from "../utils/API";
import { SearchCard } from "../componets/searchcard/index.js";

class Search extends Component {
    // Empty Starter State
    state = {
        search: "",
        books: [],
    };
    // This state will be modified inside the render using the methods below

    // Input Change Event Handler
    handleInputChange = (event) => {
        event.preventDefault();
        API.getGoogleBooks(this.state.search)
            .then((res) => this.setState({ books: res.data.items }))
            .catch((err) => console.log(err));
    };
    // Save Book Method
    saveBook = (id) => {
        // Destructuring to keep code DRY.
        let {
            volumeInfo: { id, title, authors, description, img, link },
        } = this.state.books.find((book) => book.id === id);
        API.saveBook({
            id: id,
            title: title,
            authors: authors,
            description: description,
            img: img,
            link: link,
        });
        alert(`${title} by ${authors} was saved!`);
    };
    // Search Page
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <label>
                            Search Google Books:
                            <input
                                type="text"
                                name="Book"
                                // Event Handler that sets the state of search every time input field changes.
                                onChange={(event) =>
                                    this.setState({ search: event.target.value })
                                }
                            />
                        </label>
                    </form>
                </div>
                <div className="row">
                    <div cassName="col-md">
                        {this.state.books.map(book => 
                            <SearchCard 
                                {...book} 
                                key={book.id}
                                saveBook={
                                    () => this.saveBook(book.id)
                                }
                                viewClick={
                                    () => this.viewClick
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    };
};
