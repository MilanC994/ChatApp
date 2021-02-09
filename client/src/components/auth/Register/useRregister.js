import { useState, useEffect, useCallback } from 'react'
import CreateNewUser from '../../mutations/CreateNewUser'
import { requiredField, emailValidation, passwordValidation, matchPasswords } from '../../../utils/credentialsValidation'
import useInputField from '../../../hooks/useInputField'
import validateForm from '../../../utils/validateForm'


const useRegister = () => {
    useEffect(() => {
        if (localStorage.getItem('token')) {
        setSignedIn(true)
        }
    },[])


    const [signedIn, setSignedIn] = useState(false)
    const [error, setError] = useState(false)

    const { input: nameField, data: name } = useInputField('name','', requiredField)
    const { input: emailField, data: email } = useInputField('email','', emailValidation)
    const { input: passwordField, data: password} = useInputField('password','', passwordValidation)
    const { input: retypePasswordField, data: retypePassword} = useInputField('retypePassword','', matchPasswords)

    const handleSubmit = useCallback(async () => {
        if(!validateForm([name, email, password, retypePassword])) return
        CreateNewUser(
            nameField.value,
            emailField.value,
            passwordField.value,
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
    },[nameField ,emailField, passwordField, retypePasswordField])

    return { nameField, emailField, passwordField, retypePasswordField, handleSubmit, error, signedIn }
}

export default useRegister