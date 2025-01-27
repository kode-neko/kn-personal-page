import type { Meta, StoryObj } from '@storybook/react';
import { SwLang } from '../../components';

const meta = {
  title: 'Personal Page/SwLang',
  component: SwLang,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isEn: false
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwLang>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {
  args: {
    isEn: false,
    onClick: () => {},
  },
};

export const Def02: Story = {
  args: {
    isEn: true,
    onClick: () => {},
  }
};