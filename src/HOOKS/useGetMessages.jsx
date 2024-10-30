import { getMessagesByID } from "@/lib/Request";
import { getMessages } from "@/store/messagesRedux";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect, useState } from "react";

function useGetMessages({ chatID }) {
  const [messagesFound, setMessagesFound] = useState({
    messageAll: [],
  });
  const [lastMessages, setLastMessages] = useState([]);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(false); // Add retry state
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const m = useAppSelector(
    (state) => state.MessagesReducer.messagesGlobal ?? []
  );

  //FIND MESSAGES
  const messages = m.find((msg) => msg._id === chatID);

  const fetchMessages = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error before retry
    try {
      const data = await getMessagesByID({ ChatID: chatID });
      setMessagesFound(data);
      dispatch(getMessages({ messages: data }));
    } catch (error) {
      setError("Intenta otra vez, por favor"); // Set error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (!messages) {
      fetchMessages(); // Fetch if no messages found
    } else {
      setMessagesFound(messages);
      setLoading(false);
    }
  }, [chatID, messages, dispatch, retry]);

  useEffect(() => {
    if (messagesFound.messageAll) {
      if (messagesFound.messageAll.length > 0) {
        const foundLast = messagesFound.messageAll.slice(-7);

        setLastMessages(foundLast);
      }
    }
  }, [messagesFound, messages]);

  const checkMessages = () => messagesFound?.messageAll?.length > 0;

  return {
    messages: messagesFound,
    lastMessages,
    hasMessages: checkMessages(),
    loading,
    errorLoad: error,
    retryFetch: () => setRetry(!retry), // Retry logic
    // chatID, // This will be passed down to the Messages component
  };
}

export default useGetMessages;
