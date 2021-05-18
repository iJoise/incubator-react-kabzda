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

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked')


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
   titleValue: 'Menu',
   collapsed: true,
   setAccordionCollapsed: callback,
   items: [
      {title: 'Polina', value: 1},
      {title: 'Kirill', value: 2},
      {title: 'Ilya', value: 3},
      {title: 'Anastasiya', value: 4}
   ],
   onClickItem: onClickCallback
}

export const UsersCollapsedMode = Template.bind({});
UsersCollapsedMode.args = {
   titleValue: 'Users',
   collapsed: false,
   setAccordionCollapsed: callback,
   items: [
      {title: 'Polina', value: 1},
      {title: 'Kirill', value: 2},
      {title: 'Ilya', value: 3},
      {title: 'Anastasiya', value: 4}
   ],
   onClickItem: (value) => alert(`user with ID ${value} should be happy`)
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
   const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
   return <Accordion {...args}
                     collapsed={accordionCollapsed}
                     setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
   />
}
ModeChanging.args = {
   titleValue: 'Menu',
   items: [
      {title: 'Polina', value: 1},
      {title: 'Kirill', value: 2},
      {title: 'Ilya', value: 3},
      {title: 'Anastasiya', value: 4}
   ],
   onClickItem: (value) => alert(`user with ID ${value} should be happy`)
}
