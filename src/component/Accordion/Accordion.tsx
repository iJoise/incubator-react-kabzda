import React from 'react';

type ItemType = {
   title: string
   value: any
}

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
   onClickItem: (value: any) => void
   items: ItemType[]
}

export function Accordion(
   {
      collapsed,
      titleValue,
      setAccordionCollapsed,
      color,
      items,
      onClickItem
   }: AccordionPropsType) {
   return (
      <div>
         <AccordionTitle title={titleValue}
                         setAccordionCollapsed={setAccordionCollapsed}
                         color={color}
         />
         {!collapsed && <AccordionBody items={items} onClickItem={onClickItem}/>}
      </div>
   );
}

type AccordionTitlePropsType = {
   title: string
   setAccordionCollapsed: () => void
   color?: string
}

function AccordionTitle(
   {
      title,
      setAccordionCollapsed,
      color
   }: AccordionTitlePropsType) {

   return <h3
      onClick={setAccordionCollapsed}
      style={{color: color ? color : 'blue'}}
   >{title}</h3>
}

type AccordionBodyPropsType = {
   items: ItemType[]
   onClickItem: (value: any) => void
}

function AccordionBody({items, onClickItem}:AccordionBodyPropsType) {

   return (
      <ul>
         {items.map((el, index) => <li onClick={() => {onClickItem(el.value)}} key={index}>{el.title}</li> )}
      </ul>
   );
}



