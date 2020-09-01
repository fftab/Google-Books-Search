import React from "react";

export const SearchResultCard = ({
  volumeInfo: {
    _id,
    title,
    authors,
    description,
    infoLink,
    imageLinks: {
      thumbnail
    }
  },
  saveBook
}) => {
  return (
    // Classes for bootstrap styling which includes margin spacing and card from bootstrap library.
    <React.Fragment className="col-md-5 m-3 card">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-subtitle">by {authors}</h4>
        <h5 className="card-text mb-2">{description}</h5>
        <a href={infoLink} target="_blank" className="card-link" rel="noopener noreferrer">Read More About {title}</a>
        <button type="button" className="btn btn-success" onClick={saveBook}><i class="fas fa-plus-circle"></i></button>
      </div>
    </React.Fragment>
  )
}