import PlayingContainer from './';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PlayingContainer> = {
  component: PlayingContainer,
};

export default meta;

type Story = StoryObj<typeof PlayingContainer>;

export const Primary: Story = {
  args: {
    isYes: true,
    isFinal: false,
    Playing: ["축구", "농구", "야구"],
    TeamName: ["정희화이팅", "임정희싹싹싺"],
    Grade: ["A"],
    Time: ["10:00"],
    isLive: true,
    isVoting: true,
  },
};
