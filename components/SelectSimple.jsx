import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components'

export const SelectSimple = ({ data, setData, setSelectedTime }) => {
  const [selectedIndex, setSelectedIndex] = useState()

  // const getMasters = async () => {
  //   try {
  //     const res = await fetch('http://localhost:5000/api')
  //     const data = await res.json()
  //     if (data) {
  //       // alert(data.users);
  //       setData(data.users)
  //     }
  //   } catch (error) {
  //     // alert("ERROR", error.message);
  //     console.log('ERROR', error.message)
  //   }
  // }

  // useEffect(() => {
  //   getMasters()
  // }, [])

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
