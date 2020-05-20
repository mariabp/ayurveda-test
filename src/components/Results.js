import React from 'react'

const Results = ({ results, restart }) => {
	return  (
		<div className="results-container">
			<h1 className="result-title">Resultados</h1>
			{results.map((r, index) => {
				return (
					<div className="result">
						<h2 className="dosha" key={index}>{r.dosha}</h2>
						<h2 className="percentage" key={index}>{r.percentage} %</h2>
					</div>
				)
			})}
		<button className="restart" onClick={restart}>Empezar de nuevo</button>

		</div>
	)
}

export default Results;
