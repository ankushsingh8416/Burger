import React, { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });

  const handleStart = () => {
    startRecording();
    setIsRecording(true);
  };

  const handleStop = () => {
    stopRecording();
    setIsRecording(false);
  };

  useEffect(() => {
    if (mediaBlobUrl) {
      setRecordings((prev) => [mediaBlobUrl, ...prev]);
    }
  }, [mediaBlobUrl]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Voice Recorder</h2>
      <p>Status: {status}</p>
      
      <button
        onClick={isRecording ? handleStop : handleStart}
        style={{
          backgroundColor: isRecording ? "gray" : "red",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "24px",
          margin: "10px"
        }}
      >
        {isRecording ? <FaMicrophoneSlash /> : <FaMicrophone />}
      </button>

      <div style={{ marginTop: "20px" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {recordings.map((audioUrl, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <audio src={audioUrl} controls />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VoiceRecorder;
