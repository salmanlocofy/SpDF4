import type { Meta, StoryObj } from "@storybook/react";
import FrameComponent1 from "../../src/components/FrameComponent1";

const meta: Meta<typeof FrameComponent1> = {
  title: "/FrameComponent1",
  component: FrameComponent1,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FrameComponent1>;

export const FrameComponent1Story: Story = {};
