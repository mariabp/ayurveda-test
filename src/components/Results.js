import React from 'react'

const Results = ({ results, restart }) => {
	return  (
		<div className="results-container">
			<h1>Resultados</h1>
			{results.map((r, index) => {
				return (
					<div className="result">
						<h2 clasName="dosha" key={index}>{r.dosha}</h2>
						<h2 clasName="percentage" key={index}>{r.percentage}</h2>
					</div>
				)
			})}
		<button onClick={restart}>Empezar de nuevo</button>

		</div>
	)
}

export default Results;
