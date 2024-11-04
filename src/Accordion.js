import {useState} from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {

    // const [showText, setShowText] = useState(false);
    const [currOpen,setCurrOpen]=useState(null);

    const faqs = [{
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    }, {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    }, {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }];

    return (faqs.map((faq, i) => <AccordionItem title={faq.title} text={faq.text} num={i} onOpen={setCurrOpen} key={faq.title} currentOpen={currOpen}/>))
}

export default Accordion;