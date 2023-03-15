import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUsers } from './ActionCreators'
import { IUser } from '../../models/IUser'

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
  counter: number
  firebaseUser: null
  selectedReservation: null
  activeCalendarDay: string
  clientReservations: any[]
  clientList: any[]
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  counter: 0,
  firebaseUser: null,
  activeCalendarDay: '',
  selectedReservation: null,
  clientReservations: [
    {
      date: '2023/2/15',
      reservations: [
        { id: '1', name: 'Nastia', time: '09 00' },
        { id: '2', name: 'Katia', time: '21 00' }
      ]
    },
    {
      date: '2023/2/16',
      reservations: [
        { id: '4', name: 'Nastia', time: '09 00' },
        { id: '3', name: 'Katia', time: '21 00' }
      ]
    }
  ],
  clientList: [
    {
      id: '1',
      title: 'Title for Item',
      description: 'Description for Item'
    },
    {
      id: '2',
      title: 'Title for Item',
      description: 'Description for Item'
    },
    {
      id: '3',
      title: 'Title for Item',
      description: 'Description for Item'
    }
  ]
  // '2023-02-23': [{ name: 'item 2 - any js object', height: 80 }]
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload
    },
    decrement: (state, action) => {
      state.counter -= action.payload
    },
    setFirebaseUser: (state, action) => {
      state.firebaseUser = action.payload
    },
    addReservation: (state, action) => {
      const reservation = state.clientReservations.find(res => res.date === action.payload.date)
      if (reservation) {
        reservation.reservations.push(action.payload.reservation)
      } else {
        state.clientReservations.push({ date: action.payload.date, reservations: [action.payload.reservation] })
      }
    },
    deleteReservation: (state, action) => {
      const dateReservations = state.clientReservations.find(res => res.date === action.payload.date)
      const reservations = dateReservations.reservations.filter(res => res.id !== action.payload.reservation.id)
      dateReservations.reservations = reservations
    },
    updateReservation: (state, action) => {
      const dateReservations = state.clientReservations.find(res => res.date === action.payload.date)
      dateReservations.reservations = dateReservations.reservations.map(res => ({
        ...res,
        ...(res.id === action.payload.reservation.id && action.payload.reservation)
      }))
    },

    addClient: (state, action) => {
      console.log('action.payload', action.payload)
      state.clientList.push(action.payload)
    },

    deleteClient: (state, action) => {
      console.log('action.payload deleteClient', action.payload)
      state.clientList = state.clientList.filter(item => item.id !== action.payload)
    },
    updateClient: (state, action) => {
      console.log('action.payload', action.payload)
      const client = state.clientList.find(res => res.id === action.payload.id)
      state.clientList = state.clientList.map(res => ({
        ...res,
        ...(res.id === action.payload.id && action.payload)
      }))
    },

    setSelectedReservation: (state, action) => {
      state.selectedReservation = action.payload
    },

    setActiveCalendarDay: (state, action) => {
      state.activeCalendarDay = action.payload
    }
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    [fetchUsers.pending.type]: state => {
      state.isLoading = true
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default userSlice.reducer
