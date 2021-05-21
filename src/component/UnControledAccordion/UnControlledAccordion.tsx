import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

export type AccordionPropsType = {
   titleValue: string,
}

export function UnControlledAccordion(props: AccordionPropsType) {
   //пример с useState
   // const [collapsed, setCollapsed] = useState(false)
   // const collapsedInTitle = () => setCollapsed(!collapsed);
   //Пример с useReducer
   const [state, dispatch] = useReducer(reducer, {collapsed: false});
   const collapsedInTitle = () => dispatch({type: TOGGLE_COLLAPSED});

   return (
      <div>
         <AccordionTitle title={props.titleValue} collapsedInTitle={collapsedInTitle}/>
         {!state.collapsed && <AccordionBody/>}
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



