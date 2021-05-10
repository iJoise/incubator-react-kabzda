import React, {useState} from 'react';

export type AccordionPropsType = {
   titleValue: string,
}

export function UnControledAccordion(props: AccordionPropsType) {

   const [collapsed, setCollapsed] = useState(false)

   const collapsedInTitle = () => {
      setCollapsed(!collapsed)
   };

   return (
      <div>
         <AccordionTitle title={props.titleValue} collapsedInTitle={collapsedInTitle} />
         {!collapsed && <AccordionBody/>}
      </div>
   );
}

type AccordionTitlePropsType = {
   title: string
   collapsedInTitle: () => void
}

function AccordionTitle({title, collapsedInTitle}: AccordionTitlePropsType) {
   return <h3 onClick={collapsedInTitle}>{title}</h3>
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



