import {OnOff, OnOffPropsType} from './OnOff';
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
   title: 'OnOff/OnOff',
   component: OnOff,
   argTypes: {
      on: {
         ...categoryAsk('Control')
      }
   },
};

const callback = action('accordion mode change event fired')

export const OnOffModeSwitch: Story<OnOffPropsType> = (props) => {
   let [switchOn, setSwitchOn] = useState(false);
   return <OnOff on={switchOn} onChange={setSwitchOn}/>
};

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
   on: true,
   onChange: () => callback()
}
export const OffMode = Template.bind({});
OffMode.args = {
   on: false,
   onChange: () => callback()
}


