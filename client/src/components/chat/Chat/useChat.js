import { useState, useEffect, useCallback, useRef } from 'react'
import CreateMessageMutation from '../../mutations/CreateMessage'
import NewMessageSubscription from '../../../subscriptions/NewMessage'

const useChat = ({ userId, roomId, messages }) => {
  useEffect(() => {
    scrollToBottom()
}, [messages])

useEffect(() => {
    scrollToBottom()
}, [])



    const [state, setState] = useState({
        content: '',
        messageError: null,
      })
    const { content } = state
    useEffect(() => {
      NewMessageSubscription(roomId, userId)
    }, [])

    
  const bottomRef = useRef()

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    });
};

    const handleContentChange = useCallback(e => {
        setState({...state, content: e.target.value})
    },[])
  
    const createMessage = useCallback(() => {
      CreateMessageMutation(userId, roomId, content, async messageError => {
        if (messageError) setState({ ...state, messageError })
      })
      setState({ ...state, content: '' })
     },[state]
    )
    return { state, handleContentChange,createMessage, bottomRef }
}

export default useChat