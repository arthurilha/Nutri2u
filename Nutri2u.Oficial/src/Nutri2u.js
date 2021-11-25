import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import TreeButton from './components/TreeButton'

import HomeScreen from './screens/Home'
import TMBScreen from './screens/TMB'
import IMCScreen from './screens/IMC'

const Tab = createBottomTabNavigator()

const icons = {
  Home: {
    lib: FontAwesome5,
    name: 'heartbeat'
  },
  TMB: {
    lib: FontAwesome5,
    name: 'dumbbell'
  },
  IMC: {
    lib: FontAwesome5,
    name: 'weight'
  }
}

export default function Nutri2u() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name == 'Home') {
            return (
              <TreeButton
                onPress={() => navigation.navigate('Home')}
                focused={focused}
              />
            )
          }
          const { lib: Icon, name } = icons[route.name]
          return <Icon name={name} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        style: {
          borderTopColor: 'rgba(255, 255, 255, 0.2)'
        },
        activeTintColor: '#97dc26',
        inactiveTintColor: '#9A9A9D'
      }}
      >
      <Tab.Screen
        name="IMC"
        component={IMCScreen}
        options={{
          title: 'IMC'
        }}
      />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'HOME'
          }}
        />

      <Tab.Screen
        name="TMB"
        component={TMBScreen}
        options={{
          title: 'TMB'
        }}
      />
    </Tab.Navigator>
  )
}
