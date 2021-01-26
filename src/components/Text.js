import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Text = ({text, color}) => (
	<Col 
		id='text' 
		style={{color: color, fontSize: '25px'}}
	>
		<FontAwesomeIcon 
			icon={['fas', 'quote-left']} 
			size="lg"
		/> {text}
	</Col>
)
Text.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

export default Text;

// import PropTypes from 'prop-types';
// Text.propTypes = {
// 	color: PropTypes.string,
// 	text: PropTypes.string
// };