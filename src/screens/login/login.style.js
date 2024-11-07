import {COLORS, FONT_SIZE} from "../../constantes/theme.js";

export const styles = {

    container:{
        backgroundcolor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between",  
    },

    containerLogo:{
        alignItems: "center"
    },

    logo: {
        width: 100,
        height: 23
    },

    containerInput: {
        marginBotton:20, // Não esta funcionando tb
    },

    input: {
        backgroundcolor: COLORS.gray1, //Não esta funcionando a cor
        padding: 10,
        borderadius: 6
    },

    footer:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    footerlink: {
        color: COLORS.blue
    }

}