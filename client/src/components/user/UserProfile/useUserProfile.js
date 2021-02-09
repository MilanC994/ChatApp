import { useState, useCallback } from 'react'
import UpdateUserMutation from '../../mutations/UpdateUser'
import { 
    requiredField, 
    emailValidation, 
    passwordValidation, 
    matchPasswords, 
    newPasswordValidation
} from '../../../utils/credentialsValidation'
import useInputField from '../../../hooks/useInputField'
import validateForm from '../../../utils/validateForm'


const useUserProfile = ({ currentProfile }) => {
    const [state, setState] = useState({
        error: null,
        success:null,
        openDeleteUserDialog: false
      })

  

    const { id, name: userName, email: userEmail } = currentProfile

    const { input: nameField, data: name } = useInputField('name',userName, requiredField)
    const { input: emailField, data: email } = useInputField('email',userEmail, emailValidation)
    const { input: currentPasswordField, data: currentPassword} = useInputField('currentPassword','', passwordValidation)
    const { input: newPasswordField, data: newPassword} = useInputField('password','', newPasswordValidation)
    const { input: retypePasswordField, data: retypePassword} = useInputField('retypePassword','', matchPasswords)
    
    const handleSubmit = useCallback(async () => {
        if (validateForm([
            name,
            email,
            currentPassword,
            newPassword,
            retypePassword
        ])) {
        UpdateUserMutation(
            id,
            currentPasswordField.value,
            nameField.value,
            emailField.value,
            newPasswordField.value,
            async (error, success) => {
            if (error) {
                setState({ ...state, error, success: null })
            }
            else if(success){
                setState({ ...state, success, error: null })
            }
            }
        )
        } 
    },[nameField, emailField, currentPasswordField, newPasswordField, retypePasswordField])

    const toggleDeleteUserDialog = () => {
        setState({
        ...state,
        openDeleteUserDialog: !state.openDeleteUserDialog,
        })
    }

    return { 
        nameField,
        emailField, 
        currentPasswordField, 
        newPasswordField, 
        retypePasswordField,
        state, 
        handleSubmit, 
        toggleDeleteUserDialog
    }
}

export default useUserProfile