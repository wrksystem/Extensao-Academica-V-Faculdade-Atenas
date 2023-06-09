import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro_usuario({}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState (true);

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
      <Text style={styles.text}>CADASTRE-SE</Text>
      <StatusBar style="auto" />

      <View>
        <TextInput // Input do nome do usuário
          placeholder="Nome"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          onChangeText={setUsername}
          value={username}
        />

        <TextInput // Input do email do usuário
          placeholder="Email"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
        />
            
        <View style={styles.inputPassword}>
          <TextInput // Input da senha do usúario
            placeholder="Senha"
            placeholderTextColor="#becbff"
            style={styles.textInput}
            secureTextEntry={hidePass}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity
            onPress={() => setHidePass(!hidePass)}
          >
            {hidePass ? (
              <Ionicons name="eye" color="#becbff" size={25} />
            ) : (
              //mostrar tracinho no olho
              <Ionicons name="eye-off" color="#becbff" size={25} />
            )}
              </TouchableOpacity></View>

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
    //texto título = cadastro
    fontSize: 40,
    fontWeight: "800",
    color: "#3E0CB3",
    alignItems: "center",
    padding: 35,
    paddingHorizontal:  '16%'
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
    width: '85%'
  },
  inputPassword:{ // style da view
    flexDirection: 'row',
    width: '90%',
    alignItems:'center',
    justifyContent: 'center'
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
