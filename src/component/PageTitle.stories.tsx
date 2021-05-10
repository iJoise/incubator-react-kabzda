import {PageTitle, PageTitlePropsType} from './PageTitle';
import React from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
   title: 'PageTitle/PageTitle',
   component: PageTitle,
   argTypes: {},
};

const callback = action('accordion mode change event fired')

const Template: Story<PageTitlePropsType> = (args) => <PageTitle {...args} />;

export const PageTitleMode = Template.bind({});
PageTitleMode.args = {
   title: 'it-incubator'
}