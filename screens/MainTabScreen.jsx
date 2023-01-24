import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import UserProfileScreen from './UserProfileScreen'
// import PaymentsScreen from './PaymentsScreen'
// import DocumentsScreen from './DocumentsScreen'
// import ProfileScreen from './ProfileScreen'
// import TransportsScreen from './TransportsScreen'
// import AccessoryShopScreen from './AccessoryShopScreen'
// import AggregatorsAccountsScreen from './AggregatorsAccountsScreen'
// import ReferralProgramScreen from './ReferralProgramScreen'
import { DrawerContent } from './DrawerContent'

const Drawer = createDrawerNavigator()

const MainTabScreen = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent{...props}/>}>
      <Drawer.Screen name="HomeScreen" component={UserProfileScreen} />
      {/* <Drawer.Screen name="Платежи" component={PaymentsScreen} />
      <Drawer.Screen name="Документы" component={DocumentsScreen} />
      <Drawer.Screen name="Профиль" component={ProfileScreen} />
      <Drawer.Screen name="Транспорт" component={TransportsScreen} />
      <Drawer.Screen name="Магазин аксессуаров" component={AccessoryShopScreen} />
      <Drawer.Screen name="Аккаунты агрегаторов" component={AggregatorsAccountsScreen} />
      <Drawer.Screen name="Реферальная программа" component={ReferralProgramScreen} /> */}
    </Drawer.Navigator>
  
)

export default MainTabScreen
