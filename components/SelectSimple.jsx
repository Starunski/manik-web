import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components'

export const SelectSimple = ({ data, setSelectedTime }) => {
  const [selectedIndex, setSelectedIndex] = useState()

  return (
    <Select
      placeholder={'Select time slot'}
      value={data && data[selectedIndex - 1]}
      selectedIndex={selectedIndex}
      onSelect={index => {
        setSelectedIndex(index)
        setSelectedTime(data[index - 1])
      }}
    >
      {data?.map((item, id) => {
        return <SelectItem title={item} key={id} />
      })}
    </Select>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 128
  }
})
