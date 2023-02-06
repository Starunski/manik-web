import { BottomNavigationSimpleUsageShowcase } from '../screens/master/BottomNavigation'
import { View } from 'react-native'

export const Layout = ({ children }) => {
  return (
    <View>
      {/* <View> */}
        {/* <NavBarMui /> */}
        {/*<Navbar />*/}
      {/* </View> */}
      {/* <View> */}
        {children}
        {/* <Footer /> */}
      {/* </View> */}
      {/* <View> */}
      {/* {true ? <BottomNavigationSimpleUsageShowcase /> : <BottomNavigationSimpleUsageShowcase customer={true} />} */}
      {/* </View> */}
    </View>
  )
}
