import React from 'react'
import { Button, Icon, List, ListItem } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export const UserList = ({ buttonName, data, onPress }) => {
  const renderItemAccessory = ({ idx }) => (
    <Button onPress={() => onPress(idx)} size="tiny">
      {buttonName ?? '+'}
    </Button>
  )

  const renderItemIcon = props => <Ionicons {...props} name="person" />

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={() => renderItemAccessory(index)}
    />
  )

  return <List style={styles.container} data={data} renderItem={renderItem} />
}

const styles = StyleSheet.create({
  container: {
    // maxHeight: 192
  }
})
