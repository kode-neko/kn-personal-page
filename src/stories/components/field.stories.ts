import { Field } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import '../../app/globals.css'

const meta = {
  title: 'Personal Page/Field',
  component: Field,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    name: 'name',
    icon: 'fa-solid fa-face-smile', 
    placeholder: 'type your name', 
    isTextarea: false
  }
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const def: Story = {};

export const textarea: Story = {
  args: {
    isTextarea: true
  }
};
