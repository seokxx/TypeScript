import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  AppDispatch,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./index";

import "./class22";

function App() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const getRandom = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) + min);
  let rand = getRandom(1, 100);
  return (
    <div className="App">
      {state.counter1.count} <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(rand));
        }}
      >
        랜덤증가
      </button>
      <button
        onClick={() => {
          dispatch(decrementByAmount(rand));
        }}
      >
        랜덤감소
      </button>
    </div>
  );
}

export default App;
