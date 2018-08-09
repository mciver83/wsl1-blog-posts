import axios from 'axios'

const GET_USER = 'GET_USER'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

let initialState = {
  data: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_FULFILLED:
      return { ...state, data: action.payload.data }
    default:
      return state;
  }
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/currentUser')
  }
}