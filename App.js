import { React } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function CadastroScreen({ navigation }) {
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

function LoginScreen({ navigation }) {
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
        <Icon name="user-circle-o" size={120} color="#000" />

        <Text style={styles.loginText}> login</Text>

        <TextInput style={styles.input} />

        <Text style={styles.senhaText}> senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
        <TouchableOpacity style={styles.botaoLog}>
          <Text style={styles.botaoLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Cadastro")}
          style={styles.botaoCad}
        >
          <Text style={styles.botaoCadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{
            title: "Usuário",

            headerStyle: {
              backgroundColor: "#035BFF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
  botaoCad: {
    width: "85%",
    height: 70,
    backgroundColor: "#FF1010",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoCadastro: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
  },
});

export default App;
