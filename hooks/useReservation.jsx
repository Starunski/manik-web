import React, { useState, useEffect } from 'react'

import { useAppSelector } from './redux'

export const useReservation = () => {
  const [filteredReservationByDay, setFilteredReservationByDay] = useState({})
  const { clientReservations } = useAppSelector(state => state.userReducer)
  const { activeCalendarDay } = useAppSelector(state => state.userReducer)

  useEffect(() => {
    if (clientReservations.length) {
      setFilteredReservationByDay(...clientReservations?.filter(res => res.date === activeCalendarDay))
    }
  }, [setFilteredReservationByDay, clientReservations,activeCalendarDay])

  return { filteredReservationByDay, setFilteredReservationByDay }
}
