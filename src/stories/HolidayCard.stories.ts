import type { Meta, StoryObj } from "@storybook/react";
import HolidayCard from "../../src/components/HolidayCard";

const meta: Meta<typeof HolidayCard> = {
  title: "/HolidayCard",
  component: HolidayCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HolidayCard>;

export const HolidayCardStory: Story = {
  args: {
    image: "/image@2x.png",
    id: "4D3N",
    price: "$899",
    propMinWidth: 120,
    propMinWidth1: 72,
  },
};
