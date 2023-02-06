import { View } from 'react-native'
import React from 'react'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'

export const BottomNavigationSimpleUsageShowcase = ({ customer }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const navigateTo = () => console.log('HomeScreen')

  return (
    <BottomNavigation selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      {customer ? (
        <View>
          <BottomNavigationTab title="USERS"  />
          <BottomNavigationTab title="ORDERS" onSelect={navigateTo} />
          <BottomNavigationTab title="TRANSACTIONS" onSelect={navigateTo} />
        </View>
      ) : (
        < >
          <BottomNavigationTab title="USERS" onPress={navigateTo} />
          <BottomNavigationTab title="TRANSACTIONS" onSelect={navigateTo} />
        </>
      )}
    </BottomNavigation>
  )
}
