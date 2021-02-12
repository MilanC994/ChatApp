import { useState, useEffect, useCallback, useRef } from 'react'
import CreateMessageMutation from '../../mutations/CreateMessage'
import NewMessageSubscription from '../../../subscriptions/NewMessage'
import { requiredField } from '../../../utils/credentialsValidation'
import useInputField from '../../../hooks/useInputField'
import validateForm from '../../../utils/validateForm'


const FETCH_MESSAGES_COUNT = 4

const useChat = ({ userId, roomId, messages, relay }) => {
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const loadMoreMessages = () => {
    if (!relay.hasMore() || relay.isLoading()) return
    
    relay.loadMore(
      FETCH_MESSAGES_COUNT
    )
  }

  const { input: contentField, data: content } = useInputField('content','', requiredField)

  const [error, setError] = useState(null)

  useEffect(() => {
    NewMessageSubscription(roomId, userId)
  }, [])

    
  const bottomRef = useRef()
  const topRef = useRef()

  const observer = new IntersectionObserver(
    () => {
        loadMoreMessages()
    }

  )

  useEffect(() => {
    observer.observe(topRef.current)
    // skipFirstRender.current = true
    return () => {
      observer.disconnect()
    }
  }, [])



  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    });
};

  
    const createMessage = useCallback(() => {
      
      if(!validateForm([content])) return 
      CreateMessageMutation(userId, roomId, content.value, async messageError => {
        if (messageError) setError(messageError)
      })
      content.reset()
     },[content]
    )
    return { contentField, error, createMessage, bottomRef, topRef }
}

export default useChat