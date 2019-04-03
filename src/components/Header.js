import React from 'react';
import PropTypes from 'prop-types';

//stateless component
export const Header = (props) => {
	return (
		<h2>{props.initialTitle}</h2>
	);
};

Header.propTypes = {
	initialTitle: PropTypes.string
};