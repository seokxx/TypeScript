import React from 'react';
import ReactDOM from 'react-dom';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';

interface Count { count: number, user: string}

const initialState: Count = { count: 0, user : 'hong' };

const counterSlice = createSlice({
  name: 'counter',
  initialState : initialState,
  reducers: {
    increment (state){
      state.count += 1
    },
    decrement (state){
      state.count -= 1
    },
    incrementByAmount (state, action :PayloadAction<number>){
      state.count += action.payload
    },
    decrementByAmount (state, action :PayloadAction<number>){
      state.count -= action.payload
    }
  }
})

let store = configureStore({
  reducer: {
    counter1 : counterSlice.reducer
  }
})

//useSelector 타입지정
export type RootState = ReturnType<typeof store.getState>
//useDispatch 타입지정
export type AppDispatch = typeof store.dispatch
//만든 함수 export
export let {increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.actions

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)