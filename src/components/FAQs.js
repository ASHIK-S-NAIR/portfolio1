import React,{useState} from 'react';
import {faqs} from '../data';
import AccordionItem from './AccordionItem';


function Accordion() {

    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if(clicked === index){
            return setClicked("0");
        }
        setClicked(index);
    }

    return (
        <section className="faq-section">
            <div className="wrap">
                <h1 className="faq-heading">FAQ'S</h1>
                <ul className="faq-container">
                    {
                        faqs.map((faq, index) => {
                            return <AccordionItem onToggle={ () => handleToggle(index)} active={clicked === index} key={index} faq={faq} />
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Accordion
