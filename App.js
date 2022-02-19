import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import ModalLeer from "./components/ModalLeer";

export default function App() {
  const [showModalLeer, setShowModalLeer] = useState(false);
  const [listTitulos, setListTitulos] = useState([]);

  const addBook = (titulo, page, porcentaje) => {
    if (titulo !== "" ) {
      setListTitulos((list) => [
        ...listTitulos,
        { key: Math.random().toString(), titulo, page, porcentaje },
      ]);
    } 

    setShowModalLeer(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Button
          title={"Libros que quiero leer"}
          onPress={() => setShowModalLeer(true)}
        />
      </View>

      <ModalLeer showModalLeer={showModalLeer} addBook={addBook} />
      <View style={styles.viewLibros}>
        <FlatList
          data={listTitulos}
          renderItem={(itemData) => {
            const { key, titulo, page, porcentaje } = itemData.item;
            let porce = 0;
            
            if (page === 0 && porcentaje === 0) {
              porce = 0;
            } else {
              porce = (porcentaje / page) * 100;
              porce = porce.toFixed(2);
            }

            return (
              <View style={styles.nameTitle}>
                <Text>libro: {titulo}</Text>
                <Text>
                  paginas: {porcentaje}/{page}
                </Text>
                
                <Text> porcentaje: {porce}% leido </Text>
                <View style={styles.botonEdit}>
                  <Button title="modificar"></Button>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column-reverse",
    marginTop: 40,
    backgroundColor: "#ccc",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "90%",
  },

  nameTitle: {
    marginTop: 20,
    height: 100,
    width: 300,
    backgroundColor: "orange",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  viewLibros: {
    marginTop: 40,
  },
  botonEdit: {
    alignItems: "flex-end",
  },
});
