import {UnControledAccordion, AccordionPropsType} from './UnControledAccordion';
import React, {useState} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
//Функция для установки категории
const categoryAsk = (categoryName: string) => ({
       table: {
          category: categoryName
       }
    })

export default {
   title: 'UnControledAccordion/UnControledAccordion',
   component: UnControledAccordion,
   argTypes: {
      titleValue: {
         //Разворачиваем возвращаемое функцией
         ...categoryAsk('Title')
      }
   },
};

const callback = action('accordion mode change event fired')

export const ModeChanging: Story<AccordionPropsType> = (args) => {
   return <UnControledAccordion {...args}/>
}
ModeChanging.args = {
   titleValue: 'Menu',
}

