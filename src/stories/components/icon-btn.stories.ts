import { BtnIcon } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import '../../app/globals.css'

const meta = {
  title: 'Personal Page/IconBtn',
  component: BtnIcon,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    icon: 'fa-brands fa-twitter',
    size: 'sm',
    color: 'pink'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BtnIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const sm: Story = {};

export const md: Story = {
  args: {
    size: 'md'
  }
};

export const lg: Story = {
  args: {
    size: 'lg'
  },
};