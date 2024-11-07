import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import icon from "../../constantes/icon.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./login.style.js";
import Button from "../../Components/button/button.jsx"


export default function Login() {
    return <View style = {styles.container}>
    
        <SafeAreaView style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </SafeAreaView>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />  
            </View>
            {/* Não consigo mudar a cor do placeholder para cinza*/}
            <Button text="Acessar"/>
        </View>

        <View style={styles.footer}>
            <Text>Não tenho conta.</Text>
        <TouchableOpacity>
                <Text style={styles.footerlink}>
                    Criar conta agora.
                </Text>
        </TouchableOpacity>
        </View>
    
    </View>
}
