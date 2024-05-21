import type { Meta, StoryObj } from "@storybook/react";
import PopularStays from "../../src/components/PopularStays";

const meta: Meta<typeof PopularStays> = {
  title: "/PopularStays",
  component: PopularStays,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PopularStays>;

export const PopularStaysStory: Story = {};
