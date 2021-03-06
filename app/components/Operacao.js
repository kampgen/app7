import React, { Component } from 'react'
import { View, Picker, StyleSheet } from 'react-native'

export default class Operacao extends Component {
	render(){
	return (
		// label é exibido, value é o valor que ele irá atribuir
		<Picker
		style={styles.operacao}
		selectedValue={this.props.operacao}
		onValueChange={op => {this.props.atualizaOperacao(op)}}>
			<Picker.Item label="Soma" value="soma" />
			<Picker.Item label="Subtracão" value="subtracao" />
		</Picker>
)}
}

const styles = StyleSheet.create({
	operacao: {
		marginTop: 15,
		marginBottom: 15
	}
})
