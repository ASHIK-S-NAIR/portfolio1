import React, {useRef} from 'react';
import Chevron from '../images/Chevron Right.png';

function AccordionItem({faq, active, onToggle}) {

    const {question, answer} = faq;
    const contentE1 = useRef();

    return (
        <li className={`faq-accord ${active ? "active" : " "}`}>
            <button className="faq-question-section" onClick= {onToggle}>
                <img src={Chevron} alt="" className={`faq-question-icon ${active ? "active" : " "}`} />
                <h3 className="faq-question">{question}</h3>
            </button>
            <div ref={contentE1} className= 'faq-answer-section' style= {active ? {height: contentE1.current.scrollHeight} : {height: "0px"}}>
                <p className="faq-answer">{answer}</p>
            </div>
        </li>
    )
}

export default AccordionItem
