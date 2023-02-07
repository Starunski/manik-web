import React, { useEffect } from 'react'
import { screens } from '../../screens/index'
// import { InformationModalContainer } from '@/Components/InformationModal'
// import { MarketStatusListener } from '@/Components/Listeners/MarketStatusListener'
// import { RealtimeTickerSubscriber } from '@/Components/Listeners/RealtimeTickerSubscriber'
// import { AccountStatesContainer } from '@/Containers/AccountStates/AccountStatesContainer'
// import { FrozenOrBlockedAccountContainer } from '@/Containers/AccountStates/FrozenOrBlockedAccountContainer'
// import { CustomerAgreementsContainer } from '@/Containers/ActionRequired/CustomerAgreementsContainer'
// import { PhoneVerificationContainer } from '@/Containers/ActionRequired/PhoneVerificationContainer'
// import { CustomNotificationsListener } from '@/Containers/CustomNotifications/CustomNotificationsListener'
// import { DepositSuccessResultContainer } from '@/Containers/Deposit/DepositSuccessResultContainer'
// import { ErrorSplash } from '@/Containers/ErrorSplash'
// import { AboutUsContainer } from '@/Containers/Home/AboutUsContainer'
// import { HomeActionRequiredModal } from '@/Containers/Home/HomeActionRequiredModal'
// import { LoggedSplash } from '@/Containers/LoggedSplash'
// import { NewsContainer } from '@/Containers/News/NewsContainer'
// import { PaymentMethodsIntro } from '@/Containers/PaymentMethods/Intro_v2/PaymentMethodsIntro'
// import { AddCardModal } from '@/Containers/PaymentMethods/Modals/AddCardModal'
// import { PaymentMethodEditModalContainer } from '@/Containers/PaymentMethods/Modals/PaymentMethodEditModalContainer'
// import { Verify3DSecureCardModal } from '@/Containers/PaymentMethods/Modals/Verify3DSecureCardModal'
// import { PickerContainer } from '@/Containers/Pickers/PickerContainer'
// import { ResultContainer } from '@/Containers/ResultContainer'
// import { SecurityScreen } from '@/Containers/SecurityScreen'
// import { SettingsContainer } from '@/Containers/Settings/SettingsContainer'
// import { UnlockAllFeaturesScreen } from '@/Containers/UnlockAllFeaturesScreen'
// import { AddToWatchlistModalContainer } from '@/Containers/Watchlist/AddToWatchlistModalContainer'
// import { WatchlistControlModalContainer } from '@/Containers/Watchlist/WatchlistControlModalContainer'
// import useAccount from '@/Hooks/useAccount'
// import useApplication from '@/Hooks/useApplication'
// import { useRootNavigation } from '@/Hooks/useNavigation'
// import useScreenModalOptions from '@/Hooks/useScreenModalOptions'
// import useTradingAccount from '@/Hooks/useTradingAccount'
// import { AssetNavigator } from '@/Navigators/AssetNavigator'
// import { ContactsNavigator } from '@/Navigators/ContactsNavigator'
// import { DepositNavigator } from '@/Navigators/DepositNavigator'
// import { InvestmentNavigator } from '@/Navigators/InvestmentNavigator'
// import InvestorQuizNavigator from '@/Navigators/InvestorQuizNavigator'
// import MainNavigator from '@/Navigators/MainNavigator'
// import { NotificationsNavigator } from '@/Navigators/NotificationsNavigator'
// import OnboardingNavigator from '@/Navigators/OnboardingNavigator'
// import { SettingsNavigator } from '@/Navigators/SettingsNavigator'
// import { SocialNavigator } from '@/Navigators/SocialNavigator'
// import { RootStack } from '@/Navigators/Stacks/RootStack'
// import { StrategiesNavigator } from '@/Navigators/StrategiesNavigator'
// import { TradeNavigator } from '@/Navigators/TradeNavigator'
// import { WalletNavigator } from '@/Navigators/WalletNavigator'
// import WatchlistNavigator from '@/Navigators/WatchlistNavigator'
// import { WithdrawNavigator } from '@/Navigators/WithdrawNavigator'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { BottomNavigation } from '@ui-kitten/components'
import BottomTabNavigator from '../BottomTabNavigator'

const ApplicationNavigatorStack = createStackNavigator()
export const initialRouteName = 'MasterDashBoardScreen'
export const animationOptions = {}

export const ApplicationNavigator = () => {
  // const navigation = useRootNavigation()
  //   const modalOptions  = useScreenModalOptions()
  //   const { isRejected } = useTradingAccount()
  //   const { isAccountBlocked, isAccountDeleted } = useAccount()
  //   const { loading, loadingError, requiredRouteName, initialRouteName } = useApplication()

  //   const isAccountClosedOrRejected = isRejected || isAccountBlocked

  //   const animationOptions  = {
  //     transitionSpec: {
  //       open: { animation: 'timing', config: { duration: 150 } },
  //       close: { animation: 'timing', config: { duration: 150 } }
  //     }
  //   }
  //   const options  = { headerShown: false }

  //   const mainNavigatorOptions = {
  //     ...options,
  //     animationEnabled: false,
  //     headerShown: false
  //   }

  //   const settingsOptions = { headerTitle: () => <></>, headerBackTitleVisible: false, headerShown: true }

  //   const actionRequiredOptions = { headerShown: false, gestureEnabled: false }

  //   useEffect(() => {
  //     if (requiredRouteName && !loading && !loadingError) navigation.navigate(requiredRouteName)
  //   }, [requiredRouteName, loading, loadingError, navigation])

  //   if (isAccountDeleted) return <AccountStatesContainer />

  //   if (loadingError) return <ErrorSplash error={loadingError} />

  //   if (loading) return <LoggedSplash loader />

  //   if (isAccountClosedOrRejected) return <AccountStatesContainer />
  return (
    <>
      <ApplicationNavigatorStack.Navigator initialRouteName={initialRouteName}>
        {/* <Stack.Group screenOptions={options}> */}

        <ApplicationNavigatorStack.Screen name="Tab" component={BottomTabNavigator} />
        {/* <ApplicationNavigatorStack.Screen name="MasterDashBoardScreen" component={screens.MasterDashBoardScreen} /> */}
        {/* <Stack.Screen name="SettingsNavigator" component={SettingsNavigator} />
          <Stack.Screen name="AssetNavigator" component={AssetNavigator} />
          <Stack.Screen name="NotificationsNavigator" component={NotificationsNavigator} />
          <Stack.Screen name="WatchlistNavigator" component={WatchlistNavigator} />
          <Stack.Screen name="WalletNavigator" component={WalletNavigator} />
          <Stack.Screen name="SocialNavigator" component={SocialNavigator} />
          <Stack.Screen name="DepositNavigator" component={DepositNavigator} />
          <Stack.Screen name="TradeNavigator" component={TradeNavigator} />
          <Stack.Screen name="OnboardingNavigator" component={OnboardingNavigator} />
          <Stack.Screen name="StrategiesNavigator" component={StrategiesNavigator} />
          <Stack.Screen name="WithdrawNavigator" component={WithdrawNavigator} />
          <Stack.Screen name="InvestmentNavigator" component={InvestmentNavigator} />
          <Stack.Screen name="ContactsNavigator" component={ContactsNavigator} />
          <Stack.Screen name="Settings" component={SettingsContainer} options={settingsOptions} />
          <Stack.Screen name="News" component={NewsContainer} />
          <Stack.Screen name="AboutUs" component={AboutUsContainer} /> */}
        {/* </Stack.Group> */}

        {/* <Stack.Group screenOptions={actionRequiredOptions}>
          <Stack.Screen
            name="AccountStates"
            component={AccountStatesContainer}
            options={{ headerShown: true, headerBackTitleVisible: false, headerTitle: '' }}
          />
          <Stack.Screen
            name="FrozenAccount"
            component={FrozenOrBlockedAccountContainer}
            options={{ headerShown: true, headerBackTitleVisible: false, headerTitle: '' }}
          />
          <Stack.Screen name="PhoneVerificationRequired" component={PhoneVerificationContainer} />
          <Stack.Screen name="CustomerAgreementsRequired" component={CustomerAgreementsContainer} />
          <Stack.Screen name="InvestorQuizNavigator" component={InvestorQuizNavigator} />
        </Stack.Group> */}

        {/* Presentation Modals */}
        {/* <Stack.Group screenOptions={modalOptions}>
          <Stack.Screen name="ResultModal" component={ResultContainer} />
         <Stack.Screen name="Picker" component={PickerContainer} />
          <Stack.Screen name="InformationModal" component={InformationModalContainer} />
          <Stack.Screen
            name="WatchlistControlModal"
            options={() => ({
              headerShown: false,
              headerBackTitleVisible: false
            })}
            component={WatchlistControlModalContainer}
          />
          <Stack.Screen name="PaymentMethodsIntro" component={PaymentMethodsIntro} />
          <Stack.Screen name="UnlockAllFeatures" component={UnlockAllFeaturesScreen} />
          <Stack.Screen name="AddCardModal" component={AddCardModal} />
          <Stack.Screen name="Verify3DSecureCardModal" component={Verify3DSecureCardModal} />
          <Stack.Screen name="PaymentMethodEditModal" component={PaymentMethodEditModalContainer} />
          <Stack.Screen name="AddToWatchlistModal" component={AddToWatchlistModalContainer} />
          <Stack.Screen name="HomeActionRequiredModal" component={HomeActionRequiredModal} />
          <Stack.Screen name="DepositSuccessResult" component={DepositSuccessResultContainer} />  
        </Stack.Group> */}
      </ApplicationNavigatorStack.Navigator>
      {/* <RealtimeTickerSubscriber />
      <MarketStatusListener />
      <CustomNotificationsListener /> */}
      {/* security screen must be at the end of the ApplicationNavigator */}
      {/* <SecurityScreen /> */}
    </>
  )
}
