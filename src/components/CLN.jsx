import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CLN.css';
import presponses from '../assets/predefinedResponses.json';
import presponsesSignet from '../assets/predefinedResponsesSignet.json';
import presponsesTestnet from '../assets/predefinedResponsesTestnet.json';
import stepsjson from '../assets/content.json';
import stepsjsonTestnet from '../assets/contenttestnet.json';
import stepsjsonSignet from '../assets/contentsignet.json';
import stepsjsonMainet from '../assets/contentMainet.json';
import Tip from './Tip';
import Lnurl from "./Lnurl"

const CLN = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const terminalRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isTypingResponse, setIsTypingResponse] = useState(false);
  const predefinedResponses = presponses;
  const predefinedResponsesSignet = presponsesSignet;
  const predefinedResponsesTestnet = presponsesTestnet;
  const steps = Object.values(stepsjson.steps);
  const stepsSignet = Object.values(stepsjsonSignet.steps);
  const stepsTestnet= Object.values(stepsjsonTestnet.steps);
  const stepsMainet= Object.values(stepsjsonMainet.steps);
  const [isChecked, setIsChecked] = useState(true);
  const [currentTab, setCurrentTab] = useState('tab1');
  
  const [isTippin, setIsTipping] = useState(false);
  const [lnurl, setLnurl] = useState("")
  const [polling, setPolling] = useState("")
  const [success, setSuccess] = useState(false)

  const handleTabChange = (event) => {
    setCurrentStep(0);
    setCurrentTab(event.target.id);
    setOutput([]);
    setInput('');
    setCommandHistory([]);
  };

  const navigate = useNavigate();

  const handleInput = () => {
    if (isTypingResponse) {
      return;
    }

    const trimmedInput = input.trim();
    console.log(trimmedInput)
    if (trimmedInput === 'clear') {
      setOutput([]);
      setInput('');
      setCommandHistory([]);

    } 
    
    else if (trimmedInput === 'l1-cli listchannels') {
          
              const responseArray = predefinedResponses[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l1-cli listchannels').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
         else if (trimmedInput === 'l2-cli listchannels') {
          
              const responseArray = predefinedResponses[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli listchannels').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput === 'l2-cli getinfo') {
          
              const responseArray = predefinedResponses[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli getinfo').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }

            else if (trimmedInput === 'l1-cli listfunds') {
          
              const responseArray = predefinedResponses[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l1-cli listfunds').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput === 'l2-cli listfunds') {
          
              const responseArray = predefinedResponses[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli listfunds').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput) {
      const newCommandHistory = [...commandHistory, trimmedInput];

      if (predefinedResponses.hasOwnProperty(trimmedInput)) {
        const response = predefinedResponses[trimmedInput];
        console.log(response);
        const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
        setOutput(newOutput);

        const responseOutput = `root@linux:/ ${response}`;
        newOutput.push(responseOutput);
        setOutput([...newOutput]);

        setIsTypingResponse(true);

        let typingIndex = 0;
        const typingInterval = setInterval(() => {
          if (typingIndex < response.length) {
            newOutput[newOutput.length - 1] = `${response.substring(0, typingIndex + 1)}`;
            setOutput([...newOutput]);
            typingIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTypingResponse(false);
          }
        }, 10);
      } else {
        const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error"> Unrecognized command: ${trimmedInput} </span>];
        setOutput(newOutput);
      }

      setCommandHistory(newCommandHistory);
      setInput('');
    }
  };
  const handleInputTest = () => {
    if (isTypingResponse) {
      return;
    }

    const trimmedInput = input.trim();
    console.log(trimmedInput)
    if (trimmedInput === 'clear') {
      setOutput([]);
      setInput('');
      setCommandHistory([]);

    } 
    
    else if (trimmedInput === 'l1-cli listchannels') {
          
              const responseArray = predefinedResponsesTestnet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l1-cli listchannels').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
         else if (trimmedInput === 'l2-cli listchannels') {
          
              const responseArray = predefinedResponsesTestnet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli listchannels').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput === 'l2-cli getinfo') {
          
              const responseArray = predefinedResponsesTestnet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli getinfo').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }

            else if (trimmedInput === 'l1-cli listfunds') {
          
              const responseArray = predefinedResponsesTestnet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l1-cli listfunds').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput === 'l2-cli listfunds') {
          
              const responseArray = predefinedResponsesTestnet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli listfunds').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput) {
      const newCommandHistory = [...commandHistory, trimmedInput];

      if (predefinedResponsesTestnet.hasOwnProperty(trimmedInput)) {
        const response = predefinedResponsesTestnet[trimmedInput];
        console.log(response);
        const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
        setOutput(newOutput);

        const responseOutput = `root@linux:/ ${response}`;
        newOutput.push(responseOutput);
        setOutput([...newOutput]);

        setIsTypingResponse(true);

        let typingIndex = 0;
        const typingInterval = setInterval(() => {
          if (typingIndex < response.length) {
            newOutput[newOutput.length - 1] = `${response.substring(0, typingIndex + 1)}`;
            setOutput([...newOutput]);
            typingIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTypingResponse(false);
          }
        }, 10);
      } else {
        const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error"> Unrecognized command: ${trimmedInput} </span>];
        setOutput(newOutput);
      }

      setCommandHistory(newCommandHistory);
      setInput('');
    }
  };


  const handleInputSignet = () => {
    if (isTypingResponse) {
      return;
    }

    const trimmedInput = input.trim();
    console.log(trimmedInput)
    if (trimmedInput === 'clear') {
      setOutput([]);
      setInput('');
      setCommandHistory([]);

    } 
    
    else if (trimmedInput === 'l1-cli listchannels') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l1-cli listchannels').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
         else if (trimmedInput === 'l2-cli listchannels') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli listchannels').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput === 'l2-cli getinfo') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli getinfo').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }

            else if (trimmedInput === 'l1-cli listfunds') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l1-cli listfunds').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput === 'l2-cli listfunds') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli listfunds').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput) {
      const newCommandHistory = [...commandHistory, trimmedInput];

      if (predefinedResponsesSignet.hasOwnProperty(trimmedInput)) {
        const response = predefinedResponsesSignet[trimmedInput];
        console.log(response);
        const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
        setOutput(newOutput);

        const responseOutput = `root@linux:/ ${response}`;
        newOutput.push(responseOutput);
        setOutput([...newOutput]);

        setIsTypingResponse(true);

        let typingIndex = 0;
        const typingInterval = setInterval(() => {
          if (typingIndex < response.length) {
            newOutput[newOutput.length - 1] = `${response.substring(0, typingIndex + 1)}`;
            setOutput([...newOutput]);
            typingIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTypingResponse(false);
          }
        }, 10);
      } else {
        const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error"> Unrecognized command: ${trimmedInput} </span>];
        setOutput(newOutput);
      }

      setCommandHistory(newCommandHistory);
      setInput('');
    }
  };

  const handleInputMainet = () => {
    if (isTypingResponse) {
      return;
    }

    const trimmedInput = input.trim();
    console.log(trimmedInput)
    if (trimmedInput === 'clear') {
      setOutput([]);
      setInput('');
      setCommandHistory([]);

    } 
    
    else if (trimmedInput === 'l1-cli listchannels') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l1-cli listchannels').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
         else if (trimmedInput === 'l2-cli listchannels') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli listchannels').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput === 'l2-cli getinfo') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli getinfo').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }

            else if (trimmedInput === 'l1-cli listfunds') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l1-cli listfunds').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput === 'l2-cli listfunds') {
          
              const responseArray = predefinedResponsesSignet[trimmedInput];
            const responseIndex = commandHistory.filter((cmd) => cmd === 'l2-cli listfunds').length;

            if (responseArray && responseArray.length > 0) {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
                setOutput(newOutput);

                if (responseIndex < responseArray.length) {
                    newOutput.push(`root@linux:/ ${responseArray[responseIndex]}`);
                    setOutput([...newOutput]);
                }

                const newCommandHistory = [...commandHistory, trimmedInput];
                setCommandHistory(newCommandHistory);
                setInput('');
            } else {
                const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error">Comando no reconocido: ${trimmedInput}</span>];
                setOutput(newOutput);
                setInput('');
            }
        }
        else if (trimmedInput) {
      const newCommandHistory = [...commandHistory, trimmedInput];

      if (predefinedResponsesSignet.hasOwnProperty(trimmedInput)) {
        const response = predefinedResponsesSignet[trimmedInput];
        console.log(response);
        const newOutput = [...output, `root@linux:/ ${trimmedInput}`];
        setOutput(newOutput);

        const responseOutput = `root@linux:/ ${response}`;
        newOutput.push(responseOutput);
        setOutput([...newOutput]);

        setIsTypingResponse(true);

        let typingIndex = 0;
        const typingInterval = setInterval(() => {
          if (typingIndex < response.length) {
            newOutput[newOutput.length - 1] = `${response.substring(0, typingIndex + 1)}`;
            setOutput([...newOutput]);
            typingIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTypingResponse(false);
          }
        }, 10);
      } else {
        const newOutput = [...output, `root@linux:/ ${trimmedInput}`, <span className="error"> Unrecognized command: ${trimmedInput} </span>];
        setOutput(newOutput);
      }

      setCommandHistory(newCommandHistory);
      setInput('');
    }
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/achievementbox');
    }
  };
  const handleNextStepSignet = () => {
    if (currentStep < stepsSignet.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/achievementbox');
    }
  };
  const handleNextStepMainet = () => {
    if (currentStep < stepsSignet.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/achievementbox');
    }
  };
  const handleNextStepTestnet = () => {
    if (currentStep < stepsTestnet.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/achievementbox');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);


  return (
    <div>
    
    {
      isTippin && <Lnurl lnurl={lnurl} setIsTipping={setIsTipping}/>
    }
      
    <div className="container">

      <div class="tabs">
        <input type="radio" id="tab1" name="tab-control" checked={currentTab === 'tab1'} onChange={handleTabChange} />
        <input type="radio" id="tab2" name="tab-control" checked={currentTab === 'tab2'} onChange={handleTabChange}  />
        <input type="radio" id="tab3" name="tab-control" checked={currentTab === 'tab3'} onChange={handleTabChange} />
        <input type="radio" id="tab4" name="tab-control" checked={currentTab === 'tab4'} onChange={handleTabChange}/>

        <ul>
          <li title="Regtest"><label htmlFor="tab1" role="button"><span>Regtest</span></label></li>
          <li title="Tesnet"><label htmlFor="tab2" role="button"><span>Testnet</span></label></li>
          <li title="Signet"><label htmlFor="tab3" role="button"><span>Signet</span></label></li>
          <li title="Mainnet"><label htmlFor="tab4" role="button"><span>Mainnet</span></label></li>
        </ul>
        <div className="slider"><div className="indicator"></div></div>
        <div className="content">
          <section className='sectionReg'>

            <div className="steps">
              <div className="step">{steps[currentStep]}</div>

              <button onClick={handleNextStep} className="next-button">
                {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>

            <div className="terminal" ref={terminalRef}>
              {output.map((line, index) => {
                const promptLength = 'root@linux:/'.length;
                const isResponse = index % 2 === 1;
                const lines = typeof line === 'string' ? line.split('\n') : [line];


                return (
                  <div key={index}>
                    {lines.map((text, lineIndex) => (
                      <div key={lineIndex} className={`output-line ${isResponse ? 'response-line' : ''}`}>
                        {typeof text === 'string' && text.startsWith('root@linux:/') ? (
                          <>
                            <span className="prompt">
                              {text.substring(0, promptLength)}
                            </span>
                            {text.substring(promptLength)}
                          </>
                        ) : (
                          text
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}

              <div className="input-line-container">
                <span className="prompt">root@linux:/</span>
                <input
                  className="input-line"
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleInput();
                    }
                  }}
                />
              </div>
            </div>
          </section>
          <section className='sectionTest'>
          <div className="steps">
              <div className="step">{stepsTestnet[currentStep]}</div>

              <button onClick={handleNextStepTestnet} className="next-button">
                {currentStep === stepsTestnet.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>

            <div className="terminal" ref={terminalRef}>
              {output.map((line, index) => {
                const promptLength = 'root@linux:/'.length;
                const isResponse = index % 2 === 1;
                const lines = typeof line === 'string' ? line.split('\n') : [line];


                return (
                  <div key={index}>
                    {lines.map((text, lineIndex) => (
                      <div key={lineIndex} className={`output-line ${isResponse ? 'response-line' : ''}`}>
                        {typeof text === 'string' && text.startsWith('root@linux:/') ? (
                          <>
                            <span className="prompt">
                              {text.substring(0, promptLength)}
                            </span>
                            {text.substring(promptLength)}
                          </>
                        ) : (
                          text
                          )}
                      </div>
                    ))}
                  </div>
                );
              })}

              <div className="input-line-container">
                <span className="prompt">root@linux:/</span>
                <input
                  className="input-line"
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleInputTest();
                    }
                  }}
                />
              </div>
            </div>
          </section>
          <section className='sectionSig'>
          <div className="steps">
              <div className="step">{stepsSignet[currentStep]}</div>

              <button onClick={handleNextStepSignet} className="next-button">
                {currentStep === stepsSignet.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>

            <div className="terminal" ref={terminalRef}>
              {output.map((line, index) => {
                const promptLength = 'root@linux:/'.length;
                const isResponse = index % 2 === 1;
                const lines = typeof line === 'string' ? line.split('\n') : [line];

                
                return (
                  <div key={index}>
                    {lines.map((text, lineIndex) => (
                      <div key={lineIndex} className={`output-line ${isResponse ? 'response-line' : ''}`}>
                        {typeof text === 'string' && text.startsWith('root@linux:/') ? (
                          <>
                            <span className="prompt">
                              {text.substring(0, promptLength)}
                            </span>
                            {text.substring(promptLength)}
                          </>
                        ) : (
                          text
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}

              <div className="input-line-container">
                <span className="prompt">root@linux:/</span>
                <input
                  className="input-line"
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleInputSignet();
                    }
                  }}
                  />
              </div>
            </div>
          </section>
          <section className='sectionMain'>
          <div className="steps">
              <div className="step">{stepsMainet[currentStep]}</div>
              
              <button onClick={handleNextStepMainet} className="next-button">
                {currentStep === stepsMainet.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>

            <div className="terminal" ref={terminalRef}>
              {output.map((line, index) => {
                const promptLength = 'root@linux:/'.length;
                const isResponse = index % 2 === 1;
                const lines = typeof line === 'string' ? line.split('\n') : [line];
                
                
                return (
                  <div key={index}>
                    {lines.map((text, lineIndex) => (
                      <div key={lineIndex} className={`output-line ${isResponse ? 'response-line' : ''}`}>
                        {typeof text === 'string' && text.startsWith('root@linux:/') ? (
                          <>
                            <span className="prompt">
                              {text.substring(0, promptLength)}
                            </span>
                            {text.substring(promptLength)}
                          </>
                        ) : (
                          text
                          )}
                      </div>
                    ))}
                  </div>
                );
              })}

              <div className="input-line-container">
                <span className="prompt">root@linux:/</span>
                <input
                  className="input-line"
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleInputMainet();
                    }
                  }}
                  />
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
    <Tip setTipping={setIsTipping} setLnurl={setLnurl} setPolling={setPolling}/>

    </div>
  );
};

export default CLN;
