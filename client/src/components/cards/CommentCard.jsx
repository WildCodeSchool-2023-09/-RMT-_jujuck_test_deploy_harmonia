import React from "react";
import PropTypes from "prop-types";
import Rating from "react-rating";

function CommentCard({ comment }) {
  const date = new Date(comment.created_at).toLocaleDateString();
  return (
    <div className="card m-2">
      <div className="card-body text-center">
        <h5 className="card-title">Commentaire : {comment.note}</h5>
        <p className="card-text">
          Note:{" "}
          <Rating start={0} stop={5} initialRating={comment.rating} readonly />
        </p>
        <p className="card-text">Date : {date}</p>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    note: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentCard;
