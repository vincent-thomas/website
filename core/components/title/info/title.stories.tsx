import { TitleInfo } from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Title",
  component: TitleInfo
} as ComponentMeta<typeof TitleInfo>;

const InfoTemplate: ComponentStory<typeof TitleInfo> = args => (
  <TitleInfo {...args} />
);

export const Info = InfoTemplate.bind({});

Info.args = {
  children: "Press me"
};
