import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ListarClientes() {
 return (
    <>
        <View style={styles.bloco}>
            <TouchableOpacity>
                <Text>Cadastrar Novo Cliente</Text>
                
            </TouchableOpacity>
        </View>

        <View>
            <Text> Lista de Clientes </Text>

        </View>
    </>
    );
}

const styles = StyleSheet.create({

});