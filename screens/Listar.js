import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header, Button } from "react-native-elements";
import { ListItem, Avatar } from "react-native-elements";
import axios from "axios";

export default function ListaScreen({ route, navigation }) {
  const [list, setlist] = useState([]);

  useEffect(() => {
    function consultarDados() {
      axios
        .get("http://professornilson.com/testeservico/clientes")

        .then(function (response) {
          setlist(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    consultarDados();
  });

  return (
    <View>
      <Header
        centerComponent={{ text: "Listagem", style: { color: "#fff" } }}
        rightComponent={
          <Button title="+" onPress={() => navigation.navigate("Inserir")} />
        }
      />
      <ScrollView>
        {list.map((linha, indice) => (
          <ListItem key={indice} bottomDivider>
            <Avatar
              source={{
                uri: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y",
              }}
              onPress={() =>
                navigation.navigate("Alterar", {
                  nome: linha.nome,
                  telefone: linha.telefone,
                  cpf: linha.cpf,
                  id: linha.id,
                })
              }
            />
            <ListItem.Content>
              <ListItem.Title>{linha.nome}</ListItem.Title>
              <ListItem.Subtitle>{linha.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}
