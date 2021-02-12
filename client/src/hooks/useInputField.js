import { useState, useCallback, useMemo } from 'react'

const useInputField = (name, defaultValue, validateFn) => {
    const [value, setInputValue] = useState(defaultValue)
    const [error, setError] = useState(null)

    const validateInput = useCallback(inputValues => {
        const validationRes = validateFn({...inputValues})
        if(validationRes !== true){
            setError(validationRes)
        }
        return validationRes
    }, [validateFn])

    const onChange = useCallback(e => {
        const value = e.target.value
        setInputValue(value)
        setError(null)
    },[])

    const resetValue = useCallback(() => {
        setInputValue('')
        setError(null)
    },[]) 
    const input = useMemo(() => { 
        return { name, error, value, onChange }
    }, [name, error, value, onChange, validateInput, resetValue])
    const data = useMemo(() => { 
        return { name, value, validate: validateInput, reset: resetValue }
    }, [name, error, value, onChange, validateInput, resetValue])
    
    return { input, data }
}

export default useInputField
