import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

//import database from "./src/config/firebaseconfig"; apenas retirar do comentário para usar a importação

import Cadastro_tarefas from "./src/screens/Cadastro_tarefas";
import Cadastro_usuario from "./src/screens/Cadastro_usuario";
import Login from "./src/screens/Login_usuario";

const Drawer = createDrawerNavigator();

function MeuDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#e8e8e7",
          width: 240,
          primary: "rgb(179, 129, 230)",
        },
      }}
    >
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cadastro Usuario" component={Cadastro_usuario} />
      <Drawer.Screen name="Cadastro de Tarefas" component={Cadastro_tarefas} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
  <NavigationContainer >
    <MeuDrawer />
  </NavigationContainer >
  );
}
