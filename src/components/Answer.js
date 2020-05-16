import React from 'react'

const Answer = ({selected, letter, handleClick, answer}) => {
	let classes = ['answer'];

	if (selected) {
		classes.push('selected');
	}

	return (
	<button
		value={letter}
		className={classes.join(' ')}
		onClick={handleClick}>
		{answer}
	</button>
	);
}

export default Answer;