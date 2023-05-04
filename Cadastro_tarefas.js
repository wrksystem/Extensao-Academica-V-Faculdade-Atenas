import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Cadastro_tarefas({}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [initialdate, setInitialDate] = useState('');
  const [finaldate, setFinalDate] = useState('');

  function handleSignIn(){
    const data = {
      title,
      description,
      initialdate,
      finaldate,
    }

    console.log(data);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> ADICIONAR TASK </Text>
      <StatusBar style="auto" />

      <View>
        <Text style={styles.subtext}>Título</Text>
        <TextInput // Input do título
          placeholder="título da tarefa"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          onChangeText={setTitle}
          value={title}
        />

        <Text style={styles.subtext}>Descrição</Text>
        <TextInput // Input da descrição
          placeholder="descrição da tarefa"
          placeholderTextColor="#becbff"
          style={styles.descriptionInput}
          onChangeText={setDescription}
          value={description}
          numberOfLines={10}
          multiline={true}
        />

        <Text style={styles.subtext}>Data de Início</Text>
        <TextInput // Input da data inicial
          placeholder="ex: 22/04/2023"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          onChangeText={setInitialDate}
          value={initialdate}
        />

        <Text style={styles.subtext}>Data Final</Text>
        <TextInput // Input da data final
          placeholder="ex: 24/05/2023"
          placeholderTextColor="#becbff"
          style={styles.textInput}
          onChangeText={setFinalDate}
          value={finaldate}
        />

        <TouchableOpacity style={styles.formButton} onPress={handleSignIn}> 
          <Text style={styles.buttonText}>SALVAR</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { //estilização padrão
    flex: 1,
    justifyContent: "center"
  },
  text: { //texto título = add task
    fontSize: 30,
    fontWeight: "800", 
    color: "#3E0CB3",
    alignItems: "center", 
    padding: 35,
    paddingHorizontal: 35
  },
  subtext:{
    fontSize: 15,
    fontWeight:"500",
    color: "#3E0CB3",  
    paddingLeft: 16        
  },
  textInput: { //inputs = caixinhas
    height: 50,
    borderWidth: 1,
    borderColor: "#becbff",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 12
  },
  descriptionInput: { //estilização do input da descrição, alterou a altura
    height: 100,
    borderWidth: 1,
    borderColor: "#becbff",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 12
  },
  formButton: { // estilização do botão em si
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
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonText: { //texto que está no botão
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5
  },
});

