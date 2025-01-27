import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '../../components';

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

export const Def: Story = {
  args: {
    value: '',
    name: 'name',
    icon: 'fa-solid fa-face-smile',
    placeholder: 'type your name',
    isTextarea: false,
    onChange: () => {}
  }
};

export const textarea: Story = {
  args: {
    value: '',
    isTextarea: true,
    onChange: () => {}
  }
};
