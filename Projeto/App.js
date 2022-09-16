import { StyleSheet, Text, View,Image} from 'react-native';
import foto from './assets/adedonha.png';

export default function App(){

  return (
  <>
    <View style={styles.container}>
      <Image source={foto} defaultSource={foto} style={styles.foto}></Image>
      <Text style={styles.botaoText}>Joego</Text>

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
