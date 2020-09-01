import React, { Component } from "react";
import API from "../utils/API";
import { SavedResultCard } from "../components/SavedResultCard/index.js";

class Saved extends Component {
    // Empty Starter State
    state = {
        books: []
    };
    // This state will be modified inside the render using the methods below

    getBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res }))
            .catch(error => console.log(error))
    }

    componentDidMount() { this.getBooks() };

    handleDelete = (id) => {
        API.deleteBook(id)
            .then(res => this.getBooks())
            .catch(err => console.log(err))
    }

    // Saved Page
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {this.state.books.map(book =>
                            <SavedResultCard
                                {...book}
                                key={book.id}
                                handleDelete={
                                    () => this.handleDelete(book._id)
                                }
                                viewClick={
                                    () => this.viewClick
                                }
                            />
                        )}
                    </div>
                </div>
            </>
        );
    };
};

export default Saved;