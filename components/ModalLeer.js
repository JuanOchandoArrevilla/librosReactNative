import { StyleSheet, View, Modal, TextInput, Button } from "react-native";
import { useState } from "react";

const ModalLeer = ({ showModalLeer, addBook }) => {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  const validarTitle = () => {
     if (page < porcentaje) {
      addBook(title, 0, 0);
      setTitle("");
      setPage(0);
      setPorcentaje(0);
     } else {
      addBook(title, page, porcentaje);
      setTitle("");
      setPage(0);
      setPorcentaje(0);
     }
   
  };

  

  return (
    <Modal visible={showModalLeer} animationType={"fade"} transparent={true}>
      <View style={styles.viewLeer}>
        <TextInput
          style={styles.inputLeer}
          placeholder="title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.inputLeer}
          placeholder="numero de paginas"
          value={page}
          onChangeText={setPage}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.inputLeer}
          placeholder="paginas leidas"
          value={porcentaje}
          onChangeText={setPorcentaje}
          keyboardType="number-pad"
        />
        <Button style={styles.botonLeer} title="add" onPress={validarTitle} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputLeer: {
    width: "10%",
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 60,
  },
  botonLeer: {
    width: "5%",
  },
  viewLeer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
    flex: 1,
    
  },
 
});
export default ModalLeer;
