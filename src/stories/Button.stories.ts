import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../src/components/Button";

const meta: Meta<typeof Button> = {
  title: "/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {};
