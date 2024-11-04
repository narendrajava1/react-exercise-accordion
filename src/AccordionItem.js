import "./AccordionItem.css"
import {useState} from "react";

function AccordionItem({text, title, num}) {

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(isOpen => !isOpen);
    }
    return (
        <div className="accordion">
            <div className={`item ${isOpen?"open":""}`} onClick={()=>handleToggle()}>
                <h1 className="num">{num<9?`0${num+1}` :num+1}</h1>
                <h1 className="title">{title}</h1>
                <p className="icon">+</p>
                {isOpen && <p className="content">{text}</p>}
            </div>
        </div>
    )
}

export default AccordionItem;