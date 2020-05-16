import React, { useState } from 'react';
import Progress from './Progress';
import Question from './Question';
import Answers from './Answers';
import Results from './Results';
import questions from '../assets/questions';

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

		return <div className="error">{error}</div>
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

		let vataPercentage = ((vataCount * 100) / questions.length).toFixed(2);
		let pittaPercentage = ((pittaCount * 100) / questions.length).toFixed(2);
		let kaphaPercentage =	((kaphaCount * 100) / questions.length).toFixed(2);

		let totalResults = [
			{	dosha: 'vata',
				percentage: vataPercentage,
			},
			{	dosha: 'pitta',
				percentage: pittaPercentage
			},
			{	dosha: 'kapha',
				percentage: kaphaPercentage
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
			<div className="main-container">
				<Progress total={questions.length} current={question.id} />
				{renderError()}
				<Question question={question.question} />
				<Answers question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
				<button onClick={nextQuestion}>Siguiente</button>
			</div>
		)
	}

}

export default Layout;