import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../../components';

const meta = {
  title: 'Personal Page/Tag',
  component: Tag,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'React',
    color: 'blue'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const def: Story = {};

export const pink: Story = {
  args: {
    color: 'pink'
  }
};