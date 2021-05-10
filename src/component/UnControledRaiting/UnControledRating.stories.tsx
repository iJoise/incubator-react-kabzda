import {RatingPropsType, UnControledRaiting} from './UnControledRaiting';
import React from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
//Функция для установки категории
const categoryAsk = (categoryName: string) => ({
   table: {
      category: categoryName
   }
})

export default {
   title: 'UnControledRaiting/UnControledRaiting',
   component: UnControledRaiting,
   argTypes: {
   },
};

const callback = action('rating change inside component')


const Template: Story<RatingPropsType> = (props) => <UnControledRaiting {...props}/>;

export const RatingModeValue0 = Template.bind({});
RatingModeValue0.args = {
   defaultValue: 0,
   onChange: callback
}
export const RatingModeValue1 = Template.bind({});
RatingModeValue1.args = {
   defaultValue: 1,
   onChange: callback
}
export const RatingModeValue2 = Template.bind({});
RatingModeValue2.args = {
   defaultValue: 2,
   onChange: callback
}
export const RatingModeValue3 = Template.bind({});
RatingModeValue3.args = {
   defaultValue: 3,
   onChange: callback
}
export const RatingModeValue4 = Template.bind({});
RatingModeValue4.args = {
   defaultValue: 4,
   onChange: callback
}
export const RatingModeValue5 = Template.bind({});
RatingModeValue5.args = {
   defaultValue: 5,
   onChange: callback
}