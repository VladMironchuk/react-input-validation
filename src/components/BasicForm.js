import useInput from "../hooks/use-input";

const BasicForm = () => {

  const nameValidation = value => value.trim() !== ''

  const {
    value: nameInputValue,
    hasError: nameHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    isValid: nameIsValid,
    reset: resetNameInput
  } = useInput(nameValidation)

  const {
    value: lastnameInputValue,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameInputChangeHandler,
    inputBlurHandler: lastnameInputBlurHandler,
    isValid: lastnameIsValid,
    reset: resetLastnameInput
  } = useInput(nameValidation)

  const {
    value: emailInputValue,
    hasError: emailHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    isValid: emailIsValid,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))

  const formSubmissionHandler = event => {
    event.preventDefault()
    if(!formIsValid) {
      return
    }

    resetNameInput()
    resetLastnameInput()
    resetEmailInput()
  }

  let formIsValid = false

  if(nameIsValid && lastnameIsValid && emailIsValid){
    formIsValid = true
  }

  const invalidNameInputClassname = 'form-control' + (nameHasError ? ' invalid' : '')
  const invalidLastnameInputClassname = 'form-control' + (lastnameHasError ? ' invalid' : '')
  const invalidEmailInputClassname = 'form-control' + (emailHasError ? ' invalid' : '')

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={invalidNameInputClassname}>
          <label htmlFor='name'>First Name</label>
          <input
            value={nameInputValue}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            type='text'
            id='name' />
          {nameHasError && <p className="error-text">Name is invalid</p>}
        </div>
        <div className={invalidLastnameInputClassname}>
          <label htmlFor='name'>Last Name</label>
          <input
            value={lastnameInputValue}
            onChange={lastnameInputChangeHandler}
            onBlur={lastnameInputBlurHandler}
            type='text'
            id='name' />
          {lastnameHasError && <p className="error-text">Last Name is invalid</p>}
        </div>
        <div className={invalidEmailInputClassname}>
          <label htmlFor='email'>Email</label>
          <input
            value={emailInputValue}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            type='email'
            id='email' />
          {emailHasError && <p className="error-text">Email is invalid</p>}
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;