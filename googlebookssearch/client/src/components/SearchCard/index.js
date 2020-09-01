import React from "react";

export function search(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
      </div>
    );
}