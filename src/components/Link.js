import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({color}) => (
	<>
		<Button 
			href='https://twitter.com/intent/tweet' 
			style={{
				backgroundColor: color, 
				color: 'white'
			}}
			id="tweet-quote"
		>
			<FontAwesomeIcon icon={['fab', 'twitter']}/>
		</Button>
	</>
)

Link.propTypes = {
	color: PropTypes.string
};

export default Link;
