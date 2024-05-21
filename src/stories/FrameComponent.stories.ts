import type { Meta, StoryObj } from "@storybook/react";
import FrameComponent from "../../src/components/FrameComponent";

const meta: Meta<typeof FrameComponent> = {
  title: "/FrameComponent",
  component: FrameComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FrameComponent>;

export const FrameComponentStory: Story = {};
