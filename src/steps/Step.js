import "./Step.css";
import {useState} from "react";
function Step() {
    const messages = [
        "Learn React ⚛️",
        "Apply for jobs 💼",
        "Invest your new income 🤑",
    ];

    const [step,setStep]=useState(1);

    const handleNext=()=>{
        console.log(step);
        setStep(step<3?step+1:messages.length)
    }
    const handlePrevious=()=>{
        console.log(step);
        setStep(step>1?step-1:1)
    }

    return(
        <div className="main-box">
            <div className="numbers">
                <div className={`number ${step>=1?"active":""}`}>1</div>
                <div className={`number ${step>=2?"active":""}`} >2</div>
                <div className={`number ${step>=3?"active":""}`}>3</div>
            </div>
            <div className="message">
                <div>Step {step}: {messages[step - 1]}</div>
            </div>
            <div className="buttons">
                <button onClick={()=>handlePrevious()}>Previous</button>
                <button onClick={()=>handleNext()}>Next</button>
            </div>
        </div>
    );
}

export default Step;