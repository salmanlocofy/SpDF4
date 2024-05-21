import type { Meta, StoryObj } from "@storybook/react";
import HotelCard from "../../src/components/HotelCard";

const meta: Meta<typeof HotelCard> = {
  title: "/HotelCard",
  component: HotelCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HotelCard>;

export const HotelCardStory: Story = {
  args: {
    image: "/image-5@2x.png",
    hotelType: "2-Story beachfront suite",
    hotelName: "Discovery Shores",
    price: "$360/night",
    rating: "4.8",
    reviews: "(116 reviews)",
    propMinWidth: 81,
  },
};
