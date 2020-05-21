import React, { Fragment } from 'react';
import { Meter } from 'grommet';


const Progress = ({ current, total }) => {

	return (
		<Fragment>
			<h2>Pregunta {current} de {total}</h2>
			<Meter type="bar" round background="light-2" values={[{ value: (current / total) * 100 }]}>
			</Meter>
		</Fragment>
	)
}

export default Progress;