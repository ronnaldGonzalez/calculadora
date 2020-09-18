import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ value }) => (
    <div className="result">
        <span>{value}</span>
    </div>
);

Result.PropsTypes = {
    value: PropTypes.string.isRequired,
}
Result.defaultProps = {
    value: "0"
}

export default Result;