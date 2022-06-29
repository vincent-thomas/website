import { Button as Btn } from "./button";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title } from "../title";

export default {
  title: "Button",
  component: Btn
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = args => (
  <div
    style={{
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
      alignItems: "flex-start"
    }}
  >
    <div style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
      <Btn type='primary'>{args.children}</Btn>
      <Btn type='secondary'>{args.children}</Btn>
      <Btn type='not-styled'>{args.children}</Btn>
    </div>
    <Title size='info'>Active:</Title>
    <Btn {...args} />
  </div>
);

export const Button = Template.bind({});

Button.args = {
  children: "Press me",
  type: undefined
};
