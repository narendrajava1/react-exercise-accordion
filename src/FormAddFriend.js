import Button from "./Button";
import {useState} from "react";

function FormAddFriend({onAddFriend}) {
    const [name,setName]=useState('');
    const [image,setImage]=useState('')
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(!name||!image)return;
        const id=crypto.randomUUID();
        const newFriend={
            id,
            name,
            image:`${image}?=${id}`,
            balance:0
        }
        console.log(`from Add friend component: ${newFriend}`);
        onAddFriend(newFriend);
        setName('');
        setImage('');
    }
    return (
        <form className="form-add-friend" onSubmit={e=>handleOnSubmit(e)}>
            <label>Friend Name</label>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
            <label>Image URL</label>
            <input type="text" placeholder="image url" onChange={(e)=>setImage(e.target.value)}/>
            <Button classVar="add">Add</Button>
        </form>
    )
}

export default FormAddFriend;