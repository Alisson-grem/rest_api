import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Gerenciamento de Festa</Text>

            <View style={styles.bloco}>
                <TouchableOpacity style={styles.btn}
                onPress={()=> navigation.navigate('Listar Clientes' as never)}
                >
                    
                    <Text style={styles.txtBtn}>Clientes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txtBtn}>Usuários</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bloco: {
        width: '100%'
    },
    btn: {
        backgroundColor: '#c11b1b',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop:20,
        padding:20,
        borderRadius:20
    },
    txtBtn: {
        textAlign:'center',
        fontSize:20
    }
});