import React from 'react'
import Answer from './Answer';
import { Box } from 'grommet';


const Answers = ({ question, handleClick, currentAnswer }) => {

	return (
		<Box gap="medium" responsive>
			<Answer
				letter="a"
				answer={question.answer_a}
				selected={currentAnswer === 'a'}
				handleClick={handleClick}
			/>
			<Answer
				letter="b"
				answer={question.answer_b}
				selected={currentAnswer === 'b'}
				handleClick={handleClick}
			/>
			<Answer
				active
				letter="c"
				answer={question.answer_c}
				selected={currentAnswer === 'c'}
				handleClick={handleClick}
			/>
		</Box>
	);
};

export default Answers;