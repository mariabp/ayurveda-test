import React from 'react'
import Answer from './Answer';
import { Box } from 'grommet';


const Answers = ({ question, handleClick }) => {

	return (
		<Box gap="medium" responsive>
			<Answer
				letter="a"
				answer={question.answer_a}
				handleClick={handleClick}
			/>
			<Answer
				letter="b"
				answer={question.answer_b}
				handleClick={handleClick}
			/>
			<Answer
				active
				letter="c"
				answer={question.answer_c}
				handleClick={handleClick}
			/>
		</Box>
	);
};

export default Answers;