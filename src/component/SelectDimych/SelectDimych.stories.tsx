import {SelectDimych, SelectDimychPropsType} from './SelectDimych';
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
   title: 'SelectDimych/SelectDimych',
   component: SelectDimych,
   argTypes: {},
};

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

export const ModeChanging: Story<SelectDimychPropsType> = (args) => {
   const [value, setValue] = useState('2');
   return <SelectDimych {...args}
                        onChange={setValue}
                        value={value}
   />
}
ModeChanging.args = {
   items: [
      {title: 'Moscow', value: '1'},
      {title: 'Kiev', value: '2'},
      {title: 'Minsk', value: '3'},
      {title: 'Paris', value: '4'}
   ],
}
export const WithoutValue: Story<SelectDimychPropsType> = (args) => {
   const [value, setValue] = useState(null);
   return <SelectDimych {...args}
                        onChange={setValue}
                        value={value}
   />
}
WithoutValue.args = {
   items: [
      {title: 'Moscow', value: '1'},
      {title: 'Kiev', value: '2'},
      {title: 'Minsk', value: '3'},
      {title: 'Paris', value: '4'}
   ],
}
