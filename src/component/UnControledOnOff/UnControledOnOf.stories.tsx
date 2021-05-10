import {OnOffPropsType, UnControledOnOff} from './UnControledOnOff';
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
   title: 'UnControledOnOff/UnControledOnOff',
   component: UnControledOnOff,
   argTypes: {
      on: {
         ...categoryAsk('Control')
      }
   },
};

const callback = action('onOff clicked')

const Template: Story<OnOffPropsType> = (args) => <UnControledOnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
   defaultOn: true,
   onChange: callback
}
export const OffMode = Template.bind({});
OffMode.args = {
   defaultOn: false,
   onChange: callback
}


