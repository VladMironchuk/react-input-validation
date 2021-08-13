import { useReducer} from "react";

const initialInputState = {
  value: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {

  if(action.type === 'VALUE'){
    return {value: action.value, isTouched: state.isTouched}
  }

  if(action.type === 'TOUCHED'){
    return {value: state.value, isTouched: true}
  }

  if(action.type === 'RESET') {
    return initialInputState
  }

  return initialInputState
}

const useInput = (validateValue) => {

  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = event => {
    dispatch({type: 'VALUE', value: event.target.value})
  }

  const inputBlurHandler = () => {
    dispatch({type: 'TOUCHED'})
  }

  const reset = () => {
    dispatch({type: 'RESET'})
  }

  return {
    value: inputState.value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset
  }
}

export default useInput