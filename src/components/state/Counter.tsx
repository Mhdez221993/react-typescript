import { useReducer } from "react"

type StateProps = {
  count: number
}

type ActionProps = {
  type: string,
  payload: number
}

const initialState = {count: 0}

const reducer = (state: StateProps, action: ActionProps) => {
  switch(action.type) {
    case 'increment': return {count: state.count + action.payload}
    case 'decrement': return {count: state.count - action.payload}
    default: return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        Count: {state.count}

        <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>DEcrement</button>
    </div>
  )
}

export default Counter
