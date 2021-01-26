import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col'

const Author = ({author, color}) => (
	<>
		<Col id='author' style={{color: color, textAlign: 'right'}}>- {author}</Col>
	</>
)

Author.propTypes = {
	color: PropTypes.string,
	author: PropTypes.string
};

export default Author;
