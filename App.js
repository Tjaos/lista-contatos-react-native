import { React, useTransition } from "react";
import { Button, TextInput, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.containerLogin}>
        <Icon style={styles.icon} name="user" size={100} color="#000" />
        <Text style={styles.login}> login</Text>
        <TextInput style={styles.input} />
        <Text style={styles.senha}> senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>

      <View style={styles.botaoLogin}>
        <Button style={styles.botaoLogin} title="Login" />
      </View>

      <View style={styles.botaoCadastro}>
        <Button style={styles.botaoCadastro} title="cadastre-se" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
  },
  containerLogin: {
    top: "15%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    height: 50,
    width: "85%",
    backgroundColor: "#fff",
    top: "32%",
  },
  icon: {
    top: "20%",
  },
  login: {
    top: "30%",
    right: "30%",
    fontSize: 30,
  },
  senha: {
    top: "30%",
    right: "30%",
    fontSize: 30,
  },
  botaoLogin: {
    height: 50,
    width: "85%",
    top: "32%",
  },
  botaoCadastro: {
    height: 50,
    width: "85%",
    top: "34%",
    color: "red",
  },
});

export default Flex;
