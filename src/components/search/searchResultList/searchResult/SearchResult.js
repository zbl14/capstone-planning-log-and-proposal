import React from "react";
import PropTypes from "prop-types";

const SearchResult = (props) => {
  const business = props.business;

  const tags = business.categories.map((category) => (
    <span key={business.id + category.title}>{category.title}</span>
  ));

  const addressLines = business.location.display_address.map((addressLine) => (
    <span key={business.id + addressLine}>{addressLine}</span>
  ));

  return (
    <React.Fragment>
      <div onClick={() => props.whenSearchResultClicked(business.id)}>
        <img src={business.image_url} alt="item" />
        <p>Busines Name{business.name}</p>
        <p>Review Count:{business.review_count}</p>
        <p>Rating: {business.rating}</p>
        <p>
          {business.price} {tags}
        </p>
        <p>Business Phone: {business.phone}</p>
        <p>Busines Address: {addressLines}</p>
      </div>
    </React.Fragment>
  );
};

SearchResult.propTypes = {
  business: PropTypes.object,
};

export default SearchResult;
