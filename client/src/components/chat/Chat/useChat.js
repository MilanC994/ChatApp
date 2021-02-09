import { useState, useEffect, useCallback } from 'react'
import CreateMessageMutation from '../../mutations/CreateMessage'
import NewMessageSubscription from '../../../subscriptions/NewMessage'

const useChat = ({userId, roomId}) => {
    const [state, setState] = useState({
        content: '',
        messageError: null,
      })
    const { content } = state
    useEffect(() => {
      NewMessageSubscription(roomId, userId)
    }, [])

    const handleContentChange = useCallback(e => {
        setState({...state, content: e.target.value})
    },[])
  
    const createMessage = useCallback(() => {
      CreateMessageMutation(userId, roomId, content, async messageError => {
        if (messageError) setState({ ...state, messageError })
      })
      setState({ ...state, content: '' })
     },
    )
    return { state, handleContentChange,createMessage }
}

export default useChat