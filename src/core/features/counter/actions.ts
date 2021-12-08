import { createAction } from "@reduxjs/toolkit"

//https://redux-toolkit.js.org/api/createAction 
export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')
export const incrementByAmount = createAction<number>('counter/incrementByAmount')
