import React from 'react';

export type AccordionPropsType = {
   /**
    * Setting the Title for the Accordion
    */
   titleValue: string,
   /**
    * Determining the Position of the Accordion
    */
   collapsed: boolean
   /**
    * Callback with Accordion of local State
    */
   setAccordionCollapsed: () => void
   /**
    * optional Color of header page
    */
   color?: string
}

export function Accordion({collapsed, titleValue, setAccordionCollapsed, color}: AccordionPropsType) {
      return (
         <div>
            <AccordionTitle title={titleValue}
                            setAccordionCollapsed={setAccordionCollapsed}
                            color={color}
            />
            {!collapsed && <AccordionBody/>}
         </div>
      );
}

type AccordionTitlePropsType = {
   title: string
   setAccordionCollapsed: () => void
   color?: string
}

function AccordionTitle({title, setAccordionCollapsed, color}: AccordionTitlePropsType) {
   return <h3
      onClick={setAccordionCollapsed}
      style={{color : color ? color : 'blue'}}
   >{title}</h3>
}

function AccordionBody() {
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   );
}



