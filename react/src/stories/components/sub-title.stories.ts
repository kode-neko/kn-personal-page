import { SubTitle } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import '../../app/globals.css'

const meta = {
  title: 'Personal Page/SubTitle',
  component: SubTitle,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'This a subtitle'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const def: Story = {};
