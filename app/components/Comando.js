import React from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

export default props => {
	return (
	<View>
		<Button title="Calcular" onPress={props.acao} />
	</View>
)}

const styles = StyleSheet.create({
})
