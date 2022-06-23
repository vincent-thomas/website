import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TitleNormal } from ".";

export default {
  title: "Title",
  component: TitleNormal
} as ComponentMeta<typeof TitleNormal>;
const NormalTemplate: ComponentStory<typeof TitleNormal> = args => (
  <TitleNormal {...args} />
);

export const Normal = NormalTemplate.bind({});

Normal.args = {
  children: "Press Me"
};
