import React from 'react';
import { Text } from 'grommet';


const Question = ({ question }) => {

	return (
		<div>
			<Text size="xxlarge" className='question'>{question}</Text>
		</div>
	)
};

export default Question;