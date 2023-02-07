import React, { useCallback, useEffect } from 'react'

// import { IntroContainer } from '@/Containers/Welcome/IntroContainer'
// import { LoginContainer } from '@/Containers/Welcome/LoginContainer'
// import useScreenModalOptions from '@/Hooks/useScreenModalOptions'
// import { WelcomeStack } from '@/Navigators/Stacks/WelcomeStack'
import { createStackNavigator } from '@react-navigation/stack'
// import { useDispatch, useSelector } from '@/Hooks/useReduxHooks'
// import { AppActions, selectApp } from '@/Store/App'
// import { JoinAsEntityContainer } from '@/Containers/Welcome/JoinAsEntityContainer'
// import { RootStack } from '@/Navigators/Stacks/RootStack'
// import { SettingsNavigator } from './SettingsNavigator'
// import { SignUpContainer } from '@/Containers/Welcome/SignUpContainer'
import { screens } from '../../screens/index'

const Stack = createStackNavigator()

export const WelcomeRootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeNavigator">
      <Stack.Screen name="WelcomeNavigator" component={WelcomeNavigator} options={{ headerShown: false }} />
      {/* <Stack.Screen name="SettingsNavigator" component={SettingsNavigator} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  )
}

const WelcomeStackNavigator = createStackNavigator()

export const initialWelcomeNavigatorRouteName = 'Intro'
export const WelcomeNavigator = () => {
  // const { signInProgress } = useSelector(selectApp)
  // const modalOptions = useScreenModalOptions()

  // const dispatch = useDispatch()

  // const refreshSignIn = useCallback(() => {
  //   dispatch(AppActions.setSignInProgress(false))
  // }, [dispatch])

  // useEffect(() => {
  //   refreshSignIn()
  // }, [dispatch, refreshSignIn])

  return (
    <WelcomeStackNavigator.Navigator
      initialRouteName={initialWelcomeNavigatorRouteName || 'LoginScreen'}
      screenOptions={{ headerShown: false }}
    >
      {/* <WelcomeStackNavigator.Screen name="Intro" component={IntroContainer} />
      <WelcomeStackNavigator.Screen
        name="Login"
        component={LoginContainer}
        options={!signInProgress ? modalOptions : undefined}
      /> */}
      {/* <WelcomeStackNavigator.Screen
        name="JoinAsEntity"
        component={JoinAsEntityContainer}
        options={{ headerShown: true, headerBackTitleVisible: false, headerTitle: () => <></> }}
      /> */}
      {/* <WelcomeStackNavigator.Screen
        name="SignUp"
        component={SignUpContainer}
        // options={!signInProgress ? modalOptions : undefined}
      />

      <WelcomeStackNavigator.Screen
        name="HomeScreen"
        component={screens.HomeScreen}
        options={{
          title: 'Home Screen',
          headerBackButtonMenuEnabled: false,
          headerBackButtonVisible: false,
          headerShown: false
        }}
      /> */}
      <WelcomeStackNavigator.Screen
        name="HomeScreen"
        component={screens.HomeScreen}
        options={{ navigationKey: 'true', headerShown: true }}
      />
      <WelcomeStackNavigator.Screen
        name="CustomerScreen"
        component={screens.CustomerScreen}
        options={{ navigationKey: 'true', headerShown: true }}
      />
      <WelcomeStackNavigator.Screen
        name="MasterRegistrationScreen"
        component={screens.MasterRegistrationScreen}
        options={{ navigationKey: 'true', headerShown: true }}
      />
      {/* <WelcomeStackNavigator.Screen
        name="MasterRegistrationScreen2"
        component={screens.MasterRegistrationScreen2}
        options={{ navigationKey: 'true', headerShown: true }}
      />
      <WelcomeStackNavigator.Screen
        name="CustomerScreen2"
        component={screens.CustomerScreen2}
        options={{ navigationKey: 'true', headerShown: true }}
      />
      <WelcomeStackNavigator.Screen
        name="CustomerDashBoardScreen"
        component={screens.CustomerDashBoardScreen}
        options={{ navigationKey: 'true', headerShown: true }}
      />
      <WelcomeStackNavigator.Screen
        name="MasterDashBoardScreen"
        component={screens.MasterDashBoardScreen}
        options={{ navigationKey: 'true', headerShown: true }}
      />  */}
      <WelcomeStackNavigator.Screen
        name="LoginScreen"
        component={screens.LoginScreen}
        options={{ navigationKey: 'true', headerShown: true }}
      />
      {/* <WelcomeStackNavigator.Screen name="TabExample" component={BottomTabNavigator} /> */}
    </WelcomeStackNavigator.Navigator>
  )
}
