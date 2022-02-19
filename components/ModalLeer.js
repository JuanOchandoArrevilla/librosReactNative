import { StyleSheet, View, Modal, TextInput, Button } from "react-native";
import { useState } from "react";

const ModalLeer = ({ showModalLeer, addBook }) => {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  const validarTitle = () => {
    addBook(title, page, porcentaje);
    setTitle("");
    setPage(0);
    setPorcentaje(0);
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
        />
        <TextInput
          style={styles.inputLeer}
          placeholder="paginas leidas"
          value={porcentaje}
          onChangeText={setPorcentaje}
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
    borderBottomColor: "pink",
    borderBottomWidth: 1,
    height: 60,
  },
  botonLeer: {
    width: "5%",
  },
  viewLeer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 20,
    flex: 1,
  },
 
});
export default ModalLeer;
