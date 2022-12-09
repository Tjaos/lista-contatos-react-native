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

export default function InserirScreen({ route, navigation }) {
  const [getNome, setNome] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getCpf, setCpf] = useState();

  async function inserirDados() {
    /* axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";*/
    await axios
      .post("http://professornilson.com/testeservico/clientes", {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View>
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
          onChangeText={(text) => setTelefone(text)}
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
          onPress={() => inserirDados()}
        >
          <Text style={styles.botaoLogin}>Salvar</Text>
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
    top: "20%",
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
});
