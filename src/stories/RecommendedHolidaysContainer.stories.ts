import type { Meta, StoryObj } from "@storybook/react";
import RecommendedHolidaysContainer from "../../src/components/RecommendedHolidaysContainer";

const meta: Meta<typeof RecommendedHolidaysContainer> = {
  title: "/RecommendedHolidaysContainer",
  component: RecommendedHolidaysContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RecommendedHolidaysContainer>;

export const RecommendedHolidaysContainerStory: Story = {};
