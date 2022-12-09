import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function CadastroScreen({ navigation }) {
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

        <TextInput style={styles.input} />

        <Text style={styles.senhaText}> Senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
        <TouchableOpacity style={styles.botaoLog}>
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
    top: "32%",
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
