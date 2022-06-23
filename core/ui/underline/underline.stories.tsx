import { Underline } from "./underline";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TitleNormal } from "../../components/title/normal";

export default {
  title: "Underline",
  component: Underline
} as ComponentMeta<typeof Underline>;

const Template: ComponentStory<typeof Underline> = ({ children, ...args }) => (
  <Underline {...args}>{children}</Underline>
);

export const Primary = Template.bind({});

Primary.args = {
  children: "Testing"
};
