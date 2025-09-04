import { View, Text, TouchableOpacity} from 'react-native'


interface propCliente{
    id:number,
    nome:string,
    cpf:string,
    saldo:number
}

export default function Cliente ({id, nome, cpf, saldo}:propCliente){

    return(
        <>
            <Text>Cod:{id}</Text>
            <Text>Nome:{nome}</Text>
            <Text>CPF:{cpf}</Text>
            <Text>Saldo:{saldo}</Text>
        </>
    )
}