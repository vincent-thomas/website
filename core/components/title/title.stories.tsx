import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title } from ".";

export default {
  title: "Title",
  component: Title
} as ComponentMeta<typeof Title>;
const NormalTemplate: ComponentStory<typeof Title> = args => (
  <Title {...args} />
);

export const Normal = NormalTemplate.bind({});

Normal.args = {
  children: "Press Me"
};
