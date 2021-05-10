import {Accordion, AccordionPropsType} from './Accordion';
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
   title: 'Accordion/Accordion',
   component: Accordion,
   argTypes: {
      color: {
         control: 'color',
         table: {
            category: 'Colors'
         }
      },
      titleValue: {
         //Разворачиваем возвращаемое функцией
         ...categoryAsk('Title')
      }
   },
};

const callback = action('accordion mode change event fired')

export const ModeChanging: Story<AccordionPropsType> = (args) => {
   const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
   return <Accordion {...args}
                     collapsed={accordionCollapsed}
                     setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
   />
}
ModeChanging.args = {
   titleValue: 'Menu',
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
   titleValue: 'Menu',
   collapsed: true,
   setAccordionCollapsed: callback
}

export const UsersCollapsedMode = Template.bind({});
UsersCollapsedMode.args = {
   titleValue: 'Users',
   collapsed: false,
   setAccordionCollapsed: callback
}

