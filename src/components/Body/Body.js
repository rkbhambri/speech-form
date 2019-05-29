import React, { useState } from 'react';
import VoiceIcon from './VoiceIcon/VoiceIcon';
import Form from './Form/Form';

const Controls = (props) => {
    const browserSpecificRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    const [recognition] = useState(browserSpecificRecognition);
    const [disableStart, setDisableStart] = useState(false);
    const [disablePause, setDisablePause] = useState(false);
    // const [error, setError] = useState(null);
    let [speechText, setSpeechText] = useState();
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [contact, setContact] = useState('');
    let [isSubmit, setSubmitFlag] = useState(false);
    // useEffect(() => {
    //     recognition.lang = 'en-IN';
    //     recognition.continuous = true;
    //     recognition.start();
    // }, []);

    const startRecognition = (event) => {
        event.preventDefault();
        if (!disableStart && !isSubmit) {
            recognition.lang = 'en-IN';
            recognition.continuous = true;
            setDisableStart(true);
            disablePause && setDisablePause(false)
            recognition.start();
        }
    };

    const validateSpeech = (transcript) => {
        console.log(transcript, transcript === 'first name' || transcript === 'last name' || transcript === 'email' || transcript === 'contact')
        return transcript === 'first name' || transcript === 'last name' || transcript === 'email' || transcript === 'contact';
    }

    recognition.onresult = (event) => {
        const resultsLength = event.results.length;
        for (let i = event.resultIndex; i < resultsLength; i++) {
            const transcript = event.results[i][0].transcript.trim();
            speechText = speechText ? speechText.concat(transcript) : transcript;
            setSpeechText(speechText);
            // Check if user speaks firstname then set firstname
            if (event.results[i - 1] !== undefined && !validateSpeech(transcript) && event.results[i - 1][0].transcript.includes('first name')) {
                setFirstName(transcript);
            }
            // Check if user speaks lastname then set lastname
            if (event.results[i - 1] !== undefined && !validateSpeech(transcript) && event.results[i - 1][0].transcript.includes('last name')) {
                setLastName(transcript);
            }
            // Check if user speaks email then set email
            if (event.results[i - 1] !== undefined && !validateSpeech(transcript) && event.results[i - 1][0].transcript.includes('email')) {
                setEmail(transcript.replace(/ +/g, "").toLowerCase());
            }
            // Check if user say 'contact' then set contact number
            if (event.results[i - 1] !== undefined && !validateSpeech(transcript) && event.results[i - 1][0].transcript.includes('contact')) {
                isNaN(Number(transcript.replace(/ +/g, ""))) ? alert('Please enter valid number') : setContact(Number(transcript.replace(/ +/g, "")));
            }
            // Check if user say 'Reset' then reset input details
            if (event.results[i - 1] !== undefined && transcript.includes('reset')) {
                setFirstName('');
                setLastName('');
                setEmail('');
                setContact('');
                disableStart && setDisableStart(false);
                recognition.stop();
            }
            // Check if user say 'Submit Form' then submit response and show thanks message
            if (event.results[i - 1] !== undefined && transcript.includes('submit form')) {
                setSubmitFlag(true);
                setFirstName('');
                setLastName('');
                setEmail('');
                setContact('');
                disableStart && setDisableStart(false);
                setTimeout(() => {
                    setSubmitFlag(false);
                }, 8000);
                recognition.stop();
            }
            // Check if user said 'stop'/'pause' then stop recording voice
            if (transcript === 'pause' || transcript === 'stop') {
                recognition.stop();
                disableStart && setDisableStart(false);
            }
        }
    };

    // recognition.onerror = (event) => {
    //     setError(event.error);
    // };

    const pauseRecognition = (event) => {
        event.preventDefault();
        setDisablePause(true);
        disableStart && setDisableStart(false);
        recognition.stop();
    };

    return (
        <div className="controls w-100 mt-4">
            <VoiceIcon
                startRecognition={(event) => startRecognition(event)}
                pauseRecognition={(event) => pauseRecognition(event)}
                disableStart={disableStart}
                speechText={speechText} />
            <Form
                firstName={firstName}
                lastName={lastName}
                email={email}
                contact={contact}
                isSubmit={isSubmit}
            />
        </div>
    );
};

export default Controls;
