import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';


export default function App() {

  const[nome,setNome] = useState('');
  const[email,setEmail] = useState('');
  const[senha,setSenha] = useState('');

  const cadastro = () =>{
    //alert(nome);
    //alert(email);
    //alert(senha);
    //fazer chamada no back-end para  cadastro.
  }

  return (
  <>
    <View style={styles.container}>
      <Image source={require('./assets/bill.png')} 
      style={styles.foto}
      
      ></Image>

      <TextInput 
        placeholder='Digite seu Nome' 
        style={styles.input}
        onChangeText={text=>setNome(text)}
      ></TextInput>

      <TextInput 
        placeholder='Digite seu Email' 
        style={styles.input}
        onChangeText={text=>setEmail(text)}
      ></TextInput>

      <TextInput 
        placeholder='Digite uma Senha' 
        style={styles.input}
        onChangeText={text=>setSenha(text)}
        secureTextEntry={true}
      ></TextInput>

      <TouchableOpacity
        style={styles.botao}
        onPress={()=> cadastro()}
      >
        <Text style={styles.botaoText}
        >Cadastrar
        </Text>
      </TouchableOpacity>

      
      
    </View>

    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424082',
    alignItems: 'center',
    justifyContent: 'center',
  },

  foto: {
    width:150,
    height:150,
    borderRadius: 100,
  },

  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    borderRadius:10,

  },

  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },

});
