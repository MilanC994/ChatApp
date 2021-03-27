import { useState, useCallback, useMemo } from 'react'
import CreateNewUser from '../../mutations/CreateNewUser'
import {
  requiredField,
  emailValidation,
  passwordValidation,
  matchPasswords,
} from '../../../utils/credentialsValidation'
import useInputField from '../../../hooks/useInputField'
import useFormSubmit from '../../../hooks/useFormSubmit'
import validateForm from '../../../utils/validateForm'

const useRegister = ({ inviteId, inviteEmail }) => {
  const [error, setError] = useState(false)

  const emailValue = inviteEmail ? inviteEmail : ''

  const { input: nameField, data: name } = useInputField(
    'name',
    '',
    requiredField
  )
  const { input: emailField, data: email } = useInputField(
    'email',
    emailValue,
    emailValidation
  )
  const { input: passwordField, data: password } = useInputField(
    'password',
    '',
    passwordValidation
  )
  const { input: retypePasswordField, data: retypePassword } = useInputField(
    'retypePassword',
    '',
    passwordValidation
  )
  const registerCallback = useCallback(async (token, error) => {
    if (error) {
      setError(error)
    } else {
      await localStorage.setItem('token', token)
      setError(null)
    }
  }, [])
  const submitRegister = useCallback(
    async ({ ...input }) => {
      if (password.value !== retypePassword.value) {
        setError('Passwords must match')
      } else {
        CreateNewUser({ ...input, inviteId })
      }
    },
    [, password, retypePassword]
  )

  const { onSubmit: handleSubmit } = useFormSubmit(
    [name, email, password],
    submitRegister,
    registerCallback
  )
  return {
    nameField,
    emailField,
    passwordField,
    retypePasswordField,
    handleSubmit,
    error,
  }
}

export default useRegister
