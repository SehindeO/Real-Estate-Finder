import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown, MdOutlineArrowDropDownCircle } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion'

const Value =() => {
    return(
        <section className= 'v-wrapper'>
            <div className="paddings InnerWidth flexCenter v-container">
                {/*left side*/}

                <div className="image-container">
                    <img src="./value.png" alt=""/>
                </div>
            </div>

            {/*right side*/}
            <div className="flexColStart v-right">
                <span className="orangeText">Our Value</span>
                <span className="primaryText">Value We give to you</span>
                <span className="secondaryText">
                    We are always ready to help by providing the best services for you.
                    <br/>
                    We believe a good place to live can make your life better.

                </span>
                <Accordion
                className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                {
                            data.map((item, i)=> {
                            const [className, setClassName] =useState(null)
                            return (
                                <AccordionItem className={'accordionItem ${className}'} key={i} uuid={i}>
                                <AccordionItemHeading>
                                <AccordionItemButton className="flexcenter accordionButton">

                

                                    <AccordionItemState>
                                        {({expanded})=> expanded
                                         ? setClassName("expanded") 
                                         : setClassName("collapsed")
                                         }
                                    </AccordionItemState>
                                <div classsName="flexCenter icon">{item.icon}</div>
                                <span className="primaryText">
                                    {item.heading}
                                </span>
                                <div className="flexCenter icon">
                                    <MdOutlineArrowDropDownCircle size={20}/>
                                </div>
                                </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.details}</p>
                                </AccordionItemPanel>
                                </AccordionItem>
                            );
                                        })}
                    </Accordion>
                </div>
            
        </section>
    );

};

export default Value;