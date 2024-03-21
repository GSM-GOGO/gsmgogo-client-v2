import Header from './';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    mainText: "GSM GOGO",
    miniText: ["랭킹", "미니게임"],
    point: "30000",
  },
};
