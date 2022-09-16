import { StyleSheet, Text,} from 'react-native';
import { Children } from 'react';

export default function AppName({Children}){

  return (
  <>
    <Text style={styles.AppName}>
        {Children}
    </Text>
  </>
  );
}


const styles = StyleSheet.create({
  AppName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});
