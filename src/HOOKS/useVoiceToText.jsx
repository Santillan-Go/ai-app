import { useEffect, useState } from "react";

function useVoiceToText({ lang = "es-ES" }) {
  const [transcript, setTranscript] = useState("");
  const [IsListening, setIsListening] = useState(false);

  const [error, setError] = useState("");
  const toggleListening = () => {
    setIsListening((prevState) => !prevState);
  };

  // // Check if the browser supports the SpeechRecognition API
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = lang;
  recognition.continuous = true; // Keep recognizing until manually stopped
  recognition.interimResults = true; // Show real-time speech results

  useEffect(() => {
    console.log({ IsListening });
    // Start the recognition process when isListening is true
    if (IsListening) {
      recognition.start();

      recognition.onresult = (event) => {
        let finalTranscriptChunk = "";
        if (event.results.length) {
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcriptChunk = event.results[i][0].transcript;

            // Handle final transcript
            if (event.results[i].isFinal) {
              finalTranscriptChunk += transcriptChunk;
            }
          }
        }

        // Only append the final transcript to the full transcript
        if (finalTranscriptChunk) {
          setTranscript((prev) => prev + " " + finalTranscriptChunk);
        }

        // Update the interim transcript (to show real-time results but not save them permanently)
      };

      recognition.onerror = (event) => {
        setError("Error occurred in recognition: " + event.error);
        setTranscript("");
        setIsListening(false);
      };
    } else {
      recognition.stop();

      setError("");
      setTranscript("");
      setIsListening(false);
    }

    return () => {
      recognition.abort(); // Stop recognition when component unmounts or listening stops
    };
  }, [IsListening]);

  // useEffect(() => {
  //   const SpeechRecognition =
  //     window.SpeechRecognition || window.webkitSpeechRecognition;
  //   const recognition = new SpeechRecognition();

  //   recognition.lang = lang;
  //   recognition.continuous = true;
  //   recognition.interimResults = true;

  //   recognition.onresult = (event) => {
  //     let finalTranscriptChunk = "";

  //     // Loop through results and separate final and interim transcripts
  //     for (let i = event.resultIndex; i < event.results.length; i++) {
  //       const transcriptChunk = event.results[i][0].transcript;
  //       if (event.results[i].isFinal) {
  //         finalTranscriptChunk += transcriptChunk;
  //       }
  //     }

  //     // Append only new final results to the main transcript
  //     if (finalTranscriptChunk) {
  //       setTranscript((prev) => prev + " " + finalTranscriptChunk.trim());
  //     }

  //     // Set interim transcript to show live results, and reset after final result

  //   };

  //   recognition.onerror = (event) => {
  //     setError("Error occurred in recognition: " + event.error);
  //   };

  //   if (IsListening) {
  //     recognition.start();
  //   } else {
  //     recognition.stop();
  //   }

  //   return () => {
  //     recognition.abort(); // Cleanup on unmount or stop listening
  //   };
  // }, [IsListening, lang]);
  // return <button>🎙️</button>;{

  const handleTyping = () => {
    if (IsListening) {
      recognition.stop();
      setIsListening(false);
    }
  };
  // const handleTyping = () => {
  //   if (IsListening) {
  //     recognition.stop();
  //     setIsListening(false);
  //     setTranscript("");
  //   }
  // };
  return {
    transcript,
    toggleListening,
    error,

    setTranscript,
    handleTyping,
    IsListening,
  };
}

export default useVoiceToText;
