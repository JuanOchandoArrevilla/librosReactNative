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

  const deleteBook = (libro) => {
    setListTitulos((cur) => {
      return cur.filter((lib) => lib.key !== libro);
    })
  };

  const changeBook = (id) => {
    listTitulos.map((e) => {
      if (e.key === id) {
        e.porcentaje = 200
        
      }
      
    })
  }

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
          renderItem={(itemData , e) => {
            const { key, titulo, page, porcentaje } = itemData.item;
            let porce = 0;
            
            if (page === 0 && porcentaje === 0) {
              porce = 0;
            } else {
              porce = (porcentaje / page) * 100;
              porce = porce.toFixed(2);
            }

            return (
              <TouchableOpacity onPress={() =>deleteBook(key) } > 
              <View style={styles.nameTitle}>
                <Text  style={styles.listText}> libro: {titulo }</Text>
                <Text style={styles.listText}> paginas: {porcentaje}/{page}
                </Text>  
                <Text style={styles.listText}> porcentaje: {porce}% leido </Text>
                <View style={styles.botonEdit}>
                  <Button title="modificar" onPress={() => changeBook(key)}>  </Button>
                </View>
              </View>
              </TouchableOpacity>
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
    flex: 1,
    marginTop: 20,
    height: 100,
    width: 350,
    backgroundColor: "#91BAE3",
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    alignContent: "center",
  },
  viewLibros: {
    marginTop: 40,
  },
  botonEdit: {
    position: "absolute",
    marginTop:60,
    left:250,
  },
  listText: {
    fontSize:18,
    fontWeight: "bold",
  }
});
