import React from 'react';
import { Grommet, ResponsiveContext } from 'grommet';
import './App.css';
import Layout from './components/Layout';

const myTheme = {
	global: {
	  font: {
		family: 'Poppins',
	  },
	},
  };

function App() {
	return (
		<Grommet theme={myTheme}>
			<ResponsiveContext.Consumer>
				{size => (
					<Layout/>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	);
}

export default App;
