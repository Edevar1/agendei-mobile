import { Alert, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import {styles} from "./button.style"

export default function Button (props) {

    function TesteClick(){
        Alert.alert("Clicou no nosso botão")
    }

    return <TouchableOpacity onPress={TesteClick} style={styles.btn}>
         <Text style={styles.text}>
            {props.text}
            </Text>
    </TouchableOpacity>
}

