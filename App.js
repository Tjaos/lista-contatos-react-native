import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroScreen from "./screens/Cadastro";
import LoginScreen from "./screens/Login";
import ListaScreen from "./screens/Listar";
import InserirScreen from "./screens/inserir";
import AlterarScreen from "./screens/Alterar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Listar">
        <Stack.Screen
          name="Listar"
          component={ListaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Alterar"
          component={AlterarScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Inserir"
          component={InserirScreen}
          options={{ headerShown: false }}
        />
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
