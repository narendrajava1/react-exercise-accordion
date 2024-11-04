import {useState} from "react";
import BiIlInput from "./BiIlInput";
import SelectPercentage from "./SelectPercentage";
import BillOutPut from "./BillOutPut";
import Reset from "./Reset";

function TipCalculator() {
    const [bill,setBill]=useState('');
    const[percentageOfMe,setPercentageOfMe]=useState(0);
    const[percentageOfFriend,setPercentageOfFriend]=useState(0);
    const tip=bill*((percentageOfMe+percentageOfFriend)/2/100);
    const handleReset=()=>{
        setBill('');
        setPercentageOfMe(0);
        setPercentageOfFriend(0);
        setBill('');
    }
    return(
        <div>
            {/*//how much bill

            //select for your tip
            //select for your friend tip
            //total bill
            //reset*/}
            {/*how much bill*/}
            <BiIlInput bill={bill} setBill={setBill}/>
            <SelectPercentage percentage={percentageOfMe} setPercentage={setPercentageOfMe}>How did you like the service? </SelectPercentage>
            <SelectPercentage percentage={percentageOfFriend} setPercentage={setPercentageOfFriend}>How did you friend like the service? </SelectPercentage>
            <BillOutPut bill={bill} tip={tip}/>
            <Reset onReset={handleReset}/>
        </div>
    )


}

export default TipCalculator;