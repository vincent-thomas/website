import { ButtonSecondary } from "./button-secondary";

import { ComponentMeta, ComponentStory, Meta } from "@storybook/react";

export default {
  title: "Button",

  component: ButtonSecondary,
} as ComponentMeta<typeof ButtonSecondary>;

const Template: ComponentStory<typeof ButtonSecondary> = (args) => (
  <ButtonSecondary {...args} />
);

export const Secondary = Template.bind({});

Secondary.args = {
  children: "Press me",
};
