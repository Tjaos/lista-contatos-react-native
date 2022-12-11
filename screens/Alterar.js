import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { ListItem, Avatar, Header } from "react-native-elements";
import axios from "axios";
import { apiProfessorNilson } from "../helpers/api";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function InserirScreen({ route, navigation }) {
  const [getNome, setNome] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getCpf, setCpf] = useState();
  const [getId, setId] = useState();

  useEffect(() => {
    if (route.params) {
      const { nome, cpf, telefone, id } = route.params;

      setNome(nome);
      setCpf(cpf);
      setTelefone(telefone);
      setId(id);
    }
  }, []);

  async function alterarDados() {
    await axios
      .put(`${apiProfessorNilson}/${getId}`, {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf,
      })
      .then(() =>
        showMessage({
          message: "Registro alterado com sucesso!",
          type: "success",
        })
      )
      .catch((error) => console.log(error));
  }

  function messageExcluir() {
    showMessage({
      message: "registro excluído com sucesso!",
      type: "danger",
    });
    excluirDados();
  }
  async function excluirDados() {
    await axios
      .delete(`${apiProfessorNilson}/${getId}`)
      .then(
        setNome(null),
        setTelefone(null),
        setCpf(null),
        setId(null),
        navigation.navigate("Listar")
      )
      .catch((error) => console.log(error));
  }

  return (
    <View>
      <FlashMessage position="top" />
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: "#fff",
          onPress: () => navigation.navigate("Listar"),
          iconStyle: { color: "#fff" },
        }}
        centerComponent={{
          text: "Inserir Contato",
          style: {
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: 25,
          },
        }}
      />
      <View style={styles.containerLogin}>
        <Text style={styles.loginText}>Digite seu Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={getNome}
        ></TextInput>

        <Text style={styles.loginText}>Digite seu Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTelefone({ place: text })}
          value={getTelefone}
        ></TextInput>

        <Text style={styles.loginText}>Digite seu Cpf</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCpf(text)}
          value={getCpf}
        ></TextInput>

        <TouchableOpacity
          style={styles.botaoLog}
          onPress={() => alterarDados()}
        >
          <Text style={styles.botaoLogin}>Alterar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoExcluir}
          onPress={() => messageExcluir()}
        >
          <Text style={styles.botaoLogin}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
  },
  containerLogin: {
    top: "10%",
    alignItems: "center",
    width: "100%",
  },
  input: {
    alignItems: "center",
    height: 55,
    width: "85%",
    backgroundColor: "#ffffff",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  loginText: {
    fontSize: 25,
  },
  botaoLog: {
    width: "85%",
    height: 70,
    backgroundColor: "#035BFF",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoLogin: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
  },
  botaoExcluir: {
    width: "85%",
    height: 70,
    backgroundColor: "red",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
