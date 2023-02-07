import React, { useEffect, useState } from 'react'
// import { LogBox, StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import Toast from 'react-native-toast-message'
// import { useDispatch } from '@/Hooks/useReduxHooks'
// import notifee from '@notifee/react-native'
import { NavigationContainer } from '@react-navigation/native'
// import * as SplashScreen from 'expo-splash-screen'

// import useAuthorization from '@/Hooks/useAuthorization'
// import useInternetConnection from '@/Hooks/useInternetConnection'
// import useRootNavigationState from '@/Hooks/useRootNavigationState'
// import { useToastConfig } from '@/Hooks/useToastConfig'
// import useTheme from '@/Theme/hooks/useTheme'

import { ApplicationNavigator } from './ApplicationNavigator'
// import LinkingConfiguration from '@/Navigators/LinkingConfiguration'
// import { navigationRef } from '@/Navigators/Root'
import { WelcomeRootStackNavigator } from './WelcomeNavigator'

// import { DevAppRefresh } from '@/Components/DevAppRefresh'
// import AppUpdateListener from '@/Components/Listeners/AppUpdateListener'
// import { CloudMessagingListener } from '@/Components/Listeners/CloudMessagingListener'
// import { IntercomListener } from '@/Components/Listeners/IntercomListener'
// import { NoInternetConnectionScreen } from '@/Containers/AccountStates/NoInternetConnectionScreen'
// import { Splash } from '@/Containers/Splash'

// import { AppActions } from '@/Store/App'
// import useAppSettings from '@/Hooks/useAppSettings'
// import useStatusBar from '@/Hooks/useStatusBar'
// import { useInitTranslation } from '@/Hooks/useTranslation'
import { getAuth } from 'firebase/auth'
import { app } from '../../firebase'
import BottomTabNavigator from '../BottomTabNavigator'
// if (__DEV__) {
//   // console.disableYellowBox = true
//   LogBox.ignoreAllLogs()
// }

const RootNavigator = () => {
  //   useInitTranslation()
  //   const { Colors } = useTheme()
  //   const auth = useAuthorization()
  //   const { statusBarColor, statusBarStyle } = useStatusBar()
  //   const dispatch = useDispatch()
  //   const toastConfig = useToastConfig()
  //   const { onStateChange } = useRootNavigationState()
  //   const isConnected = useInternetConnection()
  //   const { theme } = useAppSettings()
  //   const dark = theme !== 'light'
  //   const [splash, setSplash] = useState(true)

  const [user, setUser] = useState('')

  useEffect(() => {
    if (app) {
      let auth = getAuth(app)
      setUser(auth?.currentUser?.email)
    }
  }, [getAuth, app])

  console.log('====================================')
  console.log('auth+++', user)
  console.log('====================================')
  //   useEffect(() => {
  //     dispatch(AppActions.updateStatus('active'))
  //     setTimeout(() => setSplash(false), 1)
  //   }, [dispatch])

  //   useEffect(() => {
  //     if (!splash) SplashScreen.hideAsync()
  //   }, [splash])

  // Save the current route name for later comparison
  //   const currentTheme = {
  //     dark,
  //     colors: {
  //       primary: Colors.Action.Solid,
  //       background: Colors.Background.Main,
  //       card: Colors.Background.Main,
  //       text: Colors.Text.Regular,
  //       border: Colors.Background.Main,
  //       notification: Colors.Action.Solid
  //     }
  //   }

  return (
    <SafeAreaProvider>
      {/* <NavigationContainer
     theme={currentTheme}
      ref={navigationRef}
      onStateChange={onStateChange}
       linking={LinkingConfiguration}
        > */}
      {/* <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarColor} /> */}
      {/* <DevAppRefresh /> */}

      {/* <IntercomListener />

        <CloudMessagingListener />

        <AppUpdateListener user={auth.user} /> */}
      {/* <WelcomeRootStackNavigator /> */}
      {/* //TODO FIX THIS */}
      {/* {!user ? <WelcomeRootStackNavigator /> : <ApplicationNavigator />} */}
      <ApplicationNavigator />
      {/* {user && <BottomTabNavigator />} */}
      {/* {!isConnected ? (
          <NoInternetConnectionScreen />
        ) : auth.status === 'Unauthorized' ? (
          <WelcomeRootStackNavigator />
        ) : auth.status === 'Authorized' ? (
          <ApplicationNavigator />
        ) : null} */}

      {/* <Toast config={toastConfig} /> */}
      {/* </NavigationContainer> */}
      {/* <Splash visible={auth.status === 'Initializing' || splash} /> */}
    </SafeAreaProvider>
  )
}

export default RootNavigator
