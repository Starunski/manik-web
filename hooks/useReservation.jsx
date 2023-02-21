import React, { useState, useEffect } from 'react'

import { useAppSelector } from './redux'

export const useReservation = () => {
  const [date, setDate] = useState(null)
  const [temp, setTemp] = useState(null)
  const [filteredReservationByDay, setFilteredReservationByDay] = useState({})
  const { clientReservations } = useAppSelector(state => state.userReducer)


  useEffect(() => {
    if (date && clientReservations.length) {
      setFilteredReservationByDay(...clientReservations?.filter(res => res.date === date.toLocaleDateString('eu-EU')))
    }
  }, [date, setFilteredReservationByDay, clientReservations])

  return { date, setDate, filteredReservationByDay, setFilteredReservationByDay, temp, setTemp }
}
