import { useCallback } from 'react'

const useFormSubmit = (fields, handleSubmit, callback = null) => {
  const validateForm = useCallback(() => {
    return fields.reduce((fields, { validate, value }) => validate(value), {})
  }, [fields])

  const onSubmit = useCallback(() => {
    if (validateForm()) {
      handleSubmit({
        ...fields.reduce(
          (fields, { name, value }) => ({ ...fields, [name]: value }),
          {}
        ),
        callback,
      })
    }
  }, [handleSubmit, fields, validateForm])

  return { onSubmit }
}
export default useFormSubmit
