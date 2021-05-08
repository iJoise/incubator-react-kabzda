import React from 'react';

type AccordionPropsType = {
   titleValue: string,
   collapsed: boolean
   setAccordionCollapsed: () => void
}

function Accordion({collapsed, titleValue, setAccordionCollapsed}: AccordionPropsType) {
      return (
         <div>
            <AccordionTitle title={titleValue}
                            setAccordionCollapsed={setAccordionCollapsed}
            />
            {!collapsed && <AccordionBody/>}
         </div>
      );
}

type AccordionTitlePropsType = {
   title: string
   setAccordionCollapsed: () => void
}

function AccordionTitle({title, setAccordionCollapsed}: AccordionTitlePropsType) {
   return <h3 onClick={setAccordionCollapsed}>{title}</h3>
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

export default Accordion;


