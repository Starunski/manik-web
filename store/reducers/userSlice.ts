import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUsers } from './ActionCreators'
import { IUser } from '../../models/IUser'

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
  counter: number
  firebaseUser: null
  clientReservations: any[]
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  counter: 0,
  firebaseUser: null,
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
      console.log('setFirebaseUser action.payload = ', action.payload)
      state.firebaseUser = action.payload
    },
    addReservation: (state, action) => {
      console.log('addReservation action.payload = ', action.payload)
      const reservation = state.clientReservations.find(res => res.date === action.payload.date)
      if (reservation) {
        reservation.reservations.push(action.payload.reservation)
      } else {
        state.clientReservations.push({ date: action.payload.date, reservations: [action.payload.reservation] })
      }

      // state.reservations = { ...state, ...action.payload }
    },
    deleteReservation: (state, action) => {
      console.log('deleteReservation action.payload = ', action.payload)
      const reservation = state.clientReservations.find(res => res.date === action.payload.date)
      if (reservation) {
        console.log('reservation found ', reservation)
        reservation.reservations = reservation.reservations.filter(el => el.id !== action.payload.reservation.id)
      }
    },
    updateReservation: (state, action) => {
      // const reservation = state.clientReservations.find(res => res.date === action.payload.date)
      // if (reservation) {
      //   reservation = action.payload.reservation
      // }

      console.log('updateReservation action.payload = ', action.payload)
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
