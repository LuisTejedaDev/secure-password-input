import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Input } from "./components"

export default () => {
	return(
		<>
			<SafeAreaView style={{backgroundColor: '#2874A6'}}/>
				<View style={styles.container}>
					<Input />
				</View>
			<SafeAreaView style={{backgroundColor: '#2874A6'}}/>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingHorizontal: 20
	}
})

