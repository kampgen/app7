import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Numero from './Numero'

//Arrow function sendo o "props" os parametros passados, como é só um
//não preciso por entre ()
export default props => {
	return (
	<View style={styles.numeros}>
		<Numero num={props.num1}/>
		<Numero num={props.num2} />
	</View>
)}

const styles = StyleSheet.create({
	numeros: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
})
