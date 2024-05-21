import type { Meta, StoryObj } from "@storybook/react";
import Footer from "../../src/components/Footer";

const meta: Meta<typeof Footer> = {
  title: "/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterStory: Story = {};
