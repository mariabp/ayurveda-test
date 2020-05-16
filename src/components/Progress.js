import React from 'react'

const Progress = ({ current, total }) => {
	return (
		<div>
			<h2>Pregunta {current} of {total}</h2>
		</div>
	)
}

export default Progress;