import type { Meta, StoryObj } from "@storybook/react";
import PopDestinationsMain from "../../src/components/PopDestinationsMain";

const meta: Meta<typeof PopDestinationsMain> = {
  title: "/PopDestinationsMain",
  component: PopDestinationsMain,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PopDestinationsMain>;

export const PopDestinationsMainStory: Story = {};
