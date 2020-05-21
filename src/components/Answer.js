import React from 'react';
import { Button } from 'grommet';


const Answer = ({ letter, handleClick, answer}) => {

	return (
	<Button
		fill
		secondary
		size="large"
		alignSelf="center"
		label={answer}
		value={letter}
		onClick={handleClick}>
	</Button>
	);
}

export default Answer;