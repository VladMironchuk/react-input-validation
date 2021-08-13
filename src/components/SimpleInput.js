import useInput from "../hooks/use-input";

const SimpleInput = () => {

  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))

  let formIsValid = false

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    if(!enteredNameIsValid && !enteredEmailIsValid) {
      return
    }

    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = 'form-control' + (nameInputHasError ? ' invalid' : '')
  const emailInputClasses = 'form-control' + (emailInputHasError ? ' invalid' : '')


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          type='text'
          id='name'
        />
        {nameInputHasError && <p className="error-text">Invalid name</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          type='email'
          id='email'
        />
        {emailInputHasError && <p className="error-text">Invalid name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;