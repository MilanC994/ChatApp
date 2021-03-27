import { useState, useCallback } from "react"
import UpdateUserMutation from "../../mutations/UpdateUser"
import {
  requiredField,
  emailValidation,
  passwordValidation,
  matchPasswords,
} from "../../../utils/credentialsValidation"
import useInputField from "../../../hooks/useInputField"
import validateForm from "../../../utils/validateForm"
import useFormSubmit from "../../../hooks/useFormSubmit"

const useUserProfile = ({ currentProfile }) => {
  const [state, setState] = useState({
    error: null,
    success: null,
    openDeleteUserDialog: false,
  })

  const { id, name: userName, email: userEmail } = currentProfile

  const { input: nameField, data: name } = useInputField(
    "name",
    userName,
    requiredField
  )
  const { input: emailField, data: email } = useInputField(
    "email",
    userEmail,
    emailValidation
  )
  const { input: currentPasswordField, data: currentPassword } = useInputField(
    "currentPassword",
    "",
    passwordValidation
  )
  const { input: passwordField, data: password } = useInputField(
    "password",
    "",
    passwordValidation
  )
  const { input: retypePasswordField, data: retypePassword } = useInputField(
    "retypePassword",
    "",
    passwordValidation
  )
  const submitUpdateUserProfile = useCallback(
    async ({ ...input }) => {
      if (password.value !== retypePassword.value) {
        setState({ ...state, error: "Passwords do not match", success: null })
      } else {
        UpdateUserMutation({ _userId: id, ...input })
      }
    },
    [password, retypePassword, id]
  )
  const updateUserCallback = useCallback(async (error, success) => {
    if (error) {
      setState({ ...state, error, success: null })
    } else if (success) {
      setState({ ...state, success, error: null })
    }
  }, [])

  const { onSubmit: handleSubmit } = useFormSubmit(
    [name, email, password, currentPassword],
    submitUpdateUserProfile,
    updateUserCallback
  )

  // const handleSubmit = useCallback(async () => {
  //   if (
  //     validateForm([name, email, currentPassword, password, retypePassword])
  //   ) {
  //     UpdateUserMutation(
  //       id,
  //       currentPasswordField.value,
  //       nameField.value,
  //       emailField.value,
  //       passwordField.value,
  //       async (error, success) => {
  //         if (error) {
  //           setState({ ...state, error, success: null })
  //         } else if (success) {
  //           setState({ ...state, success, error: null })
  //         }
  //       }
  //     )
  //   }
  // }, [
  //   nameField,
  //   emailField,
  //   currentPasswordField,
  //   passwordField,
  //   retypePasswordField,
  // ])

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
    passwordField,
    retypePasswordField,
    state,
    handleSubmit,
    toggleDeleteUserDialog,
  }
}

export default useUserProfile
