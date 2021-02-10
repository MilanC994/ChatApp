import { useState, useEffect, useCallback } from 'react'
import SignUserIn from '../../mutations/SignUserIn'
import { emailValidation, passwordValidation } from '../../../utils/credentialsValidation'
import useInputField from '../../../hooks/useInputField'
import validateForm from '../../../utils/validateForm'


const useSignIn = ({ inviteId, inviteEmail }) => {
    useEffect(() => {
        if (localStorage.getItem('token')) {
        setSignedIn(true)
        }
    },[])


    const [signedIn, setSignedIn] = useState(false)
    const [error, setError] = useState(false)

    const emailValue = inviteEmail ? inviteEmail : ''

    const { input: emailField, data: email } = useInputField('email', emailValue, emailValidation)
    const { input: passwordField, data: password} = useInputField('password','', passwordValidation)

    const handleSubmit = useCallback(async () => {
        console.log("HANDLE SUBMIT")
        if(!validateForm([email, password])){ console.log("validation res   je false"); return}
        SignUserIn(
            emailField.value,
            passwordField.value,
            inviteId,
            async (token, error) => {
                if (error) {
                    setError(error)
                } else {
                    await localStorage.setItem('token', token)
                    setError(null)
                    setSignedIn(true)

                }
            }
        )
    },[emailField, passwordField, inviteId])

    return { emailField, passwordField, handleSubmit, error, signedIn }
}

export default useSignIn