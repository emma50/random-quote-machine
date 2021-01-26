import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonComp from './ButtonComp';
import Text from './Text';
import Author from './Author';
import Link from './Link';
import quotes from '../db/quotes';
import colors from '../db/colors';

const style = {
	backgroundColor: 'white',
	marginTop: '10%',
	maxWidth: '550px',
	maxHeight: '90vh'
}

let quoteNum = Math.floor(Math.random() * quotes.length)
let colorNum = Math.floor(Math.random() * colors.length)

let newQuote = quotes[quoteNum]
let newColor = colors[colorNum]

const Index = () => {
	const [text, setQuote] = useState(newQuote.text)
	const [author, setAuthor] = useState(newQuote.author)
	const [color, setColor] = useState(newColor)

	const generateRandomQuoteAndColor = () => {
		let quoteNum = Math.floor(Math.random() * quotes.length)
		let colorNum = Math.floor(Math.random() * colors.length)

		let newQuote = quotes[quoteNum]
		let newColor = colors[colorNum]

		setQuote(newQuote.text)
		setAuthor(newQuote.author)
		setColor(newColor)
	}

	useEffect(() => {
		document.body.style.backgroundColor = color;
		document.addEventListener('load', () => {
			generateRandomQuoteAndColor()
		});
		return document.removeEventListener('load', () => {
			generateRandomQuoteAndColor()
		})
	})

	return (
		<>
			<Container fluid="sm" style={style} className='w-50 justify-content-md-center' id="quote-box">
				<div style={{
					margin: 'auto', 
					paddingTop: '20px',
					paddingBottom: '20px'
				}}>
					<Row style={{paddingBottom: '20px'}} className='text-center'>
						<Text text={text} color={color}/>
					</Row>
					<Row>
						<Author author={author} color={color}/>
					</Row>
					<Row style={{paddingTop: '20px', justifyContent: 'space-around'}}>
						<Link color={color}/>
						<ButtonComp color={color} onClick={generateRandomQuoteAndColor}/>
					</Row>
				</div>
			</Container>
		</>
	)
}

export default Index;
