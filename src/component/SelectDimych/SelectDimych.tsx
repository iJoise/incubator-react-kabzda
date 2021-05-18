import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from "./SelectDimych.module.scss";


type ItemType = {
   title: string
   value: any
}
export type SelectDimychPropsType = {
   value?: any
   onChange: (value: any) => void
   items: ItemType[]
}

export const SelectDimych: React.FC<SelectDimychPropsType> = (
   {
      items,
      onChange,
      value
   }) => {

   const [active, setActive] = useState(false);
   const [hoveredElementValue, setHoveredElementValue] = useState(value);

   const selectedItem = items.find(el => el.value === value);
   const hoveredItem = items.find(el => el.value === hoveredElementValue);

   useEffect(() => {
      setHoveredElementValue(value);
   }, [value]);


   const toggleItems = () => setActive(!active);

   const onItemClick = (value: any) => {
      onChange(value);
      toggleItems();
   }

   const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
         for (let i = 0; i < items.length; i++) {
            if (items[i].value === hoveredElementValue) {
               const pretendentElement = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1];

               if (pretendentElement) {
                  onChange(pretendentElement.value);
                  return;
               }
            }
         }
         if (!selectedItem) {
            onChange(items[0].value);
         }
      }
      if (e.key === 'Enter' || e.key === 'Escape') {
         setActive(false)
      }

   }

   return (
      <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
         <h3 className={s.select__title} onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
         {
            active && <div className={s.select__nav}>
               {
                  items.map(el => {
                     return <div
                        onMouseEnter={() => {
                           setHoveredElementValue(el.value)
                        }}
                        onClick={() => {
                           onItemClick(el.value)
                        }}
                        className={s.select__list + ' ' + (hoveredItem === el ? s.select__selected : '')}
                        key={el.value}
                     >{el.title}
                     </div>
                  })
               }
            </div>
         }
      </div>
   );
}