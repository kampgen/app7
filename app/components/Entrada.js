import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Numero from './Numero'

//Arrow function sendo o "props" os parametros passados, como é só um
//não preciso por entre ()
//se esse componente fosse uma classe, usaria o this.props ao invés de só props para passar os parametros
//porque um componente funcional passa os props automaticamente pelo parametro "props"

export default props => {
	return (
	<View style={styles.numeros}>
		<Numero num={props.num1} atualizaValor={props.atualizaValor} nome='num1' />
		<Numero num={props.num2} atualizaValor={props.atualizaValor} nome='num2' />
	</View>
)}

const styles = StyleSheet.create({
	numeros: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
})
