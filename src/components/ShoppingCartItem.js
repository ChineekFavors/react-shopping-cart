import React from 'react';

const Item = props => {
	console.log('shoppingCartItem.js:Item:props', props);
	const removeItem = (e) => {
		e.preventDefault();
		return console.log(props);
	};
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={removeItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
