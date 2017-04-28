import React, { Component } from 'react';
import { View } from 'react-native';

//importa os componentes do arquivo index.js
import { Topo as Header, Resultado, Painel } from './components'

export default props => (
	<View>
		<Header />
		<Resultado />
		<Painel />
	</View>
)
