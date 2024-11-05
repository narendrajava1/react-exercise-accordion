import Button from "./Button";
import {useState} from "react";

function FormSplitBill({selectedFriend, splitMoney}) {
    const [bill, setBill] = useState('');
    const [payByUser, setPayByUser] = useState('');
    const payByFriend = bill ? bill - payByUser : "";

    const [whoIsPaying, setWhoIsPaying] = useState('user');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!bill||!payByUser)return;
        splitMoney(whoIsPaying==='user'?payByUser:-payByFriend);
    }
    return (
        <>
            {selectedFriend && <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
                <h2>Split a bill with {selectedFriend.name}</h2>
                <label>Bill Value</label>
                <input type="text" onChange={(e) => {
                    setBill(Number(e.target.value));
                }} value={bill}/>
                <label> Your Expense</label>
                <input type="text" onChange={(e) => {
                    setPayByUser(Number(e.target.value) > bill ? payByUser : Number(e.target.value));
                }} value={payByUser}/>
                <label> Your Friend {selectedFriend.name} Expense</label>
                <input type="text" value={payByFriend}/>
                <label>Who is paying the bill</label>
                <select
                    value={whoIsPaying}
                    onChange={e => setWhoIsPaying(e.target.value)}>
                    <option value="user">You</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>
                <Button>Split Bill</Button>
            </form>}
        </>
    )
}

export default FormSplitBill;