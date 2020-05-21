import React, { useState } from 'react';
import { Box, Stack, Paragraph, Button } from 'grommet';
import { Alert } from 'grommet-icons';
import Progress from './Progress';
import Question from './Question';
import Answers from './Answers';
import Results from './Results';
import questions from '../utils/questions';

const Layout = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [currentAnswer, setCurrentAnswer] = useState('');
	const [answers, setAnswers] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [results, setResults] = useState([]);
	const [error, setError] = useState('');

	const question = questions[currentQuestion];

	const handleClick = e => {
		setCurrentAnswer(e.target.value);
		setError('');
	}

	const renderError = () => {
		if (!error) {
			return
		}

		return (
			<Box margin="medium" direction="row"height={{ max: "small" }} align="center" justify="center" animation="pulse" gap="small">
				<Alert size="medium" color="status-warning" />
				<Paragraph color="status-warning" size="small">{error}</Paragraph>
			</Box>
		)
	};

	const calculateResults = () => {

		let vataCount = 0;
		let pittaCount = 0;
		let kaphaCount = 0;

		answers.map(answer => {

			if (answer[1] === 'a') {
				++vataCount;
			} else if (answer[1] === 'b') {
				++pittaCount;
			} else {
				++kaphaCount;
			}
			return answer;
		});

		let vataPercentage = parseFloat((vataCount * 100) / questions.length).toFixed(2);
		let pittaPercentage = parseFloat((pittaCount * 100) / questions.length).toFixed(2);
		let kaphaPercentage =	parseFloat((kaphaCount * 100) / questions.length).toFixed(2);

		let totalResults = [
			{	dosha: 'vata',
				percentage: +vataPercentage,
				color: 'accent-3'
			},
			{	dosha: 'pitta',
				percentage: +pittaPercentage,
				color: 'status-critical'
			},
			{	dosha: 'kapha',
				percentage: +kaphaPercentage,
				color: 'accent-2'
			},
		];

		setResults(totalResults);

		return totalResults;
	}

	const nextQuestion = () => {
		const answer = [question.id, currentAnswer];

		if (!currentAnswer) {
			setError('Selecciona una opción antes de continuar...');
			return;
		}

		answers.push(answer);
		setAnswers(answers);
		setCurrentAnswer('');

		if (currentQuestion + 1 < questions.length){
			setCurrentQuestion(currentQuestion + 1);
			return;
		}

		setShowResults(true);
		calculateResults();

	};

	const restart = () => {
		setAnswers([]);
		setCurrentAnswer('');
		setCurrentQuestion(0);
		setShowResults(false);
	}

	if (showResults) {

		return <Results results={results} restart={restart}/>

	} else {

		return (
			<Box align="center" responsive gap="small" width="100%">
				<Progress total={questions.length} current={question.id} />
				<Stack>{renderError()}</Stack>
				<Question question={question.question} />
				<Answers question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
				<Button primary label="Siguiente" onClick={nextQuestion}></Button>
			</Box>
		)
	}

}

export default Layout;