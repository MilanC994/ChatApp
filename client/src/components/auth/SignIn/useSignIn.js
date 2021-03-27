import { useState, useEffect, useCallback } from 'react'
import SignUserIn from '../../mutations/SignUserIn'
import {
  emailValidation,
  passwordValidation,
} from '../../../utils/credentialsValidation'
import useInputField from '../../../hooks/useInputField'
import validateForm from '../../../utils/validateForm'
import useFormSubmit from '../../../hooks/useFormSubmit'

const useSignIn = ({ inviteId, inviteEmail }) => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSignedIn(true)
    }
  }, [])

  const [signedIn, setSignedIn] = useState(false)
  const [error, setError] = useState(false)

  const emailValue = inviteEmail ? inviteEmail : ''

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

  const signInCallback = useCallback(async (token, error) => {
    if (error) {
      setError(error)
    } else {
      await localStorage.setItem('token', token)
      setError(null)
      setSignedIn(true)
    }
  }, [])
  const submitRegister = useCallback(
    async ({ ...input }) => {
      SignUserIn({ ...input, inviteId })
    },
    [inviteId]
  )

  const { onSubmit: handleSubmit } = useFormSubmit(
    [email, password],
    submitRegister,
    signInCallback
  )

  //   const handleSubmit = useCallback(async () => {
  //     if (!validateForm([email, password])) return
  //     SignUserIn(
  //       emailField.value,
  //       passwordField.value,
  //       inviteId,
  //       async (token, error) => {
  //         if (error) {
  //           setError(error)
  //         } else {
  //           await localStorage.setItem('token', token)
  //           setError(null)
  //           setSignedIn(true)
  //         }
  //       }
  //     )
  //   }, [emailField, passwordField, inviteId])

  return { emailField, passwordField, handleSubmit, error, signedIn }
}

export default useSignIn
