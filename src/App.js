import {useState} from "react";
import TipCalculator from "./TipCalculator";

function App() {
    const [pay, setPay] = useState(0);
    const [payForMe, setPayForMe] = useState(0);
    const [payForFriend, setPayForFriend] = useState(0);
    return (
        <>
            <div>

                {/*<h2>How much was the bill</h2>
                <h2>How did you like the service</h2>
                <select value={payForMe} onChange={(e) => {
                    setPay(pay => {
                        setPayForMe(parseInt(e.target.value));
                        return payForMe + pay;
                    });
                }}>
                    <option value="0">okay (0%)</option>
                    <option value="10">it was good (10%)</option>
                    <option value="15">it was very good (15%)</option>
                </select>
                <h2>How did your friend like the service</h2>
                <select value={payForFriend} onChange={(e) => {
                    setPay(pay => {
                        setPayForFriend(parseInt(e.target.value));
                        return payForFriend + pay;
                    });
                }}>
                    <option value="0">okay (0%)</option>
                    <option value="10">it was good (10%)</option>
                    <option value="15">it was very good (15%)</option>
                </select>

                <h2>Your pay is &#8377; {pay}</h2>*/}
                <TipCalculator/>

            </div>
        </>
    )

}

export default App;