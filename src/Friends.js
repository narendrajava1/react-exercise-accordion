
import "./App.css"
import Friend from "./Friend";

function Friends({friends,selectedFriend}) {

    return (
        <ul>
            {friends.map(friend => {
                return <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend}/>
            })}
        </ul>

    )
}

export default Friends;

