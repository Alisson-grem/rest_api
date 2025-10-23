import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import api from '../components/Api';

export default function TelaEditarUsuario() {

type UsuarioType = {id:number, nome: string, login: string, senha: number};

const route = useRoute();

const {usuario} = route.params as {usuario: UsuarioType};

 const navigation = useNavigation();

 const [id, setId] = useState(String(usuario?.id ?? ''));
 const [nome, setNome] = useState(String(usuario?.nome ?? ''));
 const [login, setLogin] = useState(String(usuario?.login ?? ''));
 const [senha, setSenha] = useState(String(usuario?.senha ?? ''));
 return (
    <>
        <View style={styles.container}>
              <Text>Editar Cadastro do Usuario</Text>
        
              <View style={styles.bloco}>
                <TextInput 
                    placeholder='ID ...'
                    value={id}
                    onChangeText={(value)=>setId(value)}
                    editable={false}
                />
                
                <TextInput 
                    placeholder='Digite seu nome ...'
                    value={nome}
                    onChangeText={(value)=>setNome(value)}
                />

                <TextInput 
                    placeholder='Digite seu login ...'
                    value={login}
                    onChangeText={(value)=>setLogin(value)}
                />


                <TextInput 
                    placeholder='Digite a senha ...'
                    value={senha}
                    onChangeText={(value)=>setSenha(value)}
                />

                <TouchableOpacity  style={styles.btn}>
                  <Text style={styles.txtBtn} onPress={async ()=> {
                    try{
                        const resp = await api.put('usuarios',{
                                    id:id,
                                    nome: nome,
                                    login:login,
                                    senha:senha
                                });

                                alert(JSON.stringify(resp.data.message));
                                navigation.navigate('ListarUsuarios' as never);
                        }catch{
                                alert("Deu erro!");
                        }        
                    }
                        
                    }
                  >Salvar Alterações</Text>
                </TouchableOpacity>
        
                
        
              </View>
            </View>

   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold'
  },
  bloco:{
    marginLeft:'10%',
    marginRight:'10%',
    width:'80%',    
  },
  btn:{
    backgroundColor:"#6691d6ff",
    width:'100%',
    marginTop:20,
    borderRadius:20,
  },
  txtBtn:{
    textAlign:'center',
    fontSize:25
  }
});