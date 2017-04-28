import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Entrada from './Entrada'
import Operacao from './Operacao'
import Comando from './Comando'

export default class Painel extends Component {
	constructor(props){
		super(props)
//definindo a variavel na qual sera usado no componente Numero, através
//do componente Entrada
		this.state = { num1: '10', num2: '20' }

		this.calcular = this.calcular.bind(this)
	}

	calcular(){
		const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2)
		console.warn(resultado)
	}

	render(){
		return (
		<View>
			<Entrada num1={this.state.num1} num2={this.state.num2} />
			<Operacao />
			<Comando acao={this.calcular}/>
		</View>
	)
}
}

export { Painel }
