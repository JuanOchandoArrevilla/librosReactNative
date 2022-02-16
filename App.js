import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from "react";

export default function App() {

  const [showModalLeer, setShowModalLeer] = useState(false);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.locateBotom1} onPress={() => }>  
      <View style={styles.personalizarBotom}>
        <Text >Libros que quiero leer</Text>     
      </View>
     </TouchableOpacity>

     <TouchableOpacity style={styles.locateBotom}>  
      <View style={styles.personalizarBotom}>
      <Text >Libros que he leido</Text>
      </View>
     </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  personalizarBotom: {
    backgroundColor: '#5856D6',
    width: 70,
    height: 40,
  },
  locateBotom: {
    position: 'absolute',
    bottom:10,
    right:10
  },
  locateBotom1: {
    position: 'absolute',
    bottom:10,
    right:100
  }
});
