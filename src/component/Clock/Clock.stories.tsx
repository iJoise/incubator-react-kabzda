import React from "react";
import {Clock} from "./Clock";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {PageTitle, PageTitlePropsType} from "../PageTitle";


export default {
   title: 'Clock/Clock',
   component: Clock,
   argTypes: {},
};

const callback = action('tick')

const Template: Story = (args) => <Clock {...args} />;

export const ClockMode = Template.bind({});
ClockMode.args = {

}