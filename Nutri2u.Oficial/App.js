import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import {createStackNavigator} from '@react-navigation/stack'

import Login from "./src/Login";
import cadastrar from './src/cadastro';
import Nutri2u from "./src/Nutri2u";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">     
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen
      name="cadastrar"
      component={cadastrar}
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen
      name="Nutri2u"
      component={Nutri2u}
      options={{
       headerTitleAlign: 'center',
       headerTintColor:"#fff",
       headerStyle:{ backgroundColor:'#97dc26'},
       headerLeft:null,
       headerTitleStyle:{
        fontWeight:'bold',
        fontSize:30,
       }
       
      }}
      />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}
