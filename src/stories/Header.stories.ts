import type { Meta, StoryObj } from "@storybook/react";
import Header from "../../src/components/Header";

const meta: Meta<typeof Header> = {
  title: "/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderStory: Story = {};
