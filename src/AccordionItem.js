import "./AccordionItem.css"
import {useState} from "react";

function AccordionItem({text, title, num,currentOpen,onOpen}) {

    // const [isOpen, setIsOpen] = useState(false);
    const isOpen=num===currentOpen;
    const handleToggle = () => {
        onOpen(num);
        if(isOpen&&num===currentOpen){
            onOpen(null);
        }
    }
    return (
        <div className="accordion">
            <div className={`item ${isOpen?"open":""}`} onClick={()=>handleToggle()}>
                <h1 className="num">{num<9?`0${num+1}` :num+1}</h1>
                <h1 className="title">{title}</h1>
                <p className={`icon ${!isOpen?"close":""}`}>{!isOpen?"+":"-"}</p>
                {isOpen && <p className="content">{text}</p>}
            </div>
        </div>
    )
}

export default AccordionItem;