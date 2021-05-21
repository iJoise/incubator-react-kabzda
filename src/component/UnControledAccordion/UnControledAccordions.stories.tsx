import {UnControlledAccordion, AccordionPropsType} from './UnControlledAccordion';
import React from "react";
import {Story} from "@storybook/react";
//Функция для установки категории
const categoryAsk = (categoryName: string) => ({
       table: {
          category: categoryName
       }
    })

export default {
   title: 'UnControlledAccordion/UnControlledAccordion',
   component: UnControlledAccordion,
   argTypes: {
      titleValue: {
         //Разворачиваем возвращаемое функцией
         ...categoryAsk('Title')
      }
   },
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {
   return <UnControlledAccordion {...args}/>
}
ModeChanging.args = {
   titleValue: 'Menu',
}

