import { Underline } from "./underline";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title } from "../../components/title";

export default {
  title: "Underline",
  component: Underline
} as ComponentMeta<typeof Underline>;

const Template: ComponentStory<typeof Underline> = ({ children, ...args }) => (
  <Underline {...args}>
    <Title>{children}</Title>
  </Underline>
);

export const Primary = Template.bind({});

Primary.args = {
  children: "Testing"
};
