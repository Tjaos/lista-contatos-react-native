import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { minhaApi } from "../helpers/api";

export default function CadastroScreen({ navigation }) {
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  async function cadastrar() {
    await axios
      .post(`${minhaApi}`, {
        email: getEmail,
        senha: getSenha,
      })
      .then(() => console.log("enviou!"))
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.containerCadastro}>
        <Text style={styles.loginText}> E-mail</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={getEmail}
        />

        <Text style={styles.senhaText}> Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
          value={getSenha}
        />
        <TouchableOpacity style={styles.botaoLog} onPress={() => cadastrar()}>
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
  containerCadastro: {
    top: "10%",
    alignItems: "center",
    width: "100%",
  },

  input: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    width: "85%",
    backgroundColor: "#ffffff",
    top: "2%",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  loginText: {
    fontSize: 30,
    marginTop: 70,
    width: "85%",
  },
  senhaText: {
    fontSize: 30,
    marginTop: 30,
    width: "85%",
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
