import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { screens } from './screens/index'
import { ApplicationProvider, Text, IconRegistry, Button, Icon, TabBar } from '@ui-kitten/components'
import { ThemeContext } from './theme-context'
import * as eva from '@eva-design/eva'
import { getAuth } from 'firebase/auth'
import { app } from './firebase'
import { AuthProvider } from './providers/auth-provider'
import 'react-native-get-random-values'
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import { Layout } from './components/Layout'
import BottomTabNavigator from './navigation/BottomTabNavigator'
import Ionicons from '@expo/vector-icons/Ionicons'
import RootNavigator from './navigation/stacks/RootNavigator'

const Stack = createNativeStackNavigator()

export default function App() {
  const store = setupStore()
  const [user, setUser] = useState('')
  const Tab = createBottomTabNavigator()

  useEffect(() => {
    if (app) {
      let auth = getAuth(app)
      setUser(auth?.currentUser?.email)
    }
  }, [getAuth])

  const someData = { someData: 'some data' }

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AuthProvider>
          <ApplicationProvider {...eva} theme={eva.light}>
            {/* <Layout> */}
            <NavigationContainer>
              {/* <Stack.Navigator>
                <Stack.Screen
                  name="HomeScreen"
                  component={screens.HomeScreen}
                  options={{
                    title: 'Home Screen',
                    headerBackButtonMenuEnabled: false,
                    headerBackButtonVisible: false,
                    headerShown: false
                  }}
                />
                <Stack.Screen name="MasterRegistrationScreen" component={screens.MasterRegistrationScreen} />
                <Stack.Screen name="MasterRegistrationScreen2" component={screens.MasterRegistrationScreen2} />
                <Stack.Screen name="CustomerScreen" component={screens.CustomerScreen} />
                <Stack.Screen name="CustomerScreen2" component={screens.CustomerScreen2} />
                <Stack.Screen name="CustomerDashBoardScreen" component={screens.CustomerDashBoardScreen} />
                <Stack.Screen name="MasterDashBoardScreen" component={screens.MasterDashBoardScreen} />
                <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
                <Stack.Screen name="TabExample" component={BottomTabNavigator} />
              </Stack.Navigator> */}
              <RootNavigator/>
              {/* <BottomTabNavigator/> */}
              {/* <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    let rn = route.name
                    if (rn === 'Calendar') {
                      iconName = focused ? 'calendar' : 'calendar-outline'
                    } else if (rn === 'Clients') {
                      iconName = focused ? 'people' : 'people-outline'
                    }  
                    else if (rn === 'SalesScreen') {
                      iconName = focused ? 'cash' : 'cash-outline'
                    }
                    else if (rn === 'Marketing') {
                      iconName = focused ? 'flash-sharp' : 'flash-outline'
                    }
                    else if (rn === 'ProfileScreen') {
                      iconName = focused ? 'home' : 'home-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray'
                })}
              >
                {/* <Tab.Screen name="Home" component={screens.HomeScreen} /> */}
                {/* <Stack.Screen name="LoginScreen" component={screens.LoginScreen} /> */}

                {/* <Tab.Screen name="Calendar" component={screens.CalendarScreen} />
                <Tab.Screen name="Clients" component={screens.ClientsScreen} />
                <Tab.Screen name="SalesScreen" component={screens.SalesScreen} />
                <Tab.Screen name="Marketing" component={screens.MarketingScreen} />
                <Tab.Screen name="ProfileScreen" component={screens.ProfileScreen} />
              </Tab.Navigator>   */}
            </NavigationContainer>
            {/* </Layout> */}
          </ApplicationProvider>
        </AuthProvider>
      </ThemeContext.Provider>
    </Provider>
    // <View>
    //   <Text>Hello, world!</Text>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
