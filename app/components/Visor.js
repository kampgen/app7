import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default props => {
	return (
	<View>
		<TextInput  style={styles.visor}
		placeholder='Resultado'
		editable={false}
		value={props.resultado}
		/>
	</View>
)}

const styles = StyleSheet.create({
	visor: {
		height: 100,
		fontSize: 20
	}
})
