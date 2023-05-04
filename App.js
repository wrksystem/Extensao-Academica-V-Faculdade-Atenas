import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// Importe das telas criadas 
import Cadastro_de_tarefas from './Cadastro_tarefas';
import Cadastro_de_usuario from './Cadastro_usuario';



export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='cadastro_tarefas' component={Cadastro_de_tarefas}/>
        <Stack.Screen name='cadastro_usuario' component={Cadastro_de_usuario}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}