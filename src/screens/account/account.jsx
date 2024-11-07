import { Image, Text, TextInput, View,TouchableOpacity } from "react-native";
import icon from "../../constantes/icon.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./account.style.js";
import Button from "../../Components/button/button.jsx"


export default function Account() {
    return <View style = {styles.container}>
    
        <SafeAreaView style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </SafeAreaView>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Nome" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />  
            </View>
            {/* Não consigo mudar a cor do placeholder para cinza*/}
            <Button text="Criar Conta"/>
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta. </Text>
        <TouchableOpacity>
                <Text style={styles.footerlink}>
                    Fazer login.
                </Text>
        </TouchableOpacity>
        </View>
    
    </View>
}
