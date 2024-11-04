import {useState} from "react";

function BiIlInput({bill,setBill}) {
    // const [bill,setBill]=useState('');
    return(
        <div>
            <h2>{`How much was the bill is ${bill}`}</h2>
            <input type="text" placeholder="Bill value"
                   value={bill} onChange={(e)=>{
                   setBill(Number(e.target.value))
            }}/>
        </div>
    )
}
export default BiIlInput;