import {StyleSheet, Text, TextInput, View} from "react-native"
import {useState} from "react"
import usePassword from "../hooks/usePassword"

export default () => {
    const [password, setPassword] = useState('')
    const {requirements} = usePassword({cadena: password})
    
    return(
        <View style={{height: 'auto', alignSelf: 'stretch'}}>

            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder={'Ingrese su contraseña'}
                autoCapitalize="none"
            />

            <View style={{height: 'auto', alignSelf: 'stretch', padding: 10, backgroundColor: 'rgba(47,126,191,0.08)'}}>
                {
                    requirements.map(x => 
                        <Text key={x.text} style={{fontSize: 12, fontWeight: '500', color: x.complete ? '#2874A6' : '#adadad'}}>{x.text}</Text>    
                    )
                }
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#dadada',
        paddingHorizontal: 12,
        marginBottom: 12,
    }
})