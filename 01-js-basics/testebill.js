import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Date, TouchableOpacity, Alert, Switch} from 'react-native';


export default function App() {

  const[nome,setNome] = useState('');
  const[data,setData] = useState('');
  const[genero,setGenero] = useState('');
  const toggleSwitch = () => setGenero((previousState) => !previousState);

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
        placeholder='Data de Nascimento' 
        style={styles.input}
        onChangeText={Text=>setData(Text)}
      ></TextInput>

      <Switch
       trackColor={{ false: "#FFC0CB", true: "#81b0ff" }}
       thumbColor={genero ? "#81b0ff": "ffc0cb"}
       onValueChange={toggleSwitch}
       value={genero}

      />

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
