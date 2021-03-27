export const emailValidation = val => {
  return !val
    ? 'Email is required'
    : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)
    ? true
    : 'Email is not valid'
}

export const passwordValidation = val => {
  return !val
    ? 'Password is Required'
    : val.length >= 8
    ? true
    : 'Password must be larger than 7 characters'
}

export const requiredField = val => {
  return val ? true : 'Field is required'
}

export const noValidation = () => true

export const matchPasswords = ({ password, retypePassword }) => {
  return password === retypePassword ? true : 'Passwords must match'
}

export const newPasswordValidation = val => {
  return !val
    ? true
    : val.length >= 8
    ? true
    : 'Password must be larger than 7 characters'
}

const cridentialsValidation = (name, email, password, type) => {
  if (type === 'register') {
    if (![email, name, password].every(Boolean)) {
      return false
    } else if (!emailValidation(email)) {
      return false
    }
  } else if (type === 'login') {
    if (![email, password].every(Boolean)) {
      return false
    } else if (!emailValidation(email)) {
      return false
    }
  }
  return true
}
export default cridentialsValidation
