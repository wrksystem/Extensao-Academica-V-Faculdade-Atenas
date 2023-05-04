import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login_Usuario({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    const data = {
      username,
      email,
      password,
    };

    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <StatusBar style="auto" />

      <View>                        
        <TextInput // Input do email do usuário
          placeholder="Email"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
        />

        <TextInput // Input da senha do usúario
          placeholder="Senha"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity style={styles.formButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>ACESSAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //estilização padrão
    flex: 1,
    justifyContent: "center",
  },
  text: {
    //texto título = Login
    fontSize: 40,
    fontWeight: "800",
    color: "#3E0CB3",
    alignItems: "center",
    padding: 35,
    paddingHorizontal: 35,
  },
  textInput: {
    //inputs = caixinhas
    height: 50,
    borderWidth: 1,
    borderColor: "#becbff",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 12,
  },
  formButton: {
    // estilização do botão em si
    backgroundColor: "#3E0CB3",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000", //sombreamento
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    //texto que está no botão
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
});
