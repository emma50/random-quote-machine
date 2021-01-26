import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const ButtonComp = ({color, onClick}) => (
	<>
		<Button 
				style={{
					backgroundColor: color, 
					color: 'white',
					//width: 'fit-content'
				}} 
				onClick={onClick} 
				id='new-quote'
			>
				New Quote
		</Button>
	</>
)

ButtonComp.propTypes = {
	color: PropTypes.string,
	onClick: PropTypes.func
};

export default ButtonComp;
