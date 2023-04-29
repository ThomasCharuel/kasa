import React from 'react';
import PropTypes from 'prop-types';

function StayCard({ title, picture }) {
  return (
    <div>
      <img src={picture} />
      <h2>{title}</h2>
    </div>
  );
}

StayCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default StayCard;
