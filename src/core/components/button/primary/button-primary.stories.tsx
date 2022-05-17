import { ButtonPrimary } from "./button-primary";

import { ComponentMeta, ComponentStory, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: ButtonPrimary,
} as ComponentMeta<typeof ButtonPrimary>;

const Template: ComponentStory<typeof ButtonPrimary> = (args) => (
  <ButtonPrimary {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: "Press me",
};
