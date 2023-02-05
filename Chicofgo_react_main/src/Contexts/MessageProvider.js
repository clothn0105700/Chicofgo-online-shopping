import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const MessageContext = createContext();

export function useMessage() {
  return useContext(MessageContext);
}

function MessageProvider(props) {
  const { children } = props;
  const [message, setMessage] = useState([]);
  async function getMessage() {
    const response = await axios.get(
      'http://localhost:3001/api/products/message'
    );
    setMessage(response.data);
  }
  return (
    <MessageContext.Provider value={{ message, getMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageProvider;
