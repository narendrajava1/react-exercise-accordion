import Button from "./Button";
import {useState} from "react";

function Friend({friend, selectedFriend}) {
    const [showSelect, setShowSelect] = useState(true);
    const handleSelect = (onSelectedFriend) => {
        selectedFriend(onSelectedFriend);
        // if (onSelectedFriend.name === friend.name) {

            setShowSelect(showSelect => !showSelect);
        if(!showSelect){
            selectedFriend(null);
        }
        // }
        // if(!showSelect){
        //     selectedFriend({});
        // }
    }

    return (
        <li className="friend-box">
            <img src={friend.image} alt={friend.name}/>
            <h3>{friend.name}</h3>
            {friend.balance < 0 && <p>You owe {friend.name} &#8377;{friend.balance}</p>}
            {friend.balance > 0 && <p>{friend.name} owe you &#8377;{friend.balance}</p>}
            {friend.balance === 0 && <p>{friend.name} and you even</p>}
            <Button onClick={() => handleSelect(friend)}>{showSelect ? "select" : "close"}</Button>
        </li>
    )
}

export default Friend;