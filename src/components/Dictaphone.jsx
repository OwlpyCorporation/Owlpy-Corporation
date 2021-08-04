import React from "react";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition({
		transcribing: true,
		listening: true,
	});

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}
	const startListening = () => {
		SpeechRecognition.startListening({ continuous: true, language: "es-MX" });
	};
	// console.log(SpeechRecognition.getRecognition);
	// console.log(finalTranscript);

	return (
		<div>
			<p>Microphone: {listening ? "on" : "off"}</p>
			<button onClick={startListening}>Start</button>
			<button onClick={SpeechRecognition.stopListening}>Stop</button>
			<button onClick={resetTranscript}>Reset</button>
			<p>{transcript}</p>
		</div>
	);
};
export default Dictaphone;
