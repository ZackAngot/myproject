import React from 'react'
import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }) {
  return (
    <button className="btn btn-outline-light btn-lg"  onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}