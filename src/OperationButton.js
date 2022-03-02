import React from 'react'
import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation }) {
  return (
    <button className="btn btn-warning btn-block" onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}