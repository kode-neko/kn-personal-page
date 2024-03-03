import { Footer } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import '../../app/globals.css'

const meta = {
  title: 'Personal Page/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const def: Story = {};