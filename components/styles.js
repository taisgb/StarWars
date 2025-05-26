import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 20
    },
    boxDescricao: {
        alignItems: 'center',
        display: 'flex',
        flex: 1, 
        margin: 20,     

    },
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginTop: 30,
        backgroundColor: '#000'
    },
    botn: {
         width: 200,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    texto: {
        color:'#f3e344',
        textAlign: 'center',
        marginTop: 10,
    },
    titulo: {
        color: '#f3e344',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    


})

export default styles;