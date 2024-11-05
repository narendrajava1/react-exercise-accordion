import Friends from "./Friends";
import initialFriends from "./InitialFriends";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import {useState} from "react";

function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const handleAddFriend = (friend) => {
        setFriends(friends => [...friends, friend]);
        console.log(`from App component: ${friends}`);
    }

    const handleShowAddFriend = () => {
        setShowAddFriend(showAddFriend => !showAddFriend);
    }

    const handleShowSplitWindow = (selectedFriend) => {
        return !selectedFriend ? true : false;
    }

    const handleSplitMoney = (value) => {

        setFriends(friends => {
           return  friends.map((friend) => {
                    return friend.id === selectedFriend.id ?
                        {...friend, balance: friend.balance + value} :
                        friend;
                }
            )
        })
        setSelectedFriend(null);
    }
    return (
        <div className="app">
            <div className="sidebar">
                <Friends friends={friends} selectedFriend={setSelectedFriend}/>
            </div>
            <Button classVar={"add-friend-btn"}
                    onClick={() => handleShowAddFriend()}>{showAddFriend ? "close" : "Add Friend"}</Button>
            {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
            {handleShowSplitWindow() && <FormSplitBill selectedFriend={selectedFriend} splitMoney={handleSplitMoney}/>}
        </div>
    )

}

export default App;