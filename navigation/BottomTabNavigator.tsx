/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { screens } from '../screens/index'
// import Colors from '../constants/Colors'
// import useColorScheme from '../hooks/useColorScheme'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
// import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let rn = route.name
          if (rn === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline'
          } else if (rn === 'Clients') {
            iconName = focused ? 'people' : 'people-outline'
          } else if (rn === 'SalesScreen') {
            iconName = focused ? 'cash' : 'cash-outline'
          } else if (rn === 'Marketing') {
            iconName = focused ? 'flash-sharp' : 'flash-outline'
          } else if (rn === 'ProfileScreen') {
            iconName = focused ? 'home' : 'home-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name="Home" component={screens.HomeScreen} />
      <Tab.Screen name="Calendar" component={screens.CalendarScreen} />
      <Tab.Screen name="Clients" component={screens.ClientsScreen} />
      <Tab.Screen name="SalesScreen" component={screens.SalesScreen} />
      <Tab.Screen name="Marketing" component={screens.MarketingScreen} />
      <Tab.Screen name="ProfileScreen" component={screens.ProfileScreen} />
    </Tab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof Ionicons>['name']
//   color: string
// }) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
 