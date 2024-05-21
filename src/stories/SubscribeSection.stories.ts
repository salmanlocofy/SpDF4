import type { Meta, StoryObj } from "@storybook/react";
import SubscribeSection from "../../src/components/SubscribeSection";

const meta: Meta<typeof SubscribeSection> = {
  title: "/SubscribeSection",
  component: SubscribeSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SubscribeSection>;

export const SubscribeSectionStory: Story = {};
