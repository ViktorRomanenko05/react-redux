import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../../createAppSlice'
import { UsersSliceState, UserData } from './types'

const usersInitialState: UsersSliceState = {
  users: []
}

export const usersSlice = createAppSlice({
  name: 'USERS',
  initialState: usersInitialState,
  reducers: create => ({
    addUser: create.reducer((state: UsersSliceState, action:PayloadAction<UserData>) => {
      state.users=[...state.users, action.payload]
    }),
    
    deleteUser: create.reducer((state: UsersSliceState, action:PayloadAction<string>)=>{
      state.users = state.users.filter((user)=>user.id !== action.payload);
    })
  }),
  selectors: {
    users: (state: UsersSliceState) => state.users
  }
})

export const usersSliceActions = usersSlice.actions;
export const usersSliceSelectors = usersSlice.selectors;