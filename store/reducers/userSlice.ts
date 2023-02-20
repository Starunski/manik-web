import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUsers } from './ActionCreators'
import { IUser } from '../../models/IUser'

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
  counter: number
  firebaseUser: null
  reservations: any
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  counter: 0,
  firebaseUser: null,
  reservations: {
    '2023-02-15': [
      { name: 'Nastia', time: '09 00' },
      { name: 'Sasha', time: '12 00' },
      { name: 'Zenia', time: '15 00' },
      { name: 'Nastia', time: '17 00' },
      { name: 'Nastia', time: '19 00' },
      { name: 'Katia', time: '21 00' }
    ],
    '2023-02-16': [
      { name: 'Nastia', time: '09 00' },
      { name: 'Sasha', time: '12 00' }
    ],
    '2023-02-20': [
      { name: 'Nastia', time: '12 00' },
      { name: 'Sasha', time: '14 00' }
    ]
    // '2023-02-23': [{ name: 'item 2 - any js object', height: 80 }]
  }
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
      if (!Object.keys(state.reservations).includes(action.payload.day)) {
        state.reservations[action.payload.day] = [action.payload.reservation]
        // state.reservations[action.payload.date].push(action.payload)
      } else {
        state.reservations[action.payload.day].push(action.payload.reservation)
      }

      // state.reservations = { ...state, ...action.payload }
    },
    deleteReservation: (state, action) => {
      console.log('deleteReservation action.payload = ', action.payload)
      state.reservations.filter(reservation => reservation !== action.payload)
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
